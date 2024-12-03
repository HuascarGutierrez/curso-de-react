import React, { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_RANDOM_IMAGE = `https://cataas.com/cat/says/${firstWord}?size=50&color-red&json=true`
function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const firstWord = fact.split(' ')[0]
        setImageUrl(`https://cataas.com/cat/says/${firstWord}?width=200&height=200&fontSize=32&fontColor=white`)
      })
  }, [])

  return (
    <main className='card'>
      <h1 className='title'>App de gatitos</h1>
      {fact && <p className='phrase'>{fact}</p>}
      {imageUrl && <img className='image' src={imageUrl} alt='image extracted by the first word'/>}
    </main> 
  )
}

export default App
