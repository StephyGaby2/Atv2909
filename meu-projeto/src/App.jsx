import GooeyNav from './components/GooeyNav/GooeyNav'

const items = [
  { label: "Casa", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

function App() {
return (
<div style={{
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
height: '100vh'
}}>

<div style={{ height: '600px', position: 'relative' }}>
  <GooeyNav
    items={items}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    initialActiveIndex={0}
    animationTime={600}
    timeVariance={300}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
  />
</div>
</div>
)
}
export default App