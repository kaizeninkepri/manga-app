import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const myCustomLightTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#191a19",
    surface: "#161616",
    primary: "#1E5128",
    "primary-darken-1": "#3700B3",
    secondary: "#4E9F3D",
    third: "D8E9A8",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "myCustomLightTheme",
      themes: {
        myCustomLightTheme,
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
