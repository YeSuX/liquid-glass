import { useCallback } from "react";
import gsap from "gsap";
import type { Config } from "../types";

/**
 * 位移图像构建hook
 */
export const useDisplacementImage = () => {
  const buildDisplacementImage = useCallback((config: Config) => {
    const debugPen = document.querySelector(".displacement-debug");
    if (!debugPen) return;

    const border =
      Math.min(config.width, config.height) * (config.border * 0.5);

    const svgContent = `
      <svg class="displacement-image" viewBox="0 0 ${config.width} ${
      config.height
    }" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="red" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="blue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${config.width}" height="${
      config.height
    }" fill="black"></rect>
        <rect x="0" y="0" width="${config.width}" height="${
      config.height
    }" rx="${config.radius}" fill="url(#red)" />
        <rect x="0" y="0" width="${config.width}" height="${
      config.height
    }" rx="${config.radius}" fill="url(#blue)" style="mix-blend-mode: ${
      config.blend
    }" />
        <rect x="${border}" y="${border}" width="${
      config.width - border * 2
    }" height="${config.height - border * 2}" rx="${
      config.radius
    }" fill="hsl(0 0% ${config.lightness}% / ${
      config.alpha
    }" style="filter:blur(${config.blur}px)" />
      </svg>
    `;

    debugPen.innerHTML = svgContent;

    // 更新 SVG 滤镜
    const svgEl = debugPen.querySelector(".displacement-image");
    if (svgEl) {
      const serialized = new XMLSerializer().serializeToString(svgEl);
      const encoded = encodeURIComponent(serialized);
      const dataUri = `data:image/svg+xml,${encoded}`;

      gsap.set("feImage", { attr: { href: dataUri } });
      gsap.set("feDisplacementMap", {
        attr: {
          xChannelSelector: config.x,
          yChannelSelector: config.y,
        },
      });
    }
  }, []);

  return { buildDisplacementImage };
};
