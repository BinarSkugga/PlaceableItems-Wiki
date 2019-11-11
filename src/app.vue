<template>
  <v-app>
    <v-sheet class="d-flex flex-column align-center justify-center">
      <v-parallax src="./assets/header.jpg" class="parallax">
        <v-img src="./assets/logo.png" class="logo" contain></v-img>
      </v-parallax>
      <v-sheet class="pa-7 white" width="100%" max-width="1300px">
          <item v-for="item in meta" :key="item.itemName" :item="item"></item>
      </v-sheet>
    </v-sheet>
  </v-app>
</template>

<script>
  import item from './components/item';

  export default {
    name: 'App',

    components: {
      item,
    },

    data: () => ({
      metaURL: 'https://raw.githubusercontent.com/Ferdzz/PlaceableItems/1.14.3/wiki/data.json',
      meta: null
    }),

    mounted() {
      this.getMetadata().then(data => {
        this.meta = data.data.sort((a, b) => a.itemName.localeCompare(b.itemName));
      });
    },

    methods: {
      getMetadata() {
        return this.axios.get(this.metaURL);
      },
    }
  };
</script>

<style scoped lang="scss">
  .logo {
      max-height: 70%;
      .v-image__image {
        background-size: contain !important;
      }
  }

  .parallax {
      max-width: 100%;
  }

  ::v-deep .v-parallax__image-container {
    filter: blur(1px);
  }
</style>
