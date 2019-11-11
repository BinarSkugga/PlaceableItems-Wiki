<template>
    <v-sheet>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title>{{item.itemName}}</v-list-item-title>
                <v-list-item-subtitle style="white-space: pre-line">{{item.description}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon>
                <model :item="item"></model>
            </v-list-item-icon>
        </v-list-item>
        <v-divider></v-divider>
    </v-sheet>
</template>

<script>
    import {ModelViewer, JsonModel} from '../assets/mc-model-viewer'
    import model from './model'

    export default {
        name: 'item',
        components: {
            model
        },
        props: {
            item: Object
        },
        data() {
            return {
                blockURL: 'https://raw.githubusercontent.com/Ferdzz/PlaceableItems/1.14.3/Forge/src/main/resources/assets/placeableitems/models/block/',
                textureURL: 'https://raw.githubusercontent.com/Ferdzz/PlaceableItems/1.14.3/Forge/src/main/resources/assets/placeableitems/textures/',
            }
        },
        mounted() {
            // let mv = new ModelViewer(this.$refs.viewer, {width: 300, height: 300}, {x: 8, y: 8, z: 16}, {x: 0, y: -4, z: 0});
            // window.addEventListener('resize', mv.resize);
            // this.getModel('dragon_breath_down', true).then(data => {
            //     let mcmetas = data.textures.filter(t => 'mcmeta' in t).map(t => t.mcmeta);
            //     Promise.all(mcmetas.map(p => p.catch(e => e))).then(mcmetas => {
            //         for(let i = 0; i < data.textures.length; i++) {
            //             if('mcmeta' in data.textures[i] && !(mcmetas[i] instanceof Error)) {
            //                 data.textures[i].mcmeta = JSON.stringify(mcmetas[i].data);
            //             } else {
            //                 delete data.textures[i].mcmeta;
            //             }
            //         }
            //         let model = new JsonModel(data.name, data.json, data.textures, false);
            //         mv.load(model);
            //     });
            // });
        },
        methods: {
            getModel(name, animated = false) {
                return this.axios.get(this.blockURL + name + '.json')
                    .then(data => {
                        let textures = [];
                        Object.keys(data.data['textures']).forEach(k => {
                            if (k !== 'particle') {
                                let temp = data.data['textures'][k].split('/');
                                let text_name = temp[temp.length - 1];
                                let full_text_name = data.data['textures'][k].split(':')[1];
                                let texturePath = this.textureURL + full_text_name + '.png';
                                let texture = {name: text_name, texture: texturePath};
                                if (animated) {
                                    try {
                                        let mcmeta = this.axios.get(this.textureURL + full_text_name + '.png.mcmeta');
                                        texture['mcmeta'] = mcmeta;
                                    } catch (e) {}
                                }
                                textures.push(texture)
                            }
                        });
                        return {name: name, json:JSON.stringify(data.data), textures: textures};
                    });
            }
        }
    }
</script>

<style scoped>

</style>
