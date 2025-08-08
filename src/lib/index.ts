// 主组件导出
export { default as LiquidGlass } from "../components/liquid-glass";
export { default } from "../components/liquid-glass";

// 类型导出
export type {
  Config,
  BaseConfig,
  TweakpaneEvent,
} from "../components/liquid-glass/types";
export type { LiquidGlassProps } from "./types";

// 样式导出 - 用户需要手动导入CSS
// import 'liquid-glass/dist/style.css';
