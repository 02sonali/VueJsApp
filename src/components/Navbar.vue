<template>
  <nav id="header">
    <!--<v-toolbar flat :dark="this.userPrefs.dark" color="primary">-->
    <v-toolbar flat dark color="primary">
      <v-toolbar-side-icon class="" @click="drawerOpen = !drawerOpen" />
      <v-toolbar-title class="grey--tex">
        <span class="font-weight-light">{{ appNameFull }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <router-link to="/" exact> User Management </router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/charts" exact>
            Dashboard
          </router-link>
        </v-btn>
        <!-- <button type="button" aria-label="Translations" class="v-btn v-btn--flat v-btn--text theme--dark v-size--default" style="min-width:48px;"><span class="v-btn__content"><div class="v-responsive v-image" style="width:26px;"><div class="v-responsive__sizer" style="padding-bottom: 100%;"></div><div class="v-image__image v-image__image--cover" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/flags/us.png&quot;); background-position: center center;"></div><div class="v-responsive__content" style="width: 24px;"></div></div></span></button> -->
        <select v-model="$i18n.locale">
          <option v-for="(lang, i) in languages" :key="`Lang${i}`" :value="lang.locale">{{ lang.title }}</option>
        </select>

      </v-toolbar-items>
      <!--<v-btn flat color="dark grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>-->
    </v-toolbar>
    <v-navigation-drawer
      :dark="this.userPrefs.dark"
      :mini-variant="isMini"
      app
      hide-overlay
      temporary
      v-model="drawerOpen"
    >
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title" v-show="!isMini">
              {{ appNameSmall }}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile
          v-for="item in languages"
          :key="item.locale"
          :name="item"
          @click="item.action(item)"
        >
          <!-- <v-list-tile-action>
            <v-icon>{{ item }}</v-icon>
          </v-list-tile-action> -->

          <v-list-tile-content>
            <v-list-tile-title>{{ item }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>

        <v-list-tile @click="isMini = !isMini">
          <v-list-tile-action v-show="isMini">
            <v-icon>call_made</v-icon>
          </v-list-tile-action>
          <v-list-tile-action v-show="!isMini">
            <v-icon>call_received</v-icon>
          </v-list-tile-action>

          <v-list-tile-content v-show="!isMini">
            <v-list-tile-title>MINIFY</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
export default {
  data() {
    return {
      appNameSmall: "Samsung SDS",
      isMini: false,
      items: [
        {
          title: "HOME",
          icon: "home",
          action: this.navigate,
          path: "/charts"
        },
        { title: "CATALOG", icon: "view_carousel", action: this.dummyClick },
        { title: "PROJECT", icon: "work", action: this.dummyClick },
        { title: "WORKSPACE", icon: "view_quilt", action: this.dummyClick },
        { title: "ADMIN", icon: "verified_user", action: this.dummyClick }
      ],
      languages: [{title:'English', locale: 'en'}, {title:'Korean', locale:'kn'}],
      right: null,
      drawerOpen: false
    };
  },
  methods: {
    navigate({ path }) {
      this.$router.push({ path });
    },
    dummyClick() {
      console.log("...");
    },
    changeLanguage(lang) {
      console.log("changeLanguage", lang);
      this.$i18n.locale  = lang;
    }
  },
  computed: {
    ...mapGetters(["userPrefs"]),
    appNameFull: function(){
      return this.$i18n.locale === "en" ? "Samsung SDS - IMP" : "삼성 SDS - IMP"
    }
  }
};
</script>

<style>
#header .v-toolbar__items a {
  color: #ffffff;
  text-decoration: none;
  /*font-weight: 300;*/
}

#header .v-toolbar__items a.router-link-active {
  border-bottom: 3px solid;
}

#header a.router-link-active {
  font-weight: 600;
}

#header select option{
  color: #000000;
}
</style>
