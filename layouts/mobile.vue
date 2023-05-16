<template>
  <div>
    <v-layout>

      <v-app-bar
        density="compact"
        class="headerBg pa-4"
        :elevation="0"
      >

        <v-app-bar-title>Dailymangas.com</v-app-bar-title>

      </v-app-bar>

      <v-main style="min-height: 300px;">
        <v-container fluid>
          <slot />
        </v-container>
      </v-main>

    </v-layout>
  </div>

</template>

<script setup>
const { isMobile } = useDevice();
</script>