<template>
  <div>
    <SeasonNow class="mb-6" />
    <v-row class="justify-center">
      <v-col cols="10">
        <MangaTop :mangas="manga" />
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "default",
});

const { data: manga } = await useFetch(
  "https://api.jikan.moe/v4/top/manga?limit=10",
  {
    transform: (_manga) => _manga.data,
  }
);
</script>