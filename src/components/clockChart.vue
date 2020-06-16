<template>
  <v-card flat color="grey lighten-5">
    <v-card-text>
      <div class="echarts">
        <Echarts :options="this.chartOptions" autoresize />
      </div>
      <!--<v-btn small outline fab color="grey">
            <v-icon>refresh</v-icon>
          </v-btn>-->
    </v-card-text>
  </v-card>
</template>

<script>
import Echarts from "vue-echarts";
import "echarts/lib/chart/pie";
import "echarts/lib/component/title";
export default {
  name: "clockChart",
  components: {
    Echarts
  },
  props: {},
  data: () => ({
    resizable: true,
    loading: false
  }),
  methods: {},
  computed: {
    chartOptions: function() {
      return {
        title: {
          text: "Clock Chart"
        },
        series: [
          {
            name: "Active servers",
            type: "pie",
            hoverAnimation: false,
            radius: ["65%", "70%"],
            avoidLabelOverlap: true,
            label: {
              normal: {
                show: true,
                position: "center",
                fontSize: "20",
                formatter: "{a}",
                color: "#666"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: this.$store.getters.charts || 1,
                name: "Active servers",
                itemStyle: { color: "#1867c0" }
              },
              { value: 35, name: "", itemStyle: { color: "transparent" } }
            ]
          }
        ]
      };
    }
  }
};
</script>

<style scoped>
.echarts {
  width: 300px;
  height: 300px;
}
</style>
