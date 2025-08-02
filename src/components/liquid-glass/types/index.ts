// 类型定义
export interface Config {
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
  theme: string;
  debug: boolean;
  top: boolean;
  preset: string;
}

export interface BaseConfig {
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
}

// 事件类型定义
export interface TweakpaneEvent {
  target: {
    controller: {
      view: {
        labelElement: {
          innerText: string;
        };
      };
    };
  };
}