<template>
  <v-container bg grid-list-md text-xs-center>
    <v-layout justify-center>
      <LoginCard />
    </v-layout>
  </v-container>
</template>

<script>
import LoginCard from "../components/LoginCard.vue";
export default {
  components: {
    LoginCard
  }
};
</script>

<style scoped></style>
