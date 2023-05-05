<template>
	<div id="container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
const map = ref(null);
const init = () => {
	AMapLoader.load({
		key: "0cf73ee47ff49585be10998334586b8b", // 申请好的Web端开发者Key，首次调用 load 时必填
		version: "2.0", // 指定要加载的 JS API 的版本，缺省时默认为 1.4.15
		plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
	})
		.then((AMap) => {
			map.value = new AMap.Map("container");
		})
		.catch((e) => {
			console.log("地图加载失败", e);
		});
};
onMounted(() => {
	init();
});
</script>

<style lang="scss" scoped>
#container{
  width: 100%;
  height: 100vh;
}
</style>
