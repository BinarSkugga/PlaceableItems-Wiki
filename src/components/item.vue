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
    import {ModelViewer, JsonModel} from './minecraft/mc-model-viewer'
    import model from './model'

    export default {
        name: 'item',
        components: {
            model
        },
        props: {
            item: Object
        }
    }
</script>

<style scoped>

</style>
