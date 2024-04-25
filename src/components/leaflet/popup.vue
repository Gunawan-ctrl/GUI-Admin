<template>
  <v-card flat width="250px">
    <v-card-text>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-avatar align="center">
            <v-img src="/icons/location.avif" />
          </v-avatar>
          <span class="text-capitalize">{{ data.code }} </span>
        </v-col>
        <v-divider class="border-opacity-100" />
        <v-col cols="6">
          <v-list-item-title> Radius </v-list-item-title>
          <v-list-item-subtitle>{{ data.radius }} </v-list-item-subtitle>
        </v-col>

        <v-divider vertical class="border-opacity-100" />
        <v-col cols="6">
          <v-list-item-title> Code </v-list-item-title>
          <v-list-item-subtitle>
            {{ data.code }}
          </v-list-item-subtitle>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
