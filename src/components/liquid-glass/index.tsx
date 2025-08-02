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
            {/* 创建位移映射效果-红色通道 */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="map"
              id="redchannel"
              xChannelSelector="R"
              yChannelSelector="G"
              result="dispRed"
            />
            {/* 颜色通道矩阵变换-红色通道 */}
            <feColorMatrix
              in="dispRed"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="red"
            />
            {/* 创建位移映射效果-绿色通道 */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="map"
              id="greenchannel"
              xChannelSelector="R"
              yChannelSelector="G"
              result="dispGreen"
            />
            {/* 颜色通道矩阵变换-绿色通道 */}
            <feColorMatrix
              in="dispGreen"
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="green"
            />
            {/* 创建位移映射效果-蓝色通道 */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="map"
              id="bluechannel"
              xChannelSelector="R"
              yChannelSelector="G"
              result="dispBlue"
            />
            {/* 颜色通道矩阵变换-蓝色通道 */}
            <feColorMatrix
              in="dispBlue"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="blue"
            />
            {/* 第一次混合-红绿通道 */}
            <feBlend in="red" in2="green" mode="screen" result="rg" />
            {/* 第二次混合-红绿蓝通道 */}
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            {/* 高斯模糊处理 */}
            <feGaussianBlur in="output" stdDeviation="0.7" />
          </filter>
        </defs>
      </svg>

      {/* 移位图调试 */}
      <div className="displacement-debug"></div>
    </div>
  );
}

export default LiquidGlass;
