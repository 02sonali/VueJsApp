<template>
  <v-app :class="this.theme.color">
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["userPrefs"]),
    theme: function() {
      return this.userPrefs.dark
        ? { color: "grey darken-2" }
        : { color: "white" };
    }
  }
};
</script>
