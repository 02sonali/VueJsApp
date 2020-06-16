<template>
  <div>
    <!-- <v-layout row wrap>
      <v-flex xs12 md4>
        <BarChart :dark="this.userPrefs.dark" />
      </v-flex>
      <v-flex xs12 md4>
        <LineChart />
      </v-flex>
      <v-flex xs12 md4>
        <ClockChart />
      </v-flex>
      <v-flex xs8>
        <LineChart title="Line chart - wide version" />
      </v-flex>
      <v-flex xs4>
        <v-layout wrap>
          <v-flex xs6>
            <metric-card title="5XX Errors" metricValue="1,456" />
          </v-flex>
          <v-flex xs6>
            <metric-card title="4XX Errors" metricValue="23,456" />
          </v-flex>
          <v-flex xs12>
            <metric-card title="Cache-hit ratio" metricValue="76%" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout> -->
    <grid-layout
      :layout.sync="layout"
      :col-num="12"
      :row-height="100"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
      :responsive="true"
    >
    <grid-item :key="index" v-for="(item, index) in layout"
                :x="item.x"
                :y="item.y"
                :w="item.w"
                :h="item.h"
                :i="item.i"
                :minH="item.minH"
                :minW="item.minW"
               
                >
        <BarChart v-if=" item.type==='BarChart' "/>
        <LineChart v-if=" item.type==='LineChart' "/>
        <ClockChart v-if=" item.type==='ClockChart' "/>
    </grid-item>
    </grid-layout>
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BarChart from "../components/barChart.vue";
import LineChart from "../components/lineChart.vue";
import ClockChart from "../components/clockChart.vue";
import MetricCard from "../components/MetricCard.vue";
import VueGridLayout from 'vue-grid-layout';
	const testLayout = [
    {"x":0,"y":0,"w":6,"h":2,"i":"0", "minH":4, "minW":4,"type": 'LineChart'},
    {"x":6,"y":0,"w":6,"h":2,"i":"1","minH":4, "minW":4, "type": 'BarChart'},
    // {"x":0,"y":4,"w":6,"h":3,"i":"2", "minH":4, "minW":4,"type": 'ClockChart'},
    // {"x":6,"y":0,"w":6,"h":4,"i":"1","minH":4, "minW":4, "type": 'BarChart'},
	];
export default {
  components: {
    BarChart,
    LineChart,
    ClockChart,
    MetricCard,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  data:() => ({
	  layout: testLayout,
	}),
  computed: {
    ...mapGetters(["userPrefs"])
  }
};
</script>

<style>
.echarts {
  overflow-y: hidden;
  overflow-x:hidden;
  width: 100%;
  /* position: relative; */
}
</style>
