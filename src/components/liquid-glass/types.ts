export interface LiquidGlassConfig {
  icons: boolean;
  scale: number;
  radius: number;
  border: number;
  lightness: number;
  displace: number;
  blend: string;
  x: string;
  y: string;
  alpha: number;
  blur: number;
  r: number;
  g: number;
  b: number;
  saturation: number;
  width: number;
  height: number;
  frost: number;
  theme: 'system' | 'light' | 'dark';
  debug: boolean;
  top: boolean;
  preset: 'dock' | 'pill' | 'bubble' | 'free';
}

export type PresetType = 'dock' | 'pill' | 'bubble' | 'free';

export interface LiquidGlassProps {
  children: React.ReactNode;
  initialPreset?: PresetType;
  showControls?: boolean;
}

export interface BlendModeOption {
  [key: string]: string;
}

export interface ChannelOption {
  [key: string]: string;
}