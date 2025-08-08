import { useEffect } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

/**
 * GSAP初始化hook
 */
export const useGsapInit = ({ draggable }: { draggable: boolean }) => {
  useEffect(() => {
    if (draggable) {
      gsap.registerPlugin(Draggable);
      // 设置拖拽功能
      Draggable.create(".effect", {
        type: "x,y",
      });
    }
  }, []);
};
