<template>
  <div>
    <v-layout>

      <v-app-bar
        density="compact"
        class="headerBg pa-4"
        :elevation="0"
      >

        <v-app-bar-title>
          <NuxtLink to="/"> Dailymangas.com </NuxtLink>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-text-field
          density="compact"
          variant="solo"
          label="Search Manga"
          append-inner-icon="mdi-magnify"
          single-line
          class="me-2"
          hide-details
        ></v-text-field>
        <v-btn
          class="me-2 text-none"
          color="primary"
          prepend-icon="mdi-login"
          variant="flat"
        >
          login
        </v-btn>
        <v-btn
          class="me-2 text-none"
          color="third"
          prepend-icon="mdi-account-plus"
          variant="flat"
        >
          Register
        </v-btn>
      </v-app-bar>
      <v-main
        style="min-height: 300px;"
        class="mt-3"
      >

        <v-container fluid>
          <NuxtLoadingIndicator />
          <slot />
        </v-container>
      </v-main>

    </v-layout>
  </div>
</template>

<script setup>
const { isMobile } = useDevice();
const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>