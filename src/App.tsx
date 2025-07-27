import { Vaso } from '../components/Vaso'

function App() {
  return <div>
    <Vaso
      component="span"
      px={36}
      py={8}
      radius={12 * 4}
      depth={Math.max(1.1, 1.1)}
      blur={0.25}
      dispersion={0.3 * 1.2}
    >
      <span>{'Vaso'}</span>
    </Vaso>
  </div>
}

export default App
