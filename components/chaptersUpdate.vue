<template>
  <div>
    <h2>Read Manga Online - Latest Updates</h2>
    <v-row>
      <v-col
        cols="4"
        v-for="(i,index) in data"
        :key="index"
      >
        <v-card>
          <div class="d-flex">
            <div
              v-for="e,eIndex in i.relationships"
              :key="eIndex"
            >
              <v-avatar
                class="ma-3"
                size="125"
                rounded="0"
                v-if="e.type == 'cover_art'"
              >
                <v-img
                  aspect-ratio="4/3"
                  cover
                  :src="'https://uploads.mangadex.org/covers/'+ i.id +  '/' + e.attributes.fileName"
                ></v-img>
              </v-avatar>
            </div>
            <div class="pa-4">
              <p class="font-weight-black">
                {{ i.attributes.title.en }}
              </p>
              <chaptersUpdateList :mangaId="i.id" />

              <!-- <v-card-actions>
            <v-btn
              class="ms-2"
              variant="outlined"
              size="small"
            >
              START RADIO
            </v-btn>
          </v-card-actions> -->
            </div>

          </div>
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>
<script setup>
const updated = ref([]);
const { data, pending, error, refresh } = await useFetch(
  "https://api.mangadex.org/manga?order[latestUploadedChapter]=desc&includes[]=cover_art&availableTranslatedLanguage[]=en&limit=12",
  {
    transform: (_manga) => _manga.data,
  }
);
</script>
