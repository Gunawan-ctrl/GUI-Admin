<template>
  <v-row>
    <!-- Image Column -->
    <v-col cols="12" md="6" justify-center align-self="center">
      <v-card-item align="center" justify="center">
        <v-img src="/images/access-image.avif" cover class="rounded-lg"></v-img>
      </v-card-item>
    </v-col>

    <!-- Divider Column -->
    <v-divider vertical class="border-opacity-75 my-10" />

    <!-- Form Column -->
    <v-col cols="12" md="6" justify-center align-self="center">
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

      <!-- Welcome Text -->
      <v-card-text class="pt-2">
        <div class="mb-1 text-subtitle-1">
          Welcome to <span class="font-weight-bold">GUI Admin</span>
        </div>
        <p class="font-weight-thin font-italic">
          Please sign-in to your account and start the adventure!
        </p>
      </v-card-text>

      <!-- Login Form -->
      <v-card-text>
        <v-form @submit.prevent="handleSubmit">
          <v-row align="center">
            <!-- Username Field -->
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

            <!-- Password Field -->
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

            <!-- Submit Button -->
            <v-col cols="12">
              <v-btn @click="handleSubmit" class="bg-primary w-full rounded-lg">
                SIGN-IN
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        identify: "",
        password: "",
      },
      visible: false,
    };
  },

  methods: {
    async handleSubmit() {
      try {
        const response = await this.$axios.post("auth/login", this.form);
        if (response.data.status) {
          localStorage.setItem("dataUser", JSON.stringify(response.data.data));
          this.$suksesNotif("sukses");
          this.$router.push({ name: "dashboard" });
        }
      } catch (error) {
        this.$errNotif("Username or password is incorrect");
        console.error(error);
      }
    },
  },
};
</script>
