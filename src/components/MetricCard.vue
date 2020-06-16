<template>
  <v-card flat color="grey lighten-5">
    <v-card-title class="pb-0 ">
      <h1>{{ this.title || "Metric" }}</h1>
    </v-card-title>
    <v-card-text>
      <h2 class="data">{{ this.metricValue || "..." }}</h2>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "MetricCard",
  components: {},
  data: function() {
    return {};
  },
  props: {
    title: String,
    metricValue: String
  },
  methods: {}
};
</script>

<style scoped>
h1 {
  font-weight: 300;
}

.data {
  font-weight: 600;
  text-align: right;
  font-size: 27px;
}
</style>
