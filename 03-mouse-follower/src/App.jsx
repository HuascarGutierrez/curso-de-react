import {useEffect, useState} from 'react'
import './App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0,y:0})
  useEffect(
    () => {
      //const enabledVar = enabled
      //console.log('El efecto '+enabledVar)
      const handleMove = (event) => {
        const {clientX, clientY} = event
        setPosition({x:clientX, y:clientY})
      }
      if(enabled)
      {
      window.addEventListener('pointermove', handleMove)
      }

      return () => {
        window.removeEventListener('pointermove', handleMove)
      } 
    }, [enabled])

  return (
    <>
    <div style={{
      position: 'absolute',
      backgroundColor: '#09f',
      borderRadius: '50%',
      opacity: 0.8,
      pointerEvents: 'none',
      left: -20,
      tip: -20,
      width: 40,
      height: 40,
      transform: `translate(${position.x}px,${position.y}px)`
    }}/>
    <h3>Proyecto 3</h3>
    <button onClick= { ()=> {setEnabled(!enabled)}}>{!enabled? 'Activar':'Desactivar'} puntero</button>
    </>
  )
}

function App() {
  

  return (
    <main>
      <FollowMouse/>
    </main>
  )
}

export default App
