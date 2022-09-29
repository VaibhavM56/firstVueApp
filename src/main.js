import { createApp } from "vue";
import App from "./App.vue";

// import BaseHtag from "./components/BaseHtag.vue";
import BaseCard from "./components/BaseCard.vue";

let app = createApp(App);

// app.component("base-tag", BaseHtag);
app.component("base-card", BaseCard);

app.mount("#app");
