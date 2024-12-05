import React, { useEffect, useState } from 'react'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

import './App.css'
import Otros from './components/Otros'

//const CAT_ENDPOINT_RANDOM_IMAGE = `https://cataas.com/cat/says/${firstWord}?size=50&color-red&json=true`
function App () {
  const {fact, refreshFact} = useCatFact()
  const {imageUrl} = useCatImage({fact})
  
  useEffect(refreshFact, [])

  

  const handleClick = async() => {
    await refreshFact()
  }

  return (
    <main className='card'>
      <h1 className='title'>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p className='phrase'>{fact}</p>}
      {imageUrl && <img className='image' src={imageUrl} alt='image extracted by the first word'/>}
      <Otros/>
    </main> 
  )
}

export default App
