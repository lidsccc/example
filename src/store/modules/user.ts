import { defineStore } from "pinia";
export const useUserStore = defineStore({
	id: "user",
	state: (): {
		name: string;
		age: number;
		isManage: boolean;
	} => {
		return {
			name: "张三",
			age: 0,
			isManage: false,
		};
	},
	getters: {},
	actions: {
		changeName(name: string) {
			this.name = name;
		},
		changeAge() {
			this.age++;
		},
	},
  // 开启数据缓存
  persist: {
    storage: window.localStorage,
  },
});
