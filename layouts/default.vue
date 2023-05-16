<template>
  <div>
    <v-layout>

      <v-app-bar
        density="compact"
        class="headerBg pa-4"
        :elevation="0"
      >
        <!-- <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template> -->

        <v-app-bar-title>Dailymangas.com</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-text-field
          density="compact"
          variant="solo"
          label="Search Manga"
          append-inner-icon="mdi-magnify"
          single-line
          class="me-2"
          hide-details
        ></v-text-field>
        <v-btn
          class="me-2 text-none"
          color="#4f545c"
          prepend-icon="mdi-export-variant"
          variant="flat"
        >
          login
        </v-btn>
        <v-btn
          class="me-2 text-none"
          color="#4f545c"
          prepend-icon="mdi-export-variant"
          variant="flat"
        >
          Register
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-app-bar>
      <!-- <v-toolbar
        density="compact"
        class="rounded-lg mb-2 headerBg"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Dailymanga.com

        </v-toolbar-title>
        <v-btn>Top Manga</v-btn>
        <v-btn>Lastest Update</v-btn>
        <v-btn>Recomendations</v-btn>
        <v-btn>Reviews</v-btn>
        <v-spacer></v-spacer>

        <v-text-field
          density="compact"
          variant="solo"
          label="Search Manga"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
        ></v-text-field>
      </v-toolbar> -->
      <v-main style="min-height: 300px;">
        <v-container fluid>
          <slot />
        </v-container>
      </v-main>

    </v-layout>
  </div>
</template>