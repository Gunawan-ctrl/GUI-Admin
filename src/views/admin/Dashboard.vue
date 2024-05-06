<template>
  <div class="dashboard">
    <!-- Breadcrumbs -->
    <Breadcrumbs class="mb-6" :items="['Menu', $route.meta.title]" />

    <!-- CardHeader -->
    <v-row>
      <!-- Penjualan -->
      <v-col cols="12" md="4">
        <CardHeader
          title="Penjualan"
          subtitle="Berisi semua data penjualan usaha kopi."
          :value="300"
          icon="mdi-cart"
        />
      </v-col>
      <!-- Pembelian -->
      <v-col cols="12" md="4">
        <CardHeader
          title="Pembelian"
          subtitle="Berisi semua data pembelian usaha kopi."
          :value="400"
          icon="mdi-cart-arrow-down"
        />
      </v-col>
      <!-- Pengeluaran -->
      <v-col cols="12" md="4">
        <CardHeader
          title="Pengeluaran"
          subtitle="Berisi semua data pengeluaran usaha kopi."
          :value="200"
          icon="mdi-currency-usd"
        />
      </v-col>
    </v-row>

    <!-- ChartBar dan ChartDoughnut -->
    <v-row>
      <v-col cols="12" md="8">
        <ChartBar />
      </v-col>
      <v-col cols="12" md="4">
        <ChartDoughnut />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/card/Breadcrumbs";
import CardHeader from "@/components/card/CardHeader";
import ChartBar from "@/components/chart/ChartBar";
import ChartDoughnut from "@/components/chart/ChartDoughnut";
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default {
  components: {
    Breadcrumbs,
    CardHeader,
    ChartBar,
    ChartDoughnut,
  },
  data() {
    return {};
  },
};
</script>
