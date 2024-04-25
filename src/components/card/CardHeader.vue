<template>
  <v-card elevation="0" border class="d-flex">
    <div class="my-2">
      <v-card-item>
        <v-card-title
          class="text-brown font-weight-bold"
          style="font-size: 14px"
        >
          {{ title }}
        </v-card-title>

        <v-card-subtitle style="font-size: 13px">
          {{ subtitle }}
        </v-card-subtitle>
      </v-card-item>

      <v-card-text class="text-brown font-weight-bold">
        Rp. {{ value }}.000
      </v-card-text>
    </div>
    <v-card-actions>
      <v-icon
        class="align-self-center ml-auto"
        style="font-size: 5.4em; color: #9f8170"
      >
        {{ icon }}
      </v-icon>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    value: {
      type: Number,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>
