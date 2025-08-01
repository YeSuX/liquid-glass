import LiquidGlass from "./components/liquid-glass/index.js";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import OldGlass from "./old-component/index.jsx";

function App() {
  return (
    <div>
      <OldGlass />
      <LiquidGlass>123</LiquidGlass>
    </div>
  );
}

export default App;
