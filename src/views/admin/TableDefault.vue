<template>
  <!-- breadcrumbs Components -->
  <Breadcrumbs class="mb-6" :title="`Data Table`" :icon="'mdi-table'" />

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
          :title="`Data ${$route.name}`"
          :subtitle="
            editMode
              ? `Edit data map ${$route.name}`
              : `Tambah data map ${$route.name}`
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
        <v-row v-if="!editMode">
          <v-col cols="12" md="6">
            <v-text-field
              label="Code"
              v-model="code"
              :rules="[() => !!code || 'This field is required']"
              required
              density="compact"
              variant="outlined"
              color="primary"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Radius"
              v-model="radius"
              required
              type="number"
              density="compact"
              variant="outlined"
              color="primary"
            />
          </v-col>
          <v-col cols="12">
            <Leaflet
              :customHeight="`250px`"
              :zoom="5"
              @map-click="updateCoordinates"
              :lat="lat"
              :long="long"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Latitude"
              v-model="latitude"
              readonly
              density="compact"
              variant="outlined"
              color="primary"
            />
            <v-text-field
              label="Longitude"
              v-model="longitude"
              readonly
              density="compact"
              variant="outlined"
              color="primary"
            />
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col cols="12">
            <v-text-field
              label="Radius"
              v-model="radius"
              required
              type="number"
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
import Leaflet from "@/components/leaflet/Leaflet.vue";
import DialogDetail from "@/components/card/DialogDetail.vue";

export default {
  components: {
    Breadcrumbs,
    DataTable,
    Leaflet,
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
        title: "Code  ",
        align: "start",
        sortable: false,
        key: "code",
        filterable: false,
        value: "code",
        class: "font-weight-bold",
      },
      { title: "Radius", key: "radius", sortable: false, value: "radius" },
      {
        title: "Latitude",
        key: "latitude",
        sortable: false,
        value: "latitude",
      },
      {
        title: "Longitude",
        key: "longitude",
        sortable: false,
        value: "longitude",
      },
      { title: "Actions", key: "actions", sortable: false, align: "center" },
    ],
    data: [],
    code: "",
    radius: "",
    latitude: null,
    longitude: null,
    latlng: null,
    lat: null,
    long: null,
    detail: [],
  }),

  async created() {
    await this.getData();
  },

  methods: {
    async getData() {
      this.loading = true;
      try {
        const response = await this.$axios.get("points", this.$createToken());
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
        this.code = item.code;
        this.radius = item.radius;
        this.latitude = item.latitude;
        this.longitude = item.longitude;
        this.idAktive = item.id;
      } else {
        this.code = null;
        this.radius = null;
        this.latitude = null;
        this.longitude = null;
      }
      this.dialog = true;
    },

    // Details data
    async showDetail(id) {
      this.detailDialog = true;
      try {
        const response = await this.$axios.get(
          `points/${id}`,
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
      this.code = null;
      this.radius = null;
      this.latitude = null;
      this.longitude = null;
    },

    // Mengirim data untuk disimpan
    async onSubmit() {
      const formData = {
        code: this.code,
        radius: parseFloat(this.radius),
        latitude: this.latitude,
        longitude: this.longitude,
      };
      try {
        this.loading = true;
        const response = this.editMode
          ? await this.$axios.patch(
              `points/change-radius/${this.idAktive}`,
              formData,
              this.$createToken()
            )
          : await this.$axios.post("points", formData, this.$createToken());
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
            .delete(`points/${id}`, this.$createToken())
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
