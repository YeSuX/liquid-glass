import { useEffect, useRef, useState, useCallback } from "react";
import { Pane, TpChangeEvent } from "tweakpane";
import type { LiquidGlassConfig, PresetType } from "./types";
import {
  PRESETS,
  BLEND_MODE_OPTIONS,
  CHANNEL_OPTIONS,
  THEME_OPTIONS,
  PRESET_OPTIONS,
} from "./constants";

interface UseLiquidGlassConfigOptions {
  initialPreset?: PresetType;
  showControls?: boolean;
  onChange?: (value: TpChangeEvent<unknown>) => void;
}

export const useLiquidGlassConfig = (
  options: UseLiquidGlassConfigOptions = {}
) => {
  const {
    initialPreset = "pill",
    showControls = true,
    onChange = () => {},
  } = options;

  const [config, setConfig] = useState<LiquidGlassConfig>(
    () =>
      ({
        ...PRESETS[initialPreset],
        theme: "system",
        debug: false,
        top: false,
        preset: initialPreset,
      } as LiquidGlassConfig)
  );

  const paneRef = useRef<Pane | null>(null);

  const applyPreset = useCallback((presetName: PresetType) => {
    const presetConfig = PRESETS[presetName];
    if (presetConfig) {
      setConfig((prevConfig) => ({
        ...prevConfig,
        ...presetConfig,
        preset: presetName,
      }));
    }
  }, []);

  const updateConfig = useCallback((updates: Partial<LiquidGlassConfig>) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      ...updates,
    }));
  }, []);

  const initializeControlPanel = useCallback(() => {
    if (!showControls || paneRef.current) return;

    const pane = new Pane({
      title: "Liquid Glass Config",
      expanded: true,
    });

    // Basic controls
    pane.addBinding(config, "debug").on("change", (ev) => {
      updateConfig({ debug: ev.value });
    });

    pane.addBinding(config, "top").on("change", (ev) => {
      updateConfig({ top: ev.value });
    });

    // Preset selector
    pane
      .addBinding(config, "preset", {
        label: "mode",
        options: PRESET_OPTIONS,
      })
      .on("change", (ev) => {
        applyPreset(ev.value as PresetType);
      });

    // Theme selector
    pane
      .addBinding(config, "theme", {
        label: "theme",
        options: THEME_OPTIONS,
      })
      .on("change", (ev) => {
        updateConfig({ theme: ev.value as "system" | "light" | "dark" });
      });

    pane.on("change", onChange);

    // Settings folder
    const settings = pane.addFolder({
      title: "Settings",
      disabled: true,
      expanded: false,
    });

    // Basic settings
    settings
      .addBinding(config, "frost", {
        label: "frost",
        min: 0,
        max: 1,
        step: 0.01,
      })
      .on("change", (ev) => {
        updateConfig({ frost: ev.value });
      });

    settings
      .addBinding(config, "saturation", {
        min: 0,
        max: 2,
        step: 0.1,
      })
      .on("change", (ev) => {
        updateConfig({ saturation: ev.value });
      });

    settings.addBinding(config, "icons").on("change", (ev) => {
      updateConfig({ icons: ev.value });
    });

    // Dimensions
    settings
      .addBinding(config, "width", {
        min: 80,
        max: 500,
        step: 1,
        label: "width (px)",
      })
      .on("change", (ev) => {
        updateConfig({ width: ev.value });
      });

    settings
      .addBinding(config, "height", {
        min: 35,
        max: 500,
        step: 1,
        label: "height (px)",
      })
      .on("change", (ev) => {
        updateConfig({ height: ev.value });
      });

    settings
      .addBinding(config, "radius", {
        min: 0,
        max: 500,
        step: 1,
        label: "radius (px)",
      })
      .on("change", (ev) => {
        updateConfig({ radius: ev.value });
      });

    // Visual properties
    settings
      .addBinding(config, "border", {
        min: 0,
        max: 1,
        step: 0.01,
        label: "border",
      })
      .on("change", (ev) => {
        updateConfig({ border: ev.value });
      });

    settings
      .addBinding(config, "alpha", {
        min: 0,
        max: 1,
        step: 0.01,
        label: "alpha",
      })
      .on("change", (ev) => {
        updateConfig({ alpha: ev.value });
      });

    settings
      .addBinding(config, "lightness", {
        min: 0,
        max: 100,
        step: 1,
        label: "lightness",
      })
      .on("change", (ev) => {
        updateConfig({ lightness: ev.value });
      });

    // Blur settings
    settings
      .addBinding(config, "blur", {
        min: 0,
        max: 20,
        step: 1,
        label: "input blur",
      })
      .on("change", (ev) => {
        updateConfig({ blur: ev.value });
      });

    settings
      .addBinding(config, "displace", {
        min: 0,
        max: 12,
        step: 0.1,
        label: "output blur",
      })
      .on("change", (ev) => {
        updateConfig({ displace: ev.value });
      });

    // Channel settings
    settings
      .addBinding(config, "x", {
        label: "channel x",
        options: CHANNEL_OPTIONS,
      })
      .on("change", (ev) => {
        updateConfig({ x: ev.value });
      });

    settings
      .addBinding(config, "y", {
        label: "channel y",
        options: CHANNEL_OPTIONS,
      })
      .on("change", (ev) => {
        updateConfig({ y: ev.value });
      });

    // Blend mode
    settings
      .addBinding(config, "blend", {
        options: BLEND_MODE_OPTIONS,
        label: "blend",
      })
      .on("change", (ev) => {
        updateConfig({ blend: ev.value });
      });

    settings
      .addBinding(config, "scale", {
        min: -1000,
        max: 1000,
        step: 1,
        label: "scale",
      })
      .on("change", (ev) => {
        updateConfig({ scale: ev.value });
      });

    // Chromatic settings
    const chromatic = settings.addFolder({ title: "chromatic" });

    chromatic
      .addBinding(config, "r", {
        min: -100,
        max: 100,
        step: 1,
        label: "red",
      })
      .on("change", (ev) => {
        updateConfig({ r: ev.value });
      });

    chromatic
      .addBinding(config, "g", {
        min: -100,
        max: 100,
        step: 1,
        label: "green",
      })
      .on("change", (ev) => {
        updateConfig({ g: ev.value });
      });

    chromatic
      .addBinding(config, "b", {
        min: -100,
        max: 100,
        step: 1,
        label: "blue",
      })
      .on("change", (ev) => {
        updateConfig({ b: ev.value });
      });

    paneRef.current = pane;
  }, [config, showControls, applyPreset, updateConfig]);

  const destroyControlPanel = useCallback(() => {
    if (paneRef.current) {
      paneRef.current.dispose();
      paneRef.current = null;
    }
  }, []);

  useEffect(() => {
    initializeControlPanel();
    return destroyControlPanel;
  }, [initializeControlPanel, destroyControlPanel]);

  return {
    config,
    updateConfig,
    applyPreset,
    destroyControlPanel,
  };
};
