import "./index.css";
import { useCallback, useMemo, useEffect } from "react";
import type { Config, TweakpaneEvent } from "./types";
import { useGsapInit } from "./hooks/useGsapInit";
import { useDisplacementImage } from "./hooks/useDisplacementImage";
import { useStylesUpdater } from "./hooks/useStylesUpdater";
import { useTweakpaneConfig } from "./hooks/useTweakpaneConfig";
import { useEffectPositioning } from "./hooks/useEffectPositioning";
import { SVGFilter } from "./components/SVGFilter";
import { DisplacementDebug } from "./components/DisplacementDebug";
import { EffectPlaceholder } from "./components/EffectPlaceholder";
import { INITIAL_CONFIG } from "./constants";

interface LiquidGlassProps {
  children?: React.ReactNode;
  // 控制面板配置
  enableTweakpane?: boolean;

  // 基础配置
  icons?: boolean;
  debug?: boolean;
  top?: boolean;
  preset?: "dock" | "pill" | "bubble" | "free";
  theme?: "system" | "light" | "dark";

  // 尺寸配置
  width?: number;
  height?: number;
  radius?: number;
  border?: number;

  // 视觉效果配置
  alpha?: number;
  lightness?: number;
  blur?: number;
  displace?: number;
  frost?: number;
  saturation?: number;

  // 滤镜配置
  scale?: number;
  blend?: string;
  x?: string;
  y?: string;

  // 色差配置
  r?: number;
  g?: number;
  b?: number;
}

/**
 * 液体玻璃效果组件
 */
function LiquidGlass({
  children,
  enableTweakpane = false,
  // 基础配置
  icons,
  debug,
  top,
  preset,
  theme,
  // 尺寸配置
  width,
  height,
  radius,
  border,
  // 视觉效果配置
  alpha,
  lightness,
  blur,
  displace,
  frost,
  saturation,
  // 滤镜配置
  scale,
  blend,
  x,
  y,
  // 色差配置
  r,
  g,
  b,
}: LiquidGlassProps) {
  // 初始化GSAP
  useGsapInit();

  // 获取hooks
  const { buildDisplacementImage } = useDisplacementImage();
  const { updateStyles } = useStylesUpdater();

  // 合并配置
  const config = useMemo(
    (): Config => ({
      ...INITIAL_CONFIG,
      ...(icons !== undefined && { icons }),
      ...(debug !== undefined && { debug }),
      ...(top !== undefined && { top }),
      ...(preset !== undefined && { preset }),
      ...(theme !== undefined && { theme }),
      ...(width !== undefined && { width }),
      ...(height !== undefined && { height }),
      ...(radius !== undefined && { radius }),
      ...(border !== undefined && { border }),
      ...(alpha !== undefined && { alpha }),
      ...(lightness !== undefined && { lightness }),
      ...(blur !== undefined && { blur }),
      ...(displace !== undefined && { displace }),
      ...(frost !== undefined && { frost }),
      ...(saturation !== undefined && { saturation }),
      ...(scale !== undefined && { scale }),
      ...(blend !== undefined && { blend }),
      ...(x !== undefined && { x }),
      ...(y !== undefined && { y }),
      ...(r !== undefined && { r }),
      ...(g !== undefined && { g }),
      ...(b !== undefined && { b }),
    }),
    [
      icons,
      debug,
      top,
      preset,
      theme,
      width,
      height,
      radius,
      border,
      alpha,
      lightness,
      blur,
      displace,
      frost,
      saturation,
      scale,
      blend,
      x,
      y,
      r,
      g,
      b,
    ]
  );

  // 主更新函数
  const handleConfigUpdate = useCallback(
    (config: Config) => {
      buildDisplacementImage(config);
      updateStyles(config);
    },
    [buildDisplacementImage, updateStyles]
  );

  // 同步函数，处理视图过渡
  const handleSync = useCallback(
    (config: Config, event?: TweakpaneEvent) => {
      const shouldUseTransition =
        document.startViewTransition() &&
        event?.target?.controller?.view?.labelElement?.innerText &&
        ["theme", "top"].includes(
          event.target.controller.view.labelElement.innerText
        );

      if (shouldUseTransition) {
        document.startViewTransition(() => handleConfigUpdate(config));
      } else {
        handleConfigUpdate(config);
      }
    },
    [handleConfigUpdate]
  );

  // 当配置发生变化时更新效果
  useEffect(() => {
    handleConfigUpdate(config);
  }, [config, handleConfigUpdate]);

  // 配置Tweakpane控制面板（仅在启用时）
  useTweakpaneConfig({
    onConfigUpdate: handleConfigUpdate,
    onSync: handleSync,
    enabled: enableTweakpane,
  });

  // 效果元素定位
  useEffectPositioning();

  return (
    <>
      <div className="effect">
        {children}
        <SVGFilter />
        <DisplacementDebug />
      </div>
      <EffectPlaceholder />
    </>
  );
}

export default LiquidGlass;
