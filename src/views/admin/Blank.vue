<template>
  <Breadcrumbs class="mb-6" :items="[$route.meta.title]" />
</template>
<script setup>
import Breadcrumbs from "@/components/card/Breadcrumbs.vue";
</script>
