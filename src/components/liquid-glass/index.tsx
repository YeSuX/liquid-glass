import React, { useEffect } from "react";
import "./index.css";
import gsap from "gsap";

interface LiquidGlassProps {
  children: React.ReactNode;
}

function LiquidGlass({ children }: LiquidGlassProps) {
  const svgNode = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const serialized = new XMLSerializer().serializeToString(svgNode);
  const encoded = encodeURIComponent(serialized);
  const dataUri = `data:image/svg+xml,${encoded}`;
  useEffect(() => {
    gsap.set("feImage", {
      attr: {
        href: dataUri,
      },
    });
  }, []);
  return (
    <div className="effect">
      <div className="child-wrap">{children}</div>
      <svg className="filter" xmlns="http://www.w3.org/2000/svg">
        {/* 容器元素 */}
        <defs>
          {/* 滤镜元素 */}
          <filter id="filter" colorInterpolationFilters="sRGB">
            {/* 引入位移映射图像 */}
            <feImage
              x="0"
              y="0"
              width="100%"
              height="100%"
              result="map"
            ></feImage>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default LiquidGlass;
