<template>
  <!-- breadcrumbs Components -->
  <Breadcrumbs class="mb-6" :items="['Table', $route.meta.title]" />

  <!-- DataTable Components -->
  <DataTable
    :Headers="headers"
    :data="data"
    @showDetail="showDetail"
    @addItem="openDialog"
    @editItem="openDialog"
    @deleteItem="deleteItem"
  />

  <!-- Dialog Components -->
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

<script>
import Breadcrumbs from "@/components/card/Breadcrumbs";
import DataTable from "@/components/table/DataTable";
import DialogDetail from "@/components/card/DialogDetail.vue";

export default {
  components: {
    Breadcrumbs,
    DataTable,
    DialogDetail,
  },
  data: () => ({
    dialog: false,
    detailDialog: false,
    editMode: false,
    loading: true,
    search: "",
    headers: [
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
    ],
    data: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
      },
    ],
    code: "",
    radius: "",
    latitude: null,
    longitude: null,
    latlng: null,
    lat: null,
    long: null,
    detail: [],
  }),

  methods: {
    async getData() {
      this.loading = true;
      try {
        const response = await this.$axios.get(
          "customer/getAll",
          this.$createToken()
        );
        if (response.data.status) {
          this.data = response.data.data;
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$tokenExpired();
          localStorage.clear();
          this.$router.push({ name: "login" });
        } else {
          this.$commonErrorNotif(), console.log(error);
        }
      } finally {
        this.loading = false;
      }
    },

    // Membuka dialog untuk menambah atau mengedit data
    openDialog(editMode, item) {
      this.editMode = editMode;
      if (editMode) {
        this.namaCustomer = item.namaCustomer;
        this.alamat = item.alamat;
        this.nomorTelepon = item.nomorTelepon;
        this.email = item.email;
        this.idAktive = item._id;
      } else {
        this.namaCustomer = null;
        this.alamat = null;
        this.nomorTelepon = null;
        this.email = null;
      }
    },
    // Membuka dialog untuk menambah atau mengedit data
    openDialog() {
      this.dialog = true;
    },

    // Details data
    showDetail(id) {
      this.detailDialog = true;
    },

    // clear data
    resetForm() {
      this.dialog = false;
      this.editMode = false;
      this.namaCustomer = null;
      this.alamat = null;
      this.nomorTelepon = null;
      this.email = null;
    },

    // Mengirim data untuk disimpan
    onSubmit() {
      this.$suksesNotif("berhasil mengubah data");
      this.resetForm();
    },

    // Menghapus item
    deleteItem(id) {
      this.$swal({
        text: `Do you really delete this data ?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#1967C0",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$suksesNotif("deleted successfully");
        }
      });
    },
    updateCoordinates(latitude, longitude) {
      this.latitude = latitude;
      this.longitude = longitude;
      this.lat = latitude;
      this.long = longitude;
    },
  },
};
</script>
