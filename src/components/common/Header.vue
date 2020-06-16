<template>
  <div id="header">
    <v-toolbar dark color="primary">
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <v-toolbar-title>IMP</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <router-link to="/"> User Management </router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/dashboard">Dashboard</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
import VueRouter from "vue-router";
import UserList from "../UserManagement/UserList.vue";
import Dashboard from "../Dashboard/Dashboard.vue";

const routes = [
  { path: "/", component: UserList },
  { path: "/dashboard", component: Dashboard }
];
const router = new VueRouter({
  routes
});

export default {
  name: "Header",
  router,
  components: { UserList, Dashboard }
};
</script>

<style>
/*#header{
    margin-bottom: 20px;
  }*/

/*#header a {
    color: #ffffff;
    text-decoration: none;
  }*/
</style>
