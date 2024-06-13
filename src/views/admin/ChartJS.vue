<template>
  <Breadcrumbs class="mb-6" :items="['Charts', $route.meta.title]" />
  <VRow>
    <VCol cols="12" md="8">
      <ChartBar :height="141" />
    </VCol>
    <VCol cols="12" md="4">
      <ChartDoughnut />
    </VCol>
  </VRow>
</template>
<script setup>
import Breadcrumbs from "@/components/card/Breadcrumbs.vue";
import ChartBar from "@/components/chart/ChartBar.vue";
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
</script>
