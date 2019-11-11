<template>
    <v-sheet>
        <v-btn text icon @click.stop="open()">
          <v-icon>mdi-eye</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" width="500px">
            <v-lazy>
                <v-card width="500px" height="500px">
                    <v-card-title>{{item.itemName}}</v-card-title>
                    <v-card-text>
                            <div ref="viewer"></div>
                    </v-card-text>
                </v-card>
            </v-lazy>
        </v-dialog>
    </v-sheet>
</template>

<script>
    import {ModelViewer, JsonModel} from '../assets/mc-model-viewer'

    export default {
        name: "model",
        props: {
            item: Object
        },
        data() {
            return {
                dialog: null,
                mv: null,
                resizeCB: null,
                baseURL: 'https://raw.githubusercontent.com/Ferdzz/PlaceableItems/1.14.3/Forge/src/main/resources/assets/placeableitems/'
            }
        },
        methods: {
          open() {
            this.dialog = true;
            setTimeout(_ => {
                let viewer = this.$refs.viewer;
                this.mv = new ModelViewer(viewer, {width: 500, height: 500}, {x: 10, y: 10, z: 20}, {x: 0, y: -4, z: 0});
                this.resizeCB = window.addEventListener('resize', this.mv.resize);

                let promises = [this.axios.get(this.baseURL + this.item.modelPath)];

                Promise.all(promises.map(p => p.catch(e => e))).then(values => {
                    let textures = this.item.textures.map(t => { return {name: t.name, texture: this.baseURL + t.texture} });
                    this.mv.load(new JsonModel(this.item.itemName, JSON.stringify(values[0].data), textures));
                });
            }, 15);
          }
        },
        watch: {
            dialog(newVal, old_val) {
              if(!newVal) {
                  this.$refs.viewer.innerHTML = '';
                  window.removeEventListener('resize', this.resizeCB);
              }
            }
          }
    }
</script>

<style scoped>

</style>
