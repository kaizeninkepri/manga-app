<template>
    <div>
        <div v-for="i in list.chapter.data">
            <v-img :src="'https://uploads.mangadex.org/data/' + list.chapter.hash + '/' + i">
                <template v-slot:placeholder>
                    <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular color="red-4" indeterminate></v-progress-circular>
                    </div>
                </template>
            </v-img>
        </div>
    </div>
</template>
<script setup>
const { id } = useRoute().params
const { pending, data: count } = await useLazyAsyncData('count', () => $fetch('https://api.mangadex.org/at-home/server/' + id))
watch(count, (newCount) => {
    // Because count starts out null, you won't have access
    // to its contents immediately, but you can watch it.
})
const { data: list } = await useFetch('https://api.mangadex.org/at-home/server/' + id)
</script>