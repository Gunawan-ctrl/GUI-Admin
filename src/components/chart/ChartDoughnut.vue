<template>
  <div>
    <v-card elevation="0" border>
      <v-card-title class="font-weight-bold text-brown" style="font-size: 14px">
        Grafik Pertumbuhan Uang
      </v-card-title>
      <v-card-text>
        <Doughnut :data="dataDoughnut" :height="137" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { Doughnut } from "vue-chartjs";
export default {
  components: {
    Doughnut,
  },
  data() {
    return {
      dataDoughnut: {
        labels: ["Penjualan", "Pembelian", "Pengeluaran"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [40, 20, 80],
          },
        ],
      },
    };
  },
};
</script>
