import { useCallback, useEffect } from "react";
import { Pane, FolderApi } from "tweakpane";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import type { Config, TweakpaneEvent } from "../types";
import {
  INITIAL_CONFIG,
  PRESET_OPTIONS,
  THEME_OPTIONS,
  CHANNEL_OPTIONS,
  BLEND_OPTIONS,
  PRESETS,
} from "../constants";

interface UseTweakpaneConfigOptions {
  onConfigUpdate: (config: Config) => void;
  onSync: (config: Config, event?: TweakpaneEvent) => void;
}

/**
 * Tweakpane配置管理hook
 */
export const useTweakpaneConfig = ({
  onConfigUpdate,
  onSync,
}: UseTweakpaneConfigOptions) => {
  // 预设变更处理函数
  const handlePresetChange = useCallback(
    (config: Config, ctrl: Pane, settings: FolderApi) => {
      document.documentElement.dataset.mode = config.preset;
      settings.expanded = config.preset === "free";
      settings.disabled = config.preset !== "free";

      if (config.preset !== "free") {
        const values = PRESETS[config.preset as keyof typeof PRESETS];
        document.documentElement.dataset.icons = String(values.icons);
        console.info({ values });

        const morph = gsap.timeline({
          onUpdate: () => ctrl.refresh(),
        });

        Object.entries(values).forEach(([key, value]) => {
          morph.to(config, { [key]: value }, 0);
        });
      }
    },
    []
  );

  useEffect(() => {
    const config = { ...INITIAL_CONFIG };

    try {
      const ctrl = new Pane({
        title: "config",
        expanded: true,
      });

      // 基础控制项
      ctrl.addBinding(config, "debug");
      ctrl.addBinding(config, "top");

      // 设置面板
      const settings = ctrl.addFolder({
        title: "settings",
        disabled: true,
        expanded: false,
      });

      // 预设模式控制
      ctrl
        .addBinding(config, "preset", {
          label: "mode",
          options: PRESET_OPTIONS,
        })
        .on("change", () => handlePresetChange(config, ctrl, settings));

      // 主题控制
      ctrl.addBinding(config, "theme", {
        label: "theme",
        options: THEME_OPTIONS,
      });

      // 添加各种设置项
      settings.addBinding(config, "frost", {
        label: "frost",
        min: 0,
        max: 1,
        step: 0.01,
      });

      settings.addBinding(config, "saturation", {
        min: 0,
        max: 2,
        step: 0.1,
      });

      settings.addBinding(config, "icons");

      settings.addBinding(config, "width", {
        min: 80,
        max: 500,
        step: 1,
        label: "width (px)",
      });

      settings.addBinding(config, "height", {
        min: 35,
        max: 500,
        step: 1,
        label: "height (px)",
      });

      settings.addBinding(config, "radius", {
        min: 0,
        max: 500,
        step: 1,
        label: "radius (px)",
      });

      settings.addBinding(config, "border", {
        min: 0,
        max: 1,
        step: 0.01,
        label: "border",
      });

      settings.addBinding(config, "alpha", {
        min: 0,
        max: 1,
        step: 0.01,
        label: "alpha",
      });

      settings.addBinding(config, "lightness", {
        min: 0,
        max: 100,
        step: 1,
        label: "lightness",
      });

      settings.addBinding(config, "blur", {
        min: 0,
        max: 20,
        step: 1,
        label: "input blur",
      });

      settings.addBinding(config, "displace", {
        min: 0,
        max: 12,
        step: 0.1,
        label: "output blur",
      });

      settings.addBinding(config, "x", {
        label: "channel x",
        options: CHANNEL_OPTIONS,
      });

      settings.addBinding(config, "y", {
        label: "channel y",
        options: CHANNEL_OPTIONS,
      });

      settings.addBinding(config, "blend", {
        options: BLEND_OPTIONS,
        label: "blend",
      });

      settings.addBinding(config, "scale", {
        min: -1000,
        max: 1000,
        step: 1,
        label: "scale",
      });

      // 色差控制
      const chromaticFolder = settings.addFolder({ title: "chromatic" });

      chromaticFolder.addBinding(config, "r", {
        min: -100,
        max: 100,
        step: 1,
        label: "red",
      });

      chromaticFolder.addBinding(config, "g", {
        min: -100,
        max: 100,
        step: 1,
        label: "green",
      });

      chromaticFolder.addBinding(config, "b", {
        min: -100,
        max: 100,
        step: 1,
        label: "blue",
      });

      // 设置拖拽功能
      Draggable.create(".effect", {
        type: "x,y",
      });

      // 监听变化事件
      ctrl.on("change", (event) =>
        onSync(config, event as unknown as TweakpaneEvent)
      );

      // 初始化更新
      onConfigUpdate(config);

      // 清理函数
      return () => {
        ctrl.dispose();
      };
    } catch (error) {
      console.error("Failed to initialize liquid glass effect:", error);
    }
  }, [onConfigUpdate, onSync, handlePresetChange]);
};
