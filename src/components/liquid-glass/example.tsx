import React from "react";
import LiquidGlass from "./index";

/**
 * LiquidGlass组件使用示例
 * 展示如何通过props配置液体玻璃效果
 */
export const LiquidGlassExample = () => {
  return (
    <div>
      {/* 基础使用 - 使用默认配置 */}
      <div style={{ marginBottom: "20px" }}>
        <h3>基础使用（默认配置）</h3>
        <LiquidGlass>
          <div style={{ padding: "20px", background: "rgba(255,255,255,0.1)" }}>
            默认配置的液体玻璃效果
          </div>
        </LiquidGlass>
      </div>

      {/* 自定义配置使用 */}
      <div style={{ marginBottom: "20px" }}>
        <h3>自定义配置</h3>
        <LiquidGlass
          width={200}
          height={120}
          radius={20}
          alpha={0.8}
          theme="dark"
          preset="pill"
          saturation={1.5}
          frost={0.1}
        >
          <div style={{ padding: "20px", background: "rgba(255,255,255,0.1)" }}>
            自定义配置的液体玻璃效果
          </div>
        </LiquidGlass>
      </div>

      {/* 启用调试面板 */}
      <div style={{ marginBottom: "20px" }}>
        <h3>启用调试面板</h3>
        <LiquidGlass
          enableTweakpane={true}
          debug={true}
          width={300}
          height={150}
          radius={30}
          blend="overlay"
          scale={-200}
        >
          <div style={{ padding: "20px", background: "rgba(255,255,255,0.1)" }}>
            带调试面板的液体玻璃效果
          </div>
        </LiquidGlass>
      </div>

      {/* 高级配置示例 */}
      <div style={{ marginBottom: "20px" }}>
        <h3>高级配置</h3>
        <LiquidGlass
          preset="free"
          width={250}
          height={200}
          radius={40}
          border={0.1}
          alpha={0.9}
          lightness={70}
          blur={5}
          displace={1.5}
          frost={0.2}
          saturation={1.2}
          scale={-300}
          blend="difference"
          x="R"
          y="B"
          r={5}
          g={10}
          b={15}
          icons={true}
          theme="system"
        >
          <div style={{ padding: "30px", background: "rgba(255,255,255,0.1)" }}>
            完全自定义的液体玻璃效果
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
};

/**
 * 动态配置示例 - 展示如何通过状态动态改变配置
 */
export const DynamicLiquidGlassExample = () => {
  const [config, setConfig] = React.useState({
    width: 200,
    height: 100,
    radius: 20,
    alpha: 0.8,
    theme: "light" as const,
  });

  const handleConfigChange = (key: string, value: any) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <h3>动态配置示例</h3>

      {/* 配置控制器 */}
      <div
        style={{
          marginBottom: "20px",
          padding: "20px",
          border: "1px solid #ccc",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label>
            宽度:
            <input
              type="range"
              min="100"
              max="400"
              value={config.width}
              onChange={(e) =>
                handleConfigChange("width", Number(e.target.value))
              }
            />
            {config.width}px
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            高度:
            <input
              type="range"
              min="50"
              max="300"
              value={config.height}
              onChange={(e) =>
                handleConfigChange("height", Number(e.target.value))
              }
            />
            {config.height}px
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            圆角:
            <input
              type="range"
              min="0"
              max="50"
              value={config.radius}
              onChange={(e) =>
                handleConfigChange("radius", Number(e.target.value))
              }
            />
            {config.radius}px
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            透明度:
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={config.alpha}
              onChange={(e) =>
                handleConfigChange("alpha", Number(e.target.value))
              }
            />
            {config.alpha}
          </label>
        </div>
      </div>
    </div>
  );
};

export default LiquidGlassExample;
