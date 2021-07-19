import styles from './styles.module.css'
import {useState} from 'react'
import {CursorPositionDisplay, DummyBox} from './nsa'

function App() {
  const [cursorPosition, setCursorPosition] = useState({x:0, y:0})

  function handleMouseMove(e){
    setCursorPosition({x:e.clientX, y: e.clientY})
  }

  return (
    <div className={styles.App} onMouseMove={e => handleMouseMove(e)}>
      <DummyBox x={cursorPosition.x} y={cursorPosition.y}/>
      <DummyBox x={cursorPosition.x} y={cursorPosition.y}/>
      <DummyBox x={cursorPosition.x} y={cursorPosition.y}/>
      <DummyBox x={cursorPosition.x} y={cursorPosition.y}/>
      <DummyBox x={cursorPosition.x} y={cursorPosition.y}/>
      <DummyBox x={cursorPosition.x} y={cursorPosition.y}/>
      <DummyBox x={cursorPosition.x} y={cursorPosition.y}/>
      <DummyBox x={cursorPosition.x} y={cursorPosition.y}/>
      <DummyBox x={cursorPosition.x} y={cursorPosition.y}/>
      <DummyBox x={cursorPosition.x} y={cursorPosition.y}/>

    </div>
  );
}

export default App;
