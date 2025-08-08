# Liquid Glass

一个用于创建令人惊艳的液体玻璃效果的 React 组件库，配备 GSAP 动画。

## 特性

- 🌊 流畅的液体玻璃变形效果
- 🎨 高度可定制的外观
- 🎯 TypeScript 支持
- 📱 响应式设计
- 🎮 可选的 Tweakpane 开发控制面板
- 🚀 基于 GSAP 的性能优化

## 安装

```bash
npm install liquid-glass
# 或
yarn add liquid-glass
# 或
pnpm add liquid-glass
```

## 对等依赖

确保您已安装所需的对等依赖：

```bash
npm install react react-dom
```

## 使用方法

### 基础用法

```tsx
import LiquidGlass from "liquid-glass";
import "liquid-glass/dist/style.css";

function App() {
  return (
    <LiquidGlass>
      <div>您的内容</div>
    </LiquidGlass>
  );
}
```

### 自定义配置的高级用法

```tsx
import LiquidGlass from "liquid-glass";
import "liquid-glass/dist/style.css";

function App() {
  return (
    <LiquidGlass
      width={400}
      height={300}
      radius={20}
      blur={10}
      alpha={0.8}
      preset="bubble"
      theme="dark"
      draggable={true}
      enableTweakpane={false}
    >
      <div>带有液体玻璃效果的内容</div>
    </LiquidGlass>
  );
}
```

### 带有 Tweakpane 的开发模式

```tsx
import LiquidGlass from "liquid-glass";
import "liquid-glass/dist/style.css";

function App() {
  return (
    <LiquidGlass enableTweakpane={true}>
      <div>带有实时控制的内容</div>
    </LiquidGlass>
  );
}
```

## API 参考

### 属性

| 属性              | 类型                                     | 默认值  | 描述                   |
| ----------------- | ---------------------------------------- | ------- | ---------------------- |
| `children`        | `React.ReactNode`                        | -       | 应用液体玻璃效果的内容 |
| `enableTweakpane` | `boolean`                                | `false` | 启用开发控制面板       |
| `icons`           | `boolean`                                | -       | 在效果中显示图标       |
| `debug`           | `boolean`                                | -       | 启用调试模式           |
| `top`             | `boolean`                                | -       | 将效果定位在顶部       |
| `preset`          | `"dock" \| "pill" \| "bubble" \| "free"` | -       | 预定义效果预设         |
| `theme`           | `"system" \| "light" \| "dark"`          | -       | 主题变体               |
| `width`           | `number`                                 | -       | 效果宽度（像素）       |
| `height`          | `number`                                 | -       | 效果高度（像素）       |
| `radius`          | `number`                                 | -       | 边框圆角               |
| `border`          | `number`                                 | -       | 边框宽度               |
| `alpha`           | `number`                                 | -       | 不透明度（0-1）        |
| `lightness`       | `number`                                 | -       | 亮度调整               |
| `blur`            | `number`                                 | -       | 模糊强度               |
| `displace`        | `number`                                 | -       | 位移效果强度           |
| `frost`           | `number`                                 | -       | 霜冻效果强度           |
| `saturation`      | `number`                                 | -       | 颜色饱和度             |
| `scale`           | `number`                                 | -       | 缩放因子               |
| `blend`           | `string`                                 | -       | CSS 混合模式           |
| `x`               | `string`                                 | -       | X 位置                 |
| `y`               | `string`                                 | -       | Y 位置                 |
| `r`               | `number`                                 | -       | 红色通道调整           |
| `g`               | `number`                                 | -       | 绿色通道调整           |
| `b`               | `number`                                 | -       | 蓝色通道调整           |
| `draggable`       | `boolean`                                | `true`  | 启用拖拽交互           |

### TypeScript 支持

该库包含完整的 TypeScript 定义：

```tsx
import LiquidGlass, { Config, BaseConfig } from "liquid-glass";

const config: Partial<Config> = {
  width: 400,
  height: 300,
  blur: 10,
  alpha: 0.8,
};
```

## 浏览器兼容性

- 支持 CSS Filter 的现代浏览器
- Chrome 53+
- Firefox 35+
- Safari 9.1+
- Edge 12+

## 性能考虑

- 使用 GSAP 进行优化动画
- CSS 滤镜可能会影响低端设备的性能
- 建议在移动设备上降低效果复杂度
- 组件自动处理清理和优化

## 开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建库
pnpm build:lib

# 代码检查
pnpm lint
```

## 许可证

MIT

## 贡献

欢迎贡献！请随时提交 Pull Request。
