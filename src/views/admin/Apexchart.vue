<template>
  <Breadcrumbs class="mb-6" :items="['Charts', $route.meta.title]" />
  <VRow>
    <VCol cols="12" md="6">
      <VCard class="border" elevation="0">
        <apexchart type="bar" :options="options" :series="series"></apexchart>
      </VCard>
    </VCol>
    <VCol cols="12" md="6">
      <VCard class="border" elevation="0">
        <apexchart
          type="donut"
          height="500px"
          :options="optionsDonut"
          :series="seriesDonut"
        ></apexchart>
      </VCard>
    </VCol>
  </VRow>
</template>

<script>
import Breadcrumbs from "@/components/card/Breadcrumbs.vue";
export default {
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      options: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
      optionsDonut: {},
      seriesDonut: [44, 55, 41, 17, 15],
    };
  },
};
</script>
