<template>
  <v-app id="inspire">
    <sidebar v-model="drawer" />
    <headerPage @drawerEvent="drawer = !drawer" />
    <v-main style="background-color: #efebe9">
      <v-container class="py-4 px-4" fluid>
        <router-view />
      </v-container>
    </v-main>
    <footerPage />
  </v-app>
</template>
<script setup>
import { ref } from "vue";
import sidebar from "@/components/layouts/Sidebar";
import headerPage from "@/components/layouts/Header";
import footerPage from "@/components/layouts/Footer";

const drawer = ref(null);
</script>
