<template>
  <div>
    <v-slide-group class="pa-0">
      <v-slide-group-item
        v-for="i in characters.sort((a, b) => parseFloat(a.character.mal_id) - parseFloat(b.character.mal_id))"
        :key="i.mal_id">
        <v-card class="ma-1" width="180">
          <v-img v-if="i.character.images.webp.image_url" aspect-ratio="4/3" :src="i.character.images.webp.image_url"
            height="200" cover>
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular color="red-4" indeterminate></v-progress-circular>
              </div>
            </template>
          </v-img>
          <v-card-text>
            <NuxtLink :to="'/manga/' + i.mal_id">
              <p class="text-subtitle-2"> {{ i.character.name }}</p>
              <p class="text-subtitle-2"> {{ i.role }}</p>
            </NuxtLink>
          </v-card-text>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>

  </div>
</template>
<script setup>
const { characters } = defineProps(["characters"]);
</script>