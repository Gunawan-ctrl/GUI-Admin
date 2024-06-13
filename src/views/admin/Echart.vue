<template>
  <Breadcrumbs class="mb-6" :items="['Charts', $route.meta.title]" />
  <VRow>
    <VCol cols="12" md="6">
      <ChartBar />
    </VCol>
    <VCol cols="12" md="6">
      <ChartPie />
    </VCol>
  </VRow>
</template>
<script setup>
import Breadcrumbs from "@/components/card/Breadcrumbs.vue";
import ChartPie from "@/components/chart/echart/ChartPie.vue";
import ChartBar from "@/components/chart/echart/ChartBar.vue";
</script>
