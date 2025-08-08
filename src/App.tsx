import LiquidGlass from "./components/liquid-glass";

function App() {
  return (
    <div>
      {/* 效果展示 */}
      <LiquidGlass enableTweakpane={false} />
      <article
        className="article"
        style={{
          marginTop: 20,
          width: 800,
          display: "flex",
          flexDirection: "column",
        }}
        id="article"
      >
        <h1>
          How do address formats differ around the world, and what are the
          implications of those differences on the design of forms, databases,
          ontologies, etc. for the Web?
        </h1>
        <p>
          Address formats vary widely across the globe, with differences in
          structure, content, and the level of granularity. For authors and
          developers designing forms, databases, or systems that handle
          addresses, understanding these variations is crucial to avoid
          frustrating users from other countries. This article will introduce
          some of the key differences in address formats around the world and
          provide guidance on how to design systems that can handle them
          effectively.
        </p>
        <p>
          This is not an exhaustive guide but aims to sensitize you to the
          complexities of international address formats and the challenges they
          pose for web design. As with personal names, there is no one specific
          "perfect" solution, but awareness of these differences is the first
          step toward building more inclusive systems.
        </p>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1706720094773-d91e070e4b90?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Photo by Neeqolah Creative Works on Unsplash"
            width={400}
          />
        </figure>
      </article>
    </div>
  );
}

export default App;
