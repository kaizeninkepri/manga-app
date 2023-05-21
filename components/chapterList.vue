<template>
  <div>
    <v-card
      v-for="(i,index) in data.sort((a, b) => parseFloat(b.attributes.chapter) - parseFloat(a.attributes.chapter))"
      :key="index"
      class="mb-1"
    >
      <v-card-actions>
        <NuxtLink :to="'/read/' + i.id">
          <v-list-item class="w-100">
            <v-list-item-title>Chapter {{ i.attributes.chapter }}</v-list-item-title>

            <v-list-item-subtitle>Volume {{ i.attributes.volume }}</v-list-item-subtitle>

            <template v-slot:append>

              <div class="justify-self-end">

                <v-icon
                  class="me-1"
                  size="sm"
                  icon="mdi-clock-outline"
                ></v-icon>
                <NuxtTime :datetime="i.attributes.publishAt" />

              </div>
            </template>

          </v-list-item>
        </NuxtLink>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script setup>
const { id, title } = defineProps(["id", "title"]);
const { pending: loading, data: chapters } = await useAsyncData(
  "chapters",
  () => $fetch("/api/manga/chapters?id=" + id + "&title=" + title),
  {
    transform: (_manga) => _manga.data,
  }
);

const filterChapters = computed(() =>
  chapters.value.filter((e) => e.attributes.links.mal == id)
);

const { data, pending, error, refresh } = await useFetch(
  "https://api.mangadex.org/chapter?manga=" + filterChapters.value[0].id,
  {
    transform: (_manga) => _manga.data,
  }
);
</script>
