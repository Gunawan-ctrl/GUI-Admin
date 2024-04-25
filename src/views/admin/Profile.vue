<template>
  <v-card :loading="loading">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img cover height="250" src="/images/background-profile.avif" />
    <div class="text-center avatar">
      <v-avatar class="cursor-pointer" size="100" variant="tonal">
        <v-img src="/images/avatar-1.png" />
      </v-avatar>
      <div class="text-subtitle-1 font-weight-bold">Admin</div>
      <div class="text-caption text-gray-500">Administrator</div>
    </div>
    <v-card-text>
      <div class="my-4 text-subtitle-1 font-semibold">GUI Admin</div>

      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ea
        cum fuga error debitis voluptates rerum, animi blanditiis, sequi
        provident quibusdam explicabo optio maiores ipsum eveniet saepe facilis
        vitae sint alias eius deserunt facere? Error ipsam, maiores nam ab
        adipisci ullam itaque odio culpa quam nostrum expedita. Officia, omnis
        et?
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style>
.avatar {
  margin-top: -50px;
}
</style>
