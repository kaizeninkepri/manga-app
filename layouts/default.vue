<template>
    <div>
        <v-layout>
            <v-container>
                <v-toolbar density="compact" class="rounded-lg mb-2 headerBg">
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>

                    <v-toolbar-title>Dailymanga.com

                    </v-toolbar-title>
                    <v-btn>Top Manga</v-btn>
                    <v-btn>Lastest Update</v-btn>
                    <v-btn>Recomendations</v-btn>
                    <v-btn>Reviews</v-btn>
                    <v-spacer></v-spacer>

                    <v-text-field density="compact" variant="solo" label="Search Manga" append-inner-icon="mdi-magnify"
                        single-line hide-details></v-text-field>
                </v-toolbar>
                <v-main style="min-height: 300px;">

                    <slot />
                </v-main>
            </v-container>

        </v-layout>
    </div>
</template>