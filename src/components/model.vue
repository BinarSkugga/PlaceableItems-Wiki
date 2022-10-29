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
                            <div v-show="loaded" ref="viewer" class="viewer"></div>
                            <v-sheet v-if="size && !loaded" :width="size + 'px'" :height="size + 'px'" class="loder-viewer d-flex justify-center align-center">
                                <v-progress-circular color="primary" indeterminate></v-progress-circular>
                            </v-sheet>
                    </v-card-text>
                </v-card>
            </v-lazy>
        </v-dialog>
    </v-sheet>
</template>

<script>
    import {ModelViewer, JsonModel as JM} from './minecraft/mc-model-viewer'
    import {JsonModel} from './minecraft/JsonModel'

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
                loaded: null,
                size: null
            }
        },
        methods: {
          open() {
            this.dialog = true;
            setTimeout(_ => {
                this.viewer = this.$refs.viewer;
                this.size = this.viewer.parentElement.clientWidth;

                this.mv = new ModelViewer(this.viewer, {width: this.size, height: this.size}, {x: 9, y: 9, z: 18}, {x: 0, y: -6, z: 0});
                this.resizeCB = window.addEventListener('resize', this.onResize);

                let modelName = this.item.modelPath.split('/').slice(-1)[0].split('.')[0];

                new JsonModel(this.item, this.axios, data => {
                    this.mv.load(new JM(modelName, data.model, data.textures));
                    this.loaded = true;
                    this.$ga.event('model', 'click', modelName);
                });
            }, 50);
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
                  this.mv.removeAll();
                  this.mv.renderer.dispose();
                  this.$refs.viewer.innerHTML = '';
                  delete this.mv;
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
    .loder-viewer {

    }
</style>
