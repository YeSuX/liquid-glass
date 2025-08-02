import { useEffect } from 'react';
import gsap from 'gsap';

/**
 * 效果元素定位hook
 */
export const useEffectPositioning = () => {
  useEffect(() => {
    // 定位效果元素
    const dockPlaceholder = document.querySelector(".dock-placeholder");
    if (dockPlaceholder) {
      const { top, left } = dockPlaceholder.getBoundingClientRect();
      gsap.set(".effect", {
        top: top > window.innerHeight ? window.innerHeight * 0.5 : top,
        left,
        opacity: 1,
      });
    }
  }, []);
};