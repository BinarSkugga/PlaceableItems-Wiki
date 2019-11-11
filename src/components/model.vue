<template>
    <v-sheet>
        <v-btn text icon @click.stop="open()">
          <v-icon>mdi-eye</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" max-width="500px" width="100%">
            <v-lazy>
                <v-card width="100%">
                    <v-card-title>{{item.itemName}}</v-card-title>
                    <v-card-text class="px-0 pb-6">
                            <div ref="viewer" class="viewer"></div>
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
                viewer: null,
                baseURL: 'https://raw.githubusercontent.com/Ferdzz/PlaceableItems/1.14.3/Forge/src/main/resources/assets/placeableitems/'
            }
        },
        methods: {
          open() {
            this.dialog = true;
            setTimeout(_ => {
                this.viewer = this.$refs.viewer;
                let size = this.viewer.parentElement.clientWidth;

                this.mv = new ModelViewer(this.viewer, {width: size, height: size}, {x: 9, y: 9, z: 18}, {x: 0, y: -4, z: 0});
                this.resizeCB = window.addEventListener('resize', this.onResize);

                let promises = [this.axios.get(this.baseURL + this.item.modelPath)];

                Promise.all(promises.map(p => p.catch(e => e))).then(values => {
                    let textures = this.item.textures.map(t => { return {name: t.name, texture: this.baseURL + t.texture} });
                    this.mv.load(new JsonModel(this.item.itemName, JSON.stringify(values[0].data), textures));
                });
            }, 100);
          },
          onResize() {
              if(this.viewer) {
                  let size = this.viewer.parentElement.clientWidth;
                  this.mv.resize({width: size, height: size});
              }
          }
        },
        watch: {
            dialog(newVal, old_val) {
              if(!newVal) {
                  this.$refs.viewer.innerHTML = '';
                  window.removeEventListener('resize', this.onResize);
              }
            }
          }
    }
</script>

<style scoped lang="scss">
    .viewer {
        position: relative;
        margin-top: -20px;
        ::v-deep canvas:focus {
            outline: none;
        }
    }
</style>
