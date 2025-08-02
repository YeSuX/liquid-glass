import "./index.css";
import { useCallback } from "react";
import type { Config, TweakpaneEvent } from "./types";
import { useGsapInit } from "./hooks/useGsapInit";
import { useDisplacementImage } from "./hooks/useDisplacementImage";
import { useStylesUpdater } from "./hooks/useStylesUpdater";
import { useTweakpaneConfig } from "./hooks/useTweakpaneConfig";
import { useEffectPositioning } from "./hooks/useEffectPositioning";
import { NavigationIcons } from "./components/NavigationIcons";
import { SVGFilter } from "./components/SVGFilter";
import { DisplacementDebug } from "./components/DisplacementDebug";
import { EffectPlaceholder } from "./components/EffectPlaceholder";

/**
 * 液体玻璃效果组件
 * 重构后的版本，使用hooks和细粒度组件
 */
function LiquidGlass() {
  // 初始化GSAP
  useGsapInit();

  // 获取hooks
  const { buildDisplacementImage } = useDisplacementImage();
  const { updateStyles } = useStylesUpdater();

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

  // 配置Tweakpane控制面板
  useTweakpaneConfig({
    onConfigUpdate: handleConfigUpdate,
    onSync: handleSync,
  });

  // 效果元素定位
  useEffectPositioning();

  return (
    <>
      <div className="effect">
        <NavigationIcons />
        <SVGFilter />
        <DisplacementDebug />
      </div>
      <EffectPlaceholder />
    </>
  );
}

export default LiquidGlass;
