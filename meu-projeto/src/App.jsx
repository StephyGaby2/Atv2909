import HoldButton from './components/HoldButton/HoldButton';

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

<HoldButton
  doneLabel="Deleted"
  backgroundColor="#27272a"
  fillColor="#5227FF"
  textColor="#f5f5f5"
  fillTextColor="#ffffff"
  size="md"
  radius={14}
  fillDirection="right"
  holdTime={2000}
  releaseTime={200}
  pressScale={0.97}
  wave
  waveAmplitude={6}
  glow
  resetAfter={1200}
  onHold={() => console.log('confirmed')}
>
  Hold to delete
</HoldButton>
</div>
)
}
export default App