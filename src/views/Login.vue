<template>
	<div>登录页</div>
	<el-button type="primary" @click="toHome()">去主页</el-button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const toHome = () => {
	router.push("/home");
};
</script>

<style lang="scss" scoped></style>
