<template>
  <v-card elevation="0" class="border">
    <l-map
      :options="{ attributionControl: false }"
      :zoom="zoom"
      :center="center"
      :bounds="map.bounds"
      :max-bounds="map.maxBounds"
      :style="{ height: customHeight, width: '100%' }"
      @click="handleMapClick"
    >
      <l-tile-layer :url="map.url" :attribution="map.attribution" />
      <template v-if="latlng">
        <l-marker :lat-lng="[Number(lat), Number(long)]" />
        <div v-for="(marker, index) in latlng" :key="index">
          <l-marker
            :lat-lng="[Number(marker.latitude), Number(marker.longitude)]"
          >
            <l-popup>
              <cardpopup :data="marker" />
            </l-popup>
          </l-marker>
          <l-circle
            :lat-lng="[Number(marker.latitude), Number(marker.longitude)]"
            :radius="marker.radius"
            color="red"
          />
        </div>
      </template>
    </l-map>
  </v-card>
</template>

<script>
import "leaflet/dist/leaflet.css";
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LIcon,
  LCircle,
} from "@vue-leaflet/vue-leaflet";
import cardpopup from "@/components/leaflet/popup.vue";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LIcon,
    LCircle,
    cardpopup,
  },
  props: {
    latlng: {
      type: Array,
      default: () => [],
    },
    lat: {
      type: Number,
      default: 0,
    },
    long: {
      type: Number,
      default: 0,
    },
    zoom: {
      type: Number,
      default: 5,
    },
    center: {
      type: Array,
      default: [0.021972655711432625, 109.66552734375001],
    },
    customHeight: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      map: {
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution: '&copy; <a href="">Geolocation</a> contributors',
        bounds: [
          [-11.08325, 94.771728515625],
          [6.274394902996467, 141.15234375000003],
        ],
        maxBounds: [
          [-11.08325, 94.771728515625],
          [6.274394902996467, 141.15234375000003],
        ],
      },
      data: [],
    };
  },

  methods: {
    handleMapClick(e) {
      this.$emit("map-click", e.latlng.lat, e.latlng.lng);
    },
  },
};
</script>
