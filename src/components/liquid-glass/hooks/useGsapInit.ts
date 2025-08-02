import { useEffect } from 'react';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';

/**
 * GSAP初始化hook
 */
export const useGsapInit = () => {
  useEffect(() => {
    gsap.registerPlugin(Draggable);
  }, []);
};