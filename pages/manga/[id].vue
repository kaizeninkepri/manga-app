<template>
    <div>
        <div v-for="i in list.data.sort((a, b) => {
            return parseFloat(a.attributes.chapter) - parseFloat(b.attributes.chapter);
        })">
            <li v-if="i.attributes.translatedLanguage == 'en'">
                <NuxtLink :to="'/manga/read/' + i.id">Chapter {{ i.attributes.chapter }} {{ i.attributes.title }}
                </NuxtLink>
            </li>
            <!-- <v-img :src="'https://uploads.mangadex.org/data/' + list.chapter.hash + '/' + i" /> -->
        </div>

    </div>
</template>
<script setup>
const { id } = useRoute().params
const { data: list } = await useFetch('https://api.mangadex.org/manga/' + id + '/feed')

</script>
