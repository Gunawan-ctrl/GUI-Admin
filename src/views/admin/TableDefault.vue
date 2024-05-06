<template>
  <!-- breadcrumbs Components -->
  <Breadcrumbs class="mb-6" :items="['Table', $route.meta.title]" />

  <!-- DataTable Components -->
  <DataTable
    :Headers="headers"
    :data="data"
    :loading="loading"
    @showDetail="showDetail"
    @addItem="openDialog"
    @editItem="openDialog(true, $event)"
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
        title: "Nama",
        align: "start",
        sortable: false,
        key: "nama",
        filterable: false,
        value: "namaCustomer",
      },
      {
        title: "Alamat",
        key: "alamat",
        sortable: false,
        value: "alamat",
      },
      {
        title: "No Telpon",
        key: "nomorTelepon",
        sortable: false,
        value: "nomorTelepon",
      },
      {
        title: "Email",
        key: "email",
        sortable: false,
        value: "email",
      },
      { title: "Actions", key: "actions", sortable: false, align: "center" },
    ],
    data: [],
    namaCustomer: "",
    alamat: "",
    nomorTelepon: null,
    email: null,
    detail: [],
  }),

  async created() {
    await this.getData();
  },

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
      this.dialog = true;
    },

    // Details data
    async showDetail(id) {
      this.detailDialog = true;
      try {
        const response = await this.$axios.get(
          `customer/getById/${id}`,
          this.$createToken()
        );
        if (response.status) {
          this.detail = response.data.data;
        }
      } catch (error) {
        this.$commonErrorNotif(), console.log(error);
      }
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
    async onSubmit() {
      const formData = {
        namaCustomer: this.namaCustomer,
        alamat: this.alamat,
        nomorTelepon: this.nomorTelepon,
        email: this.email,
      };
      try {
        this.loading = true;
        const response = this.editMode
          ? await this.$axios.put(
              `customer/edit/${this.idAktive}`,
              formData,
              this.$createToken()
            )
          : await this.$axios.post(
              "customer/add",
              formData,
              this.$createToken()
            );
        if (response.data.status) {
          this.$suksesNotif(response.data.message);
          if (this.editMode) {
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Menunggu 1 detik
          }
          this.getData();
          this.resetForm();
        }
      } catch (error) {
        this.$commonErrorNotif(), console.log(error);
      } finally {
        this.loading = false;
      }
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
          this.$axios
            .delete(`customer/delete/${id}`, this.$createToken())
            .then((res) => {
              this.$suksesNotif(
                res.data.message ? res.data.message : "deleted successfully"
              );
              this.getData();
            })
            .catch((error) => {
              this.$commonErrorNotif(), console.log(error);
            });
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
