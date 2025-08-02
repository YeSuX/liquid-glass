/**
 * SVG滤镜组件
 */
export const SVGFilter = () => {
  return (
    <svg className="filter" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="filter" colorInterpolationFilters="sRGB">
          <feImage x="0" y="0" width="100%" height="100%" result="map" />

          {/* Red channel displacement */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="map"
            id="redchannel"
            xChannelSelector="R"
            yChannelSelector="G"
            result="dispRed"
          />
          <feColorMatrix
            in="dispRed"
            type="matrix"
            values="1 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 1 0"
            result="red"
          />

          {/* Green channel displacement */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="map"
            id="greenchannel"
            xChannelSelector="R"
            yChannelSelector="G"
            result="dispGreen"
          />
          <feColorMatrix
            in="dispGreen"
            type="matrix"
            values="0 0 0 0 0
                    0 1 0 0 0
                    0 0 0 0 0
                    0 0 0 1 0"
            result="green"
          />

          {/* Blue channel displacement */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="map"
            id="bluechannel"
            xChannelSelector="R"
            yChannelSelector="G"
            result="dispBlue"
          />
          <feColorMatrix
            in="dispBlue"
            type="matrix"
            values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 1 0 0
                    0 0 0 1 0"
            result="blue"
          />

          {/* Blend channels */}
          <feBlend in="red" in2="green" mode="screen" result="rg" />
          <feBlend in="rg" in2="blue" mode="screen" result="output" />

          {/* Final blur */}
          <feGaussianBlur in="output" stdDeviation="0.7" />
        </filter>
      </defs>
    </svg>
  );
};