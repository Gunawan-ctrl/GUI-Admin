<template>
  <v-card elevation="0" border>
    <v-data-table
      :headers="Headers"
      :items="data"
      :loading="loading"
      :search="search"
      :items-per-page="totalPage"
    >
      <template v-slot:top>
        <v-row>
          <v-col cols="12" sm="5" md="6" lg="6">
            <v-list-item
              class="mt-4 font-weight-black text-lowercase"
              :title="`Data ${$route.meta.title.toLowerCase()}`"
              :subtitle="`daftar seluruh data ${$route.meta.title.toLowerCase()}`"
            >
            </v-list-item>
          </v-col>
          <v-spacer />
          <v-col cols="6" xs="8" sm="4" md="4" lg="4">
            <v-text-field
              v-model="search"
              label="Search"
              density="compact"
              class="my-4 mx-2"
              :class="totalPage ? 'mr-4' : 'mr-0'"
              color="primary"
              single-line
              hide-details
              append-inner-icon="mdi-magnify"
              variant="outlined"
            />
          </v-col>
          <v-col cols="auto" v-show="!totalPage">
            <v-btn
              class="my-4 mr-4 text-capitalize rounded-lg"
              color="primary"
              prepend-icon="mdi-plus"
              variant="text"
              @click="$emit('addItem')"
            >
              Add Data
            </v-btn>
          </v-col>
        </v-row>
      </template>
      <template v-slot:[`item.nama`]="{ item }">
        <span class="text-capitalize">{{ item.namaCustomer }}</span>
      </template>
      <template v-slot:[`item.alamat`]="{ item }">
        <span class="text-capitalize">{{ item.alamat }}</span>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <div class="d-flex items-center justify-center">
          <v-btn
            v-if="$route.meta.title === 'Table Default'"
            class="mx-2 text-capitalize"
            color="green"
            prepend-icon="mdi-pencil"
            size="small"
            @click="$emit('editItem', item)"
          >
            Edit
          </v-btn>

          <v-btn
            v-if="$route.meta.title === 'Table Default'"
            class="text-capitalize"
            color="red"
            prepend-icon="mdi-delete"
            size="small"
            @click="$emit('deleteItem', item._id)"
          >
            Delete
          </v-btn>
          <v-btn
            v-if="$route.meta.title === 'Table Default'"
            variant="text"
            color="primary"
            size="small"
            @click="$emit('showDetail', item._id)"
            class="text-capitalize"
          >
            Details
          </v-btn>
        </div>
      </template>
      <template v-slot:no-data>
        <p class="text-red">
          The Table is Empty. Please insert data with the above Button.
        </p>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  props: {
    Headers: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    totalPage: {
      type: Number,
    },
    loading: {
      type: Boolean,
    },
  },
  data() {
    return {
      search: "",
    };
  },
};
</script>
