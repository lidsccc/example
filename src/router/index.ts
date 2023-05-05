import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import ErrorPage from "@/views/404.vue";
import Map from "@/views/Map.vue";

const routes = [
	{ path: "/", component: Login },
	{ path: "/Home", component: Home },
	{ path: "/error-page", component: ErrorPage },
	{ path: "/Map", component: Map },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
