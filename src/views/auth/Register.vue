<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard class="auth-card pa-4 pt-7 border" elevation="0" max-width="448">
      <VCardItem class="justify-center">
        <VCardTitle class="font-weight-semibold text-2xl">
          GUI Admin
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 font-weight-semibold mb-1">
          Adventure starts here 🚀
        </h5>
        <p class="mb-0">Make your app management easy and fun!</p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="() => {}">
          <VRow no-gutters>
            <VCol cols="12">
              <VTextField
                v-model="form.username"
                label="Username"
                placeholder="Johndoe"
                density="compact"
                variant="outlined"
              />
            </VCol>
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                label="Email"
                placeholder="johndoe@email.com"
                type="email"
                density="compact"
                variant="outlined"
              />
            </VCol>

            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="
                  isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'
                "
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
                density="compact"
                variant="outlined"
              />

              <VBtn block color="primary" type="submit" @click="handleSubmit">
                Sign up
              </VBtn>
            </VCol>

            <!-- login instead -->
            <VCol cols="12" class="text-center text-base mt-2">
              <span>Already have an account?</span>
              <RouterLink class="text-primary ms-2" :to="{ name: 'login' }">
                Sign in instead
              </RouterLink>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
const form = reactive({
  username: "",
  email: "",
  password: "",
  privacyPolicies: false,
});

const router = useRouter();
const isPasswordVisible = ref(false);

const handleSubmit = () => {
  router.push({ name: "login" });
};
</script>

<style scoped>
.auth-wrapper {
  min-block-size: calc(var(--vh, 1vh) * 100);
}

.auth-footer-mask {
  position: absolute;
  inset-block-end: 0;
  min-inline-size: 100%;
}

.auth-card {
  z-index: 1 !important;
}

.auth-footer-start-tree,
.auth-footer-end-tree {
  position: absolute;
  z-index: 1;
}

.auth-footer-start-tree {
  inset-block-end: 0;
  inset-inline-start: 0;
}

.auth-footer-end-tree {
  inset-block-end: 0;
  inset-inline-end: 0;
}

.auth-illustration {
  z-index: 1;
}

.auth-logo {
  position: absolute;
  z-index: 1;
  inset-block-start: 2rem;
  inset-inline-start: 2.3rem;
}

.auth-bg {
  background-color: rgb(var(--v-theme-surface));
}
</style>
