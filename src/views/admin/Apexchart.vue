<template>
  <Breadcrumbs class="mb-6" :items="['Charts', $route.meta.title]" />
  <VRow>
    <VCol cols="12" md="6">
      <ChartBar />
    </VCol>
    <VCol cols="12" md="6">
      <ChartDonut />
    </VCol>
  </VRow>
</template>

<script setup>
import Breadcrumbs from "@/components/card/Breadcrumbs.vue";
import ChartBar from "@/components/chart/apexchart/ChartBar.vue";
import ChartDonut from "@/components/chart/apexchart/ChartDonut.vue";
</script>
