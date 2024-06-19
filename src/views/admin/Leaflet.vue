<template>
  <Breadcrumbs class="mb-6" :items="['MAP', $route.meta.title]" />
  <v-row>
    <v-col cols="12">
      <Leaflet customHeight="400px" />
    </v-col>
  </v-row>
</template>
<script setup>
import Breadcrumbs from "@/components/card/Breadcrumbs.vue";
import Leaflet from "@/components/leaflet/Leaflet.vue";
</script>
