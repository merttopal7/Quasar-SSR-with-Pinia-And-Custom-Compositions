import { defineStore } from "pinia";

const useThemeStore = defineStore("theme", {
  state: () => ({
    sidebar: true,
  }),
});

export default function useTheme() {
  const themeStore = useThemeStore();
  const appScripts = () => {
    const mainsc = document.createElement("script");
    mainsc.src = "/assets/js/main.js";
    const menusc = document.createElement("script");
    menusc.src = "/assets/vendor/js/menu.js";
    document.body.append(menusc);
    setTimeout(() => document.body.append(mainsc), 10);
  };
  const indexScripts = () => {
    const apexsc = document.createElement("script");
    apexsc.src = "/assets/vendor/libs/apex-charts/apexcharts.js";
    const dashboardsc = document.createElement("script");
    dashboardsc.src = "/assets/js/dashboards-analytics.js";
    document.body.append(apexsc);
    setTimeout(() => document.body.append(dashboardsc), 100);
  };

  const loginScripts = () => {
    const logincss = document.createElement("link");
    logincss.rel = "stylesheet";
    logincss.href = "/assets/vendor/css/pages/page-auth.css";
    document.head.append(logincss);
  };

  return {
    store: themeStore,
    appScripts,
    indexScripts,
    loginScripts,
  };
}
