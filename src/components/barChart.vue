<template>
  <v-card flat :color="this.theme.color">
    <v-card-text>
      <div class="echarts">
        <Echarts :options="this.chartOptions" autoresize/>
      </div>
      <!--<v-btn  small outline fab :color="this.theme.btnColor">
                              <v-icon>refresh</v-icon>
                            </v-btn>-->
    </v-card-text>
  </v-card>
</template>

<script>
import Echarts from "vue-echarts";
import "echarts/lib/chart/bar";

export default {
  name: "barChart",
  components: {
    Echarts
  },
  props: { dark: Boolean },
  data: function() {
    return {
      resizable: true,
      loading: false
    };
  },
  methods: {},
  computed: {
    chartOptions: function() {
      return {
        title: {
          text: "Bar Chart"
        },
        tooltip: {},
        xAxis: {
          data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"]
        },
        yAxis: {},

        series: [
          {
            name: "Sales",
            type: "bar",
            data: this.$store.getters.barDataset || [0, 0, 0, 0, 0, 0],
            itemStyle: {
              color: "#1867c0"
            }
          }
        ]
      };
    },
    theme: function() {
      return this.dark
        ? { color: "grey", btnColor: "white" }
        : { color: "grey lighten-5", btnColor: "grey" };
    }
  }
};
</script>

<style scoped >

</style>
