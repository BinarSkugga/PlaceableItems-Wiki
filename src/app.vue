<template>
  <v-fade-transition>
    <v-app class="d-flex align-center" v-show="loaded">
      <v-sheet class="d-flex flex-column align-center justify-center">
        <v-parallax src="./assets/header.png" class="parallax">
          <v-img src="./assets/logo.png" class="logo"></v-img>
        </v-parallax>
        <v-container class="pa-7 white list-container" v-if="meta">
            <v-text-field label="Search" v-model="searchQuery" @blur="searchBlur()" append-icon="mdi-magnify" class="px-3 py-5"></v-text-field>
            <item v-for="item in getSearchedItems()" :key="item.itemName" :item="item"></item>
        </v-container>
      </v-sheet>
      <v-tooltip left v-if="trackingFirst">
        <template slot="activator" slot-scope="{ on }">
          <v-btn v-on="on" @click="toggleTracking()" :color="tracked ? 'green lighten-4': 'red lighten-4'"
                 fixed small fab bottom right>
            <v-icon>mdi-radar</v-icon>
          </v-btn>
        </template>
        <span>{{tracked ? 'Disable tracking' : 'Enable tracking'}}</span>
      </v-tooltip>
      <cookie-law theme="dark-lime" v-if="!trackingFirst">
        <v-sheet width="100%" class="d-flex flex-wrap transparent justify-space-between align-center agreement" slot-scope="props">
          <div class="grey--text text--lighten-4">
            We use tracking and cookies to know more about how different functionalities are used. This is an opt-in feature and will not activate until accepted.
          </div>
          <div class="mx-5">
            <v-btn color="blue-grey white--text mr-3" @click="refuseTracking(props.close)">Nope</v-btn>
            <v-btn color="green white--text" @click="acceptTracking(props.accept)">Accept</v-btn>
          </div>
        </v-sheet>
      </cookie-law>
    </v-app>
  </v-fade-transition>
</template>

<script>
  import item from './components/item';
  import CookieLaw from 'vue-cookie-law'

  export default {
    name: 'App',

    components: {
      item,
      CookieLaw
    },

    data: () => ({
      metaURL: 'https://raw.githubusercontent.com/Ferdzz/PlaceableItems/1.14.3/wiki/data.json',
      meta: null,
      searchQuery: '',
      loaded: null,
      tracked: null,
      trackingFirst: null
    }),

    mounted() {
      if(this.trackingValue()) this.tracked = true;
      if(this.trackingSet()) this.trackingFirst = true;
      this.$ga.page('/');
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
      },
      trackingSet() {
        return localStorage.getItem('cookie:accepted');
      },
      trackingValue() {
        return localStorage.getItem('cookie:accepted') === 'true';
      },
      toggleTracking() {
        if(this.tracked) {
          localStorage.setItem('cookie:accepted', 'false');
          this.tracked = false;
          this.$ga.disable();
        } else {
          localStorage.setItem('cookie:accepted', 'true');
          this.tracked = true;
          this.$ga.enable();
          this.$ga.page('/');
        }
      },
      searchBlur() {
        this.searchQuery = this.searchQuery.trim();
        if(this.searchQuery.length > 0) {
          this.$ga.event('search', 'used')
        }
      },
      acceptTracking(accept) {
        this.$ga.enable();
        this.$ga.page('/');
        localStorage.setItem('cookie:accepted', 'true');
        this.tracked = true;
        this.trackingFirst = true;
        accept();
      },
      refuseTracking(close) {
        this.$ga.disable();
        localStorage.setItem('cookie:accepted', 'false');
        this.tracked = false;
        this.trackingFirst = true;
        close();
      },
    }
  };
</script>

<style scoped lang="scss">
  .logo {
      max-height: 70%;
      position: relative;
      ::v-deep .v-image__image {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        max-width: 1000px !important;
        background-size: contain !important;
      }
  }

  .parallax {
      width: 100%;
      background-color: #59E2FF;
  }

  .list-container {
    max-width: 1000px;
    width: 100%;
  }

  ::v-deep .v-parallax__image-container {
    filter: blur(1px);
  }

  @media (max-width: 1350px) {
    ::v-deep .Cookie .agreement {
        flex-direction: column;

      div:last-child {
        margin-top: 20px;
      }

      div:first-child {
        text-align: center;
      }
    }
  }
</style>
