import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
    values: {},
  },
  theme: {
    dark: true,
    default: "light",
    disable: false,
    options: { customProperties: true },
    themes: {
      light: {
        background: "#f1eeee",
        primary: "#1717c7",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00",
        grey: "#fff",
        orange: "#B490E8"
      },
      dark: {
        background: "#161722",
        primary: "#a230aa",
        secondary: "#424242",
        accent: "#FF4081",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00",
        grey: "#25273C",
        orange: "#B490E8"
      },
    },
  },
});
