<template>
  <div>
    <div v-if="!pending">
      <div style="background: url('https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'); height: 350px;">
        <v-row class="justify-center pt-8">
          <v-col cols="10">
            <v-card class="pa-8">
              <v-row>
                <v-col cols="3">
                  <v-card>
                    <v-img
                      v-if="manga.images.webp.image_url"
                      aspect-ratio="4/3"
                      :src="manga.images.webp.image_url"
                      cover
                    >
                      <template v-slot:placeholder>
                        <div class="d-flex align-center justify-center fill-height">
                          <v-progress-circular
                            color="red-4"
                            indeterminate
                          ></v-progress-circular>
                        </div>
                      </template>
                    </v-img>
                    <v-card-actions>
                      <v-rating
                        density="compact"
                        half-increments
                        :model-value="Math.round(manga.score * 0.5)"
                        readonly
                        length="5"
                        color="yellow-accent-4"
                        size="x-small"
                      ></v-rating>
                      <v-spacer></v-spacer>
                      <span class="text-caption mt-1">{{ manga.score }}</span>
                    </v-card-actions>
                    <v-btn
                      class="mt-1"
                      color="primary"
                    >Start Reading Chapter 1</v-btn>
                  </v-card>
                </v-col>
                <v-col cols="9">
                  <h1 class="mb-1">{{ manga.title }}</h1>
                  <p class="mb-5">Alternative :
                    <span
                      class="ml-2"
                      v-for="(t,tIndex) in manga.titles"
                      :key="tIndex"
                    > {{ t.title }} ;</span>

                  </p>
                  <p class="text-caption">Author</p>
                  <NuxtLink
                    v-for="(a, aIndex) in manga.authors"
                    :key="aIndex"
                  >{{ a.name  }}</NuxtLink>
                  <p class="text-caption mt-4">Genre</p>
                  <v-chip-group>
                    <v-chip
                      color="red"
                      text-color="white"
                      v-for="(g,gIndex) in manga.genres"
                      :key="gIndex"
                    >{{ g.name }}</v-chip>
                  </v-chip-group>
                  <p>{{ manga.synopsis }}</p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="justify-center">
          <v-col cols="10">
            <pre>{{ manga }}</pre>
          </v-col>
        </v-row>
      </div>
    </div>
    <div v-else>
      Loading ..
    </div>
  </div>
</template>
<script setup>
const { id } = useRoute().params;
const { pending, data: manga } = await useAsyncData(
  "mangaid",
  () => $fetch("/api/mangaid?id=" + id),
  {
    transform: (_manga) => _manga.data,
  }
);
</script>
