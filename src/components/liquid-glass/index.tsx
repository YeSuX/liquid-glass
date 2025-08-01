import React from "react";

interface LiquidGlassProps {
  children: React.ReactNode;
}

function LiquidGlass({ children }: LiquidGlassProps) {
  return <div>{children}</div>;
}

export default LiquidGlass;
