<template>
  <v-app-bar app elevate-on-scroll elevation="0" color="#EFEBE9">
    <v-app-bar-nav-icon @click="$emit('drawerEvent')"></v-app-bar-nav-icon>
    <v-spacer />

    <v-badge
      dot
      location="bottom right"
      offset-x="3"
      offset-y="3"
      color="success"
      bordered
      class="mr-4"
    >
      <v-avatar class="cursor-pointer" color="primary" variant="tonal">
        <v-img src="/images/avatar-1.png"></v-img>
      </v-avatar>
      <v-menu
        activator="parent"
        width="230"
        location="bottom end"
        offset="14px"
      >
        <v-list>
          <v-list-item>
            <template #prepend>
              <v-list-item-action start>
                <v-badge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <v-avatar color="primary" variant="tonal">
                    <v-img src="/images/avatar-1.png" />
                  </v-avatar>
                </v-badge>
              </v-list-item-action>
            </template>
            <v-list-item-title class="font-semibold"> Admin </v-list-item-title>
            <v-list-item-subtitle>Administrator</v-list-item-subtitle>
          </v-list-item>
          <v-divider class="my-2 font-semibold" />

          <v-list-item value="profile" :to="{ name: 'profile' }">
            <template #prepend>
              <v-icon icon="mdi-account-outline" />
            </template>
            <v-list-item-title> Profile </v-list-item-title>
          </v-list-item>

          <v-list-item link @click="logout()">
            <template #prepend>
              <v-icon icon="mdi-cancel" />
            </template>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-badge>
  </v-app-bar>
</template>

<script setup>
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

const router = useRouter();

const logout = () => {
  Swal.fire({
    text: "Are you sure ?",
    icon: "question",
    showCancelButton: true,
    cancelButtonColor: "#f75757",
    confirmButtonColor: "#6bc179",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.clear();
      router.push({ name: "login" });
    }
  });
};
</script>
