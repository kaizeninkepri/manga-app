<template>
  <div>
    <v-slide-group
      class="pa-0"
      center-active
      show-arrows
    >
      <v-slide-group-item
        v-for="i in manga.data"
        :key="i.mal_id"
      >
        <v-card
          class="ma-1"
          width="120"
        >
          <v-img
            v-if="i.images.webp.image_url"
            aspect-ratio="4/3"
            :src="i.images.webp.image_url"
            height="180"
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
          <v-card-text>
            <v-tooltip
              :text="i.title"
              location="top"
            >
              <template v-slot:activator="{ props }">
                <p
                  class="text-subtitle-2 textTitle2Lines"
                  v-bind="props"
                > {{
                                    i.title }}</p>
              </template>
            </v-tooltip>

            <!-- <NuxtLink :to="'/manga/' + i.mal_id">{{ i }}</NuxtLink> -->
          </v-card-text>
          <v-card-actions>
            <v-rating
              density="compact"
              half-increments
              :model-value="Math.round(i.score * 0.5)"
              readonly
              length="5"
              color="yellow-accent-4"
              size="x-small"
            ></v-rating>
            <v-spacer></v-spacer>
            <span class="text-caption mt-1">{{ i.score }}</span>
          </v-card-actions>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>

  </div>
</template>
<script setup>
const { data: manga } = await useFetch(
  "https://api.jikan.moe/v4/top/manga?limit=10"
);
</script>