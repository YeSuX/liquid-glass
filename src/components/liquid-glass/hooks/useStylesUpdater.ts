import { useCallback } from "react";
import gsap from "gsap";
import { Config } from "../types";

/**
 * 样式和滤镜更新hook
 */
export const useStylesUpdater = () => {
  const updateStyles = useCallback((config: Config) => {
    // 更新 CSS 变量
    gsap.set(document.documentElement, {
      "--width": config.width,
      "--height": config.height,
      "--radius": config.radius,
      "--frost": config.frost,
      "--output-blur": config.displace,
      "--saturation": config.saturation,
    });

    // 更新滤镜参数
    gsap.set("feDisplacementMap", { attr: { scale: config.scale } });
    gsap.set("#redchannel", { attr: { scale: config.scale + config.r } });
    gsap.set("#greenchannel", { attr: { scale: config.scale + config.g } });
    gsap.set("#bluechannel", { attr: { scale: config.scale + config.b } });
    gsap.set("feGaussianBlur", { attr: { stdDeviation: config.displace } });

    // 更新数据属性
    const { documentElement } = document;
    documentElement.dataset.icons = String(config.icons);
    documentElement.dataset.mode = config.preset;
    documentElement.dataset.top = String(config.top);
    documentElement.dataset.debug = String(config.debug);
    documentElement.dataset.theme = config.theme;
  }, []);

  return { updateStyles };
};
