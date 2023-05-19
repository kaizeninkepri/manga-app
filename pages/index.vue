<template>
  <div>
    <MangaTop :mangas="manga" />

    <nuxt-link to="/manga">manga</nuxt-link>
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