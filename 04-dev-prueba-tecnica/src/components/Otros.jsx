import React from 'react'
import { useCatImage } from '../hooks/useCatImage'

function Otros() {
  const {imageUrl} = useCatImage({fact: 'fun fact'})

  return (
    <>
        <img src={imageUrl}/>
    </>
  )
}

export default Otros