import { createPinia } from "pinia";
//pinia持久化存储
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
const store = createPinia();
store.use(piniaPluginPersistedstate);
export default store;
