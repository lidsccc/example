<template>
	<div @click="change('李四')">{{ userStore.name }}</div>
	<div @click="changeAge()">{{ userStore.age }}</div>
  <el-input v-model="input" placeholder="Please input" />
	<el-button type="primary" @click="changeText">{{ props.text }}</el-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "HelloWorld",
});
</script>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/store/modules/user";
interface Props {
	text: string;
}
const props = withDefaults(defineProps<Props>(), {
	text: "",
});
const emits = defineEmits(["confirm"]);
const userStore = useUserStore();
const change = (user: string) => {
	userStore.changeName(user);
};
const changeAge = () => {
	userStore.changeAge();
};
const input = ref("")
const changeText = () => {
	emits("confirm",input.value);
  input.value = "";
};
</script>

<style lang="scss" scoped>
.read-the-docs {
	color: #888;
}
</style>
