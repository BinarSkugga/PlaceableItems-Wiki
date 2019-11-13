<template>
  <v-fade-transition>
    <v-app class="d-flex align-center" v-show="loaded">
      <v-sheet class="d-flex flex-column align-center justify-center">
        <v-parallax src="./assets/header.jpg" class="parallax">
          <v-img src="./assets/logo.png" class="logo" contain></v-img>
        </v-parallax>
        <v-container class="pa-7 white list-container" v-if="meta">
            <v-text-field label="Search" v-model="searchQuery" append-icon="mdi-magnify" class="px-3 py-5"></v-text-field>
            <item v-for="item in getSearchedItems()" :key="item.itemName" :item="item"></item>
        </v-container>
      </v-sheet>
    </v-app>
  </v-fade-transition>
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
      meta: null,
      searchQuery: '',
      loaded: null
    }),

    mounted() {
      setTimeout(_ => this.loaded = true, 150);
      this.getMetadata().then(data => {
        this.meta = data.data.sort((a, b) => a.itemName.localeCompare(b.itemName));
      });
    },

    methods: {
      getMetadata() {
        return this.axios.get(this.metaURL);
      },
      getSearchedItems() {
        if(this.searchQuery.trim().length > 0) {
          return this.meta.filter(i => {
            if(i.itemName.toLowerCase().includes(this.searchQuery.toLowerCase().trim())) return true;
            if('description' in i && i.description.toLowerCase().includes(this.searchQuery.toLowerCase().trim())) return true;
            return false;
          });
        } else {
          return this.meta;
        }
      }
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
      width: 100%;
  }

  .list-container {
    max-width: 1000px;
    width: 100%;
  }

  ::v-deep .v-parallax__image-container {
    filter: blur(1px);
  }
</style>
