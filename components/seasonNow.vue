<template>
  <div>

    <v-parallax
      height="450"
      src="https://siapekprovtpi.web.id/API_2023/bg.webp"
    >
      <v-row class="justify-center">
        <v-col
          cols="10"
          class="pa-12 mt-12"
        >
          <h1>Read Free Manga Online</h1>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>
<script setup>
const onSelected = ref(2);
const { data: seasons } = await useFetch(
  "https://api.jikan.moe/v4/seasons/now",
  {
    transform: (_data) => _data.data,
  }
);
</script>