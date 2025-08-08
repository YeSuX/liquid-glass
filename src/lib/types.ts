export interface LiquidGlassProps {
  children?: React.ReactNode;
  enableTweakpane?: boolean;
  icons?: boolean;
  debug?: boolean;
  top?: boolean;
  preset?: "dock" | "pill" | "bubble" | "free";
  theme?: "system" | "light" | "dark";
  width?: number;
  height?: number;
  radius?: number;
  border?: number;
  alpha?: number;
  lightness?: number;
  blur?: number;
  displace?: number;
  frost?: number;
  saturation?: number;
  scale?: number;
  blend?: string;
  x?: string;
  y?: string;
  r?: number;
  g?: number;
  b?: number;
  draggable?: boolean;
}