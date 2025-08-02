import LiquidGlass from "./components/liquid-glass/index.js";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import OldGlass from "./old-component/index.jsx";

function App() {
  return (
    <div>
      {/* <OldGlass /> */}
      <LiquidGlass>
        <div style={{ width: "300px", height: "300px" }}>123</div>
      </LiquidGlass>
      <img
        style={{ width: "100%", height: "100%" }}
        src="https://fastly.picsum.photos/id/546/300/300.jpg?hmac=f8E2wXr3kthnt3BT6h17Y5Baf_0aJUdPIV7GqBVgxzY"
        alt=""
      />
    </div>
  );
}

export default App;
