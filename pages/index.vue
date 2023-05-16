<template>
  <div class="mt-4">
    <!-- <img :src="count.data.images.webp.image_url" />
        {{ count.data.images.webp.image_url }} -->
    <!-- <v-row>
            <v-col cols="1" v-for="i in manga.data">
                <v-card>
                    <v-img v-if="i.relationships[2].attributes" aspect-ratio="4/3"
                        :src="'https://uploads.mangadex.org/covers/' + i.id + '/' + i.relationships[2].attributes.fileName">
                        <template v-slot:placeholder>
                            <div class="d-flex align-center justify-center fill-height">
                                <v-progress-circular color="red-4" indeterminate></v-progress-circular>
                            </div>
                        </template>
                    </v-img>
                    <v-card-text>

                        <NuxtLink :to="'/manga/' + i.id">{{ i.attributes.title.en }}</NuxtLink>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row> -->

    <MangaTop />

  </div>
</template>
<script setup>
// definePageMeta({
//   layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
// });
// const { data: manga } = await useFetch(
//   "https://api.mangadex.org/manga?includes[]=cover_art"
// );
</script>