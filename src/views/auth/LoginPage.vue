<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-card-item>
        <v-img src="/images/access-image.avif" cover class="rounded-lg"></v-img>
      </v-card-item>
    </v-col>

    <v-divider vertical class="border-opacity-75 my-10" />

    <v-col cols="12" md="6" align-self="center">
      <v-card-item>
        <template #prepend>
          <v-img
            :width="50"
            aspect-ratio="16/9"
            cover
            src="/icons/login-logo.jpeg"
          />
        </template>
        <v-card-title class="text-2xl text-primary">GUI Admin</v-card-title>
      </v-card-item>

      <v-card-text class="pt-2">
        <div class="mb-1 text-subtitle-1">
          Welcome to <span class="font-weight-bold">GUI Admin</span>
        </div>
        <p class="font-weight-thin font-italic">
          Please sign-in to your account and start the adventure!
        </p>
      </v-card-text>

      <v-card-text>
        <v-form @submit.prevent="handleSubmit">
          <v-row align="center">
            <v-col cols="12">
              <v-text-field
                v-model="form.identify"
                autofocus
                density="compact"
                variant="outlined"
                color="primary"
                placeholder="Username"
                label="Username"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="form.password"
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                density="compact"
                label="Password"
                placeholder="Enter your password"
                variant="outlined"
                @click:append-inner="visible = !visible"
                @keyup.enter="handleSubmit"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6" align-self="end">
              <v-spacer />
              <v-btn
                @click="handleSubmit"
                class="bg-primary rounded-lg mx-2"
                elevation="0"
              >
                SIGN-IN
              </v-btn>
              <v-btn
                @click="handleRegister"
                class="rounded-lg border"
                elevation="0"
              >
                Register
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

const form = reactive({
  identify: "",
  password: "",
});
const router = useRouter();
const visible = ref(false);

const handleSubmit = () => {
  router.push({ name: "dashboard" });
};
const handleRegister = () => {
  router.push({ name: "register" });
};
</script>
