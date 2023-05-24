<template>
  <div>
    <div
      v-for="(i,index) in data"
      :key="index"
    >
      <NuxtLink :to="'/read/' + i.id">
        <span class="text-caption"> Chapter {{ i.attributes.chapter }} </span>
      </NuxtLink>
    </div>

    <!-- <pre>{{ data }}</pre> -->
  </div>
</template>
<script setup>
const { mangaId } = defineProps(["mangaId"]);
const { data, pending, error, refresh } = await useFetch(
  "https://api.mangadex.org/chapter?manga=" +
    mangaId +
    "&translatedLanguage[]=en&order[updatedAt]=desc&limit=3",
  {
    transform: (_manga) => _manga.data,
  }
);
</script>
