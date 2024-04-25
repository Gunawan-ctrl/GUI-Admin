<template>
  <div class="text-center pa-4">
    <v-dialog :model-value="modelValue" width="full-width">
      <v-card :height="700" elevation="0" border>
        <v-toolbar dark color="primary">
          <v-toolbar-title class="text-capitalize">
            Detail Data {{ this.$route.name }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn variant="text" @click="modelValue = false"> Close </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-card-subtitle class="pa-4">ID : {{ items.id }} </v-card-subtitle>
        <v-list>
          <v-row class="pa-4">
            <v-col cols="12" md="6" v-for="(key, value) in items" :key="value">
              <v-card class="pa-2" elevation="0" border>
                <v-card-title class="text-capitalize">
                  {{ value }}
                </v-card-title>
                <v-card-subtitle
                  class="text-primary mb-2 d-flex justify-between"
                >
                  {{ key ? key : "-" }}
                  <v-btn
                    v-if="value === 'code'"
                    class="text-capitalize"
                    color="primary"
                    prepend-icon="mdi-content-copy"
                    variant="outlined"
                    size="small"
                    @click="copyCode"
                  >
                    Copy
                  </v-btn>
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    copyCode(value) {
      console.log(value, "value");
      // Menyalin nilai code
      const codeValue = this.items.code;
      // Salin nilai ke clipboard
      navigator.clipboard
        .writeText(codeValue)
        .then(() => {
          alert("Nilai code berhasil disalin: " + codeValue);
        })
        .catch((err) => {
          console.error("Gagal menyalin nilai code: ", err);
        });
    },
  },
};
</script>
