<template>

  <div>
    <v-img
      v-for="(d, dindex) in data.chapter.data"
      :key="dindex"
      aspect-ratio="4/3"
      :src="data.baseUrl + '/data/' + data.chapter.hash  + '/' + d"
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
  </div>
</template>
<script setup>
const { id } = useRoute().params;
const { data, pending, error, refresh } = await useFetch(
  "https://api.mangadex.org/at-home/server/" + id
);
</script>