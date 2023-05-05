<template>
	<div>主页</div>
	<el-button type="primary" @click="toErrorPage">去错误页</el-button>
	<HelloWorld :text="helloWorld" @confirm="emitChange" />
	<div class="test">测试scss</div>
	<div>{{ x }},{{ y }}</div>
	<el-button type="primary" @click="toMap">去地图页</el-button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
import HelloWorld from "@/components/HelloWorld.vue";
import { useMouse } from "@vueuse/core";
import { ref } from "vue";
const toErrorPage = () => {
	router.push("/error-page");
};
const { x, y } = useMouse();
const helloWorld = ref("helloWorld");
const emitChange = (e) => {
	helloWorld.value = e
};
const toMap = () => {
  router.push("/Map");
}
</script>

<style lang="scss" scoped>
.test {
	color: red;
}
</style>
