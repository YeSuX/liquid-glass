import { BaseConfig, Config } from '../types';

// 常量定义
export const BASE_CONFIG: BaseConfig = {
  icons: false,
  scale: -180,
  radius: 16,
  border: 0.07,
  lightness: 50,
  displace: 0,
  blend: "difference",
  x: "R",
  y: "B",
  alpha: 0.93,
  blur: 11,
  r: 0,
  g: 10,
  b: 20,
  saturation: 1,
} as const;

export const PRESETS = {
  dock: {
    ...BASE_CONFIG,
    width: 336,
    height: 96,
    displace: 0.2,
    icons: true,
    frost: 0.05,
  },
  pill: {
    ...BASE_CONFIG,
    width: 200,
    height: 80,
    displace: 0,
    frost: 0,
    radius: 40,
  },
  bubble: {
    ...BASE_CONFIG,
    radius: 70,
    width: 140,
    height: 140,
    displace: 0,
    frost: 0,
  },
  free: {
    ...BASE_CONFIG,
    width: 140,
    height: 280,
    radius: 80,
    border: 0.15,
    alpha: 0.74,
    lightness: 60,
    blur: 10,
    displace: 0,
    scale: -300,
  },
} as const;

export const INITIAL_CONFIG: Config = {
  ...PRESETS.dock,
  theme: "system",
  debug: false,
  top: false,
  preset: "dock",
};

// 选项配置
export const THEME_OPTIONS = {
  system: "system",
  light: "light",
  dark: "dark",
} as const;

export const PRESET_OPTIONS = {
  dock: "dock",
  pill: "pill",
  bubble: "bubble",
  free: "free",
} as const;

export const CHANNEL_OPTIONS = {
  r: "R",
  g: "G",
  b: "B",
} as const;

export const BLEND_OPTIONS = {
  normal: "normal",
  multiply: "multiply",
  screen: "screen",
  overlay: "overlay",
  darken: "darken",
  lighten: "lighten",
  "color-dodge": "color-dodge",
  "color-burn": "color-burn",
  "hard-light": "hard-light",
  "soft-light": "soft-light",
  difference: "difference",
  exclusion: "exclusion",
  hue: "hue",
  saturation: "saturation",
  color: "color",
  luminosity: "luminosity",
  "plus-darker": "plus-darker",
  "plus-lighter": "plus-lighter",
} as const;

// 应用图标配置
export const APP_ICONS = [
  {
    src: "https://assets.codepen.io/605876/finder.png",
    alt: "Finder"
  },
  {
    src: "https://assets.codepen.io/605876/launch-control.png",
    alt: "Launch Control"
  },
  {
    src: "https://assets.codepen.io/605876/safari.png",
    alt: "Safari"
  },
  {
    src: "https://assets.codepen.io/605876/calendar.png",
    alt: "Calendar"
  }
] as const;