<template>
  <div>
    <v-card elevation="0" border>
      <v-card-title class="font-weight-bold text-brown" style="font-size: 14px">
        Grafik Pertumbuhan Usaha
      </v-card-title>
      <v-card-text>
        <Bar :data="chartBar" :height="137" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
export default {
  components: {
    Bar,
  },
  data() {
    return {
      chartBar: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Okt",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Data Penjualan",
            backgroundColor: ["#304FFE", "#ef6445", "#304FF1"],
            borderRadius: 6,
            data: [30, 90, 50, 70, 30, 90, 50, 70, 30, 90, 50, 70],
            maxBarThickness: 30,
          },
        ],
      },
    };
  },
};
</script>
