<template>
  <VCard class="border" elevation="0">
    <apexchart
      type="donut"
      :options="options"
      :series="series"
      height="500px"
    />
  </VCard>
</template>

<script setup>
import { ref } from "vue";
const options = ref({});

const series = ref([44, 55, 41, 17, 15]);
</script>
