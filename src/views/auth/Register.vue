<template>
  <VRow align="center" justify="center" style="height: 90vh">
    <VCard width="448" elevation="0" class="border">
      <VCol cols="12" align-self="center">
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

              <VCol cols="12" class="text-center text-base mt-2">
                <span>Already have an account?</span>
                <RouterLink class="text-primary ms-2" :to="{ name: 'login' }">
                  Sign in instead
                </RouterLink>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCol>
    </VCard>
  </VRow>
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
