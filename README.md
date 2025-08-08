# Liquid Glass

A React component library for creating stunning liquid glass effects with GSAP animations.

## Features

- 🌊 Smooth liquid glass morphing effects
- 🎨 Highly customizable appearance
- 🎯 TypeScript support
- 📱 Responsive design
- 🎮 Optional Tweakpane controls for development
- 🚀 Optimized performance with GSAP

## Installation

```bash
npm install liquid-glass
# or
yarn add liquid-glass
# or
pnpm add liquid-glass
```

## Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom
```

## Usage

### Basic Usage

```tsx
import LiquidGlass from "liquid-glass";
import "liquid-glass/dist/style.css";

function App() {
  return (
    <LiquidGlass>
      <div>Your content here</div>
    </LiquidGlass>
  );
}
```

### Advanced Usage with Custom Configuration

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
      <div>Your content with liquid glass effect</div>
    </LiquidGlass>
  );
}
```

### Development Mode with Tweakpane

```tsx
import LiquidGlass from "liquid-glass";
import "liquid-glass/dist/style.css";

function App() {
  return (
    <LiquidGlass enableTweakpane={true}>
      <div>Content with live controls</div>
    </LiquidGlass>
  );
}
```

## API Reference

### Props

| Prop              | Type                                     | Default | Description                                 |
| ----------------- | ---------------------------------------- | ------- | ------------------------------------------- |
| `children`        | `React.ReactNode`                        | -       | Content to apply the liquid glass effect to |
| `enableTweakpane` | `boolean`                                | `false` | Enable development controls                 |
| `icons`           | `boolean`                                | -       | Show icons in the effect                    |
| `debug`           | `boolean`                                | -       | Enable debug mode                           |
| `top`             | `boolean`                                | -       | Position effect at top                      |
| `preset`          | `"dock" \| "pill" \| "bubble" \| "free"` | -       | Predefined effect presets                   |
| `theme`           | `"system" \| "light" \| "dark"`          | -       | Theme variant                               |
| `width`           | `number`                                 | -       | Effect width in pixels                      |
| `height`          | `number`                                 | -       | Effect height in pixels                     |
| `radius`          | `number`                                 | -       | Border radius                               |
| `border`          | `number`                                 | -       | Border width                                |
| `alpha`           | `number`                                 | -       | Opacity (0-1)                               |
| `lightness`       | `number`                                 | -       | Lightness adjustment                        |
| `blur`            | `number`                                 | -       | Blur intensity                              |
| `displace`        | `number`                                 | -       | Displacement effect strength                |
| `frost`           | `number`                                 | -       | Frost effect intensity                      |
| `saturation`      | `number`                                 | -       | Color saturation                            |
| `scale`           | `number`                                 | -       | Scale factor                                |
| `blend`           | `string`                                 | -       | CSS blend mode                              |
| `x`               | `string`                                 | -       | X position                                  |
| `y`               | `string`                                 | -       | Y position                                  |
| `r`               | `number`                                 | -       | Red channel adjustment                      |
| `g`               | `number`                                 | -       | Green channel adjustment                    |
| `b`               | `number`                                 | -       | Blue channel adjustment                     |
| `draggable`       | `boolean`                                | `true`  | Enable drag interaction                     |

### TypeScript Support

The library includes full TypeScript definitions:

```tsx
import LiquidGlass, { Config, BaseConfig } from "liquid-glass";

const config: Partial<Config> = {
  width: 400,
  height: 300,
  blur: 10,
  alpha: 0.8,
};
```

## Browser Compatibility

- Modern browsers with CSS Filter support
- Chrome 53+
- Firefox 35+
- Safari 9.1+
- Edge 12+

## Performance Considerations

- Uses GSAP for optimized animations
- CSS filters may impact performance on lower-end devices
- Consider reducing effect complexity for mobile devices
- The component automatically handles cleanup and optimization

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build library
pnpm build:lib

# Lint code
pnpm lint
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
