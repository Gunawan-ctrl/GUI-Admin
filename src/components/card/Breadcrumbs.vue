<template>
  <v-card>
    <v-breadcrumbs class="text-brown">
      <template v-slot:prepend>
        <v-icon class="px-4" :icon="icon" size="small" />
      </template>
      <v-breadcrumbs-item
        class="text-capitalize"
        style="font-size: 14px"
        :title="title"
      />
    </v-breadcrumbs>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>
