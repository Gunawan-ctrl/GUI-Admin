<template>
  <Breadcrumbs class="mb-6" :items="['Table', $route.meta.title]" />
  <DataTable
    :Headers="headers"
    :data="data"
    @showDetail="showDetail"
    @addItem="openDialog"
    @editItem="openDialog"
    @deleteItem="deleteItem"
  />
  <v-dialog v-model="dialog" persistent width="704" @click:outside="resetForm">
    <v-card>
      <v-list>
        <v-list-item
          prepend-avatar="/icons/location.avif"
          :title="`Data ${$route.meta.title}`"
          :subtitle="
            editMode
              ? `Edit data map ${$route.meta.title.toLowerCase()}`
              : `Tambah data map ${$route.meta.title.toLowerCase()}`
          "
        >
          <template v-slot:append>
            <v-btn
              @click="resetForm()"
              icon="mdi-close"
              size="small"
              variant="text"
            ></v-btn>
          </template>
        </v-list-item>
      </v-list>
      <v-divider class="border-opacity-100"></v-divider>

      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="Nama Customer"
              v-model="namaCustomer"
              :rules="[() => !!namaCustomer || 'This field is required']"
              required
              density="compact"
              variant="outlined"
              color="primary"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Alamat"
              v-model="alamat"
              required
              density="compact"
              variant="outlined"
              color="primary"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="No Telepon"
              v-model="nomorTelepon"
              type="Number"
              density="compact"
              variant="outlined"
              color="primary"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Email"
              v-model="email"
              type="email"
              density="compact"
              variant="outlined"
              color="primary"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider class="border-opacity-100"></v-divider>
      <v-card-actions>
        <v-spacer />
        <v-btn color="blue-darken-1" @click="onSubmit()"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <DialogDetail v-model="detailDialog" :items="detail" />
</template>

<script setup>
import { ref } from "vue";
import Breadcrumbs from "@/components/card/Breadcrumbs";
import DataTable from "@/components/table/DataTable";
import DialogDetail from "@/components/card/DialogDetail.vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

const dialog = ref(false);
const detailDialog = ref(false);
const editMode = ref(false);
const loading = ref(true);
const search = ref("");
const headers = ref([
  {
    title: "Dessert (100g serving)",
    align: "start",
    sortable: false,
    key: "name",
  },
  { title: "Calories", key: "calories" },
  { title: "Fat (g)", key: "fat" },
  { title: "Carbs (g)", key: "carbs" },
  { title: "Protein (g)", key: "protein" },
  { title: "Actions", key: "actions", sortable: false, align: "center" },
]);
const data = ref([
  { name: "Frozen Yogurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
  { name: "Eclair", calories: 262, fat: 16.0, carbs: 23, protein: 6.0 },
  { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  { name: "Jelly bean", calories: 375, fat: 0.0, carbs: 94, protein: 0.0 },
  { name: "Lollipop", calories: 392, fat: 0.2, carbs: 98, protein: 0 },
  { name: "Honeycomb", calories: 408, fat: 3.2, carbs: 87, protein: 6.5 },
  { name: "Donut", calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
  { name: "KitKat", calories: 518, fat: 26.0, carbs: 65, protein: 7 },
]);
const namaCustomer = ref("");
const alamat = ref("");
const nomorTelepon = ref("");
const email = ref("");
const latitude = ref(null);
const longitude = ref(null);
const latlng = ref(null);
const lat = ref(null);
const long = ref(null);
const detail = ref([]);

const openDialog = () => {
  dialog.value = true;
};

const showDetail = (id) => {
  detailDialog.value = true;
};

const resetForm = () => {
  dialog.value = false;
  editMode.value = false;
  namaCustomer.value = "";
  alamat.value = "";
  nomorTelepon.value = "";
  email.value = "";
};

const onSubmit = () => {
  resetForm();
};

const deleteItem = (id) => {
  Swal.fire({
    text: "Do you really delete this data?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#1967C0",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
    }
  });
};

const updateCoordinates = (latitude, longitude) => {
  latitude.value = latitude;
  longitude.value = longitude;
  lat.value = latitude;
  long.value = longitude;
};
</script>
