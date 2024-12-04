import React, { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts'

import './App.css'

function useCatImage ({fact}) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if(!fact) return
    
    const words = fact
    const firstWord = words.split(' ')[0]
    setImageUrl(`https://cataas.com/cat/says/${firstWord}?width=300&height=300&fontSize=32&fontColor=white`)
  },[fact])
  return {imageUrl}
} 

//const CAT_ENDPOINT_RANDOM_IMAGE = `https://cataas.com/cat/says/${firstWord}?size=50&color-red&json=true`
function App () {
  const [fact, setFact] = useState()
  const {imageUrl} = useCatImage({fact})
  
  useEffect( () => {
    async function setRandomFact() {
      const newFact = await getRandomFact()
      setFact(newFact)
      }
    setRandomFact();
  }
  , [])

  

  const handleClick = async() => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main className='card'>
      <h1 className='title'>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p className='phrase'>{fact}</p>}
      {imageUrl && <img className='image' src={imageUrl} alt='image extracted by the first word'/>}
    </main> 
  )
}

export default App
