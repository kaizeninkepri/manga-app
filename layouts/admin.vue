<template>
    <div>
        <v-card>
            <v-layout>
                <v-navigation-drawer>
                    <v-list>
                        <v-list-item title="Navigation drawer"></v-list-item>
                    </v-list>
                </v-navigation-drawer>

                <v-app-bar title="Application bar"></v-app-bar>

                <v-main style="min-height: 300px;">
                    data
                    <img :src="count.data.images.webp.image_url" />
                    {{ count.data.images.webp.image_url }}
                </v-main>
            </v-layout>
        </v-card>
    </div>
</template>
<script setup>
const { data: count } = await useFetch('https://api.jikan.moe/v4/manga/1/full')

</script>