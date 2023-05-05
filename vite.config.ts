import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import postcssImport from "postcss-import";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	css: {
		postcss: {
			plugins: [postcssImport, autoprefixer, tailwindcss],
		},
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"), // 设置 `@` 指向 `src` 目录
		},
	},
	base: "./", // 设置打包路径
});
