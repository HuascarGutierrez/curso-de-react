import { useState, useEffect } from "react"

export function useCatImage ({fact}) {
    const [imageUrl, setImageUrl] = useState()
  
    useEffect(() => {
      if(!fact) return
      
      const words = fact
      const firstWord = words.split(' ')[0]
      setImageUrl(`https://cataas.com/cat/says/${firstWord}?width=300&height=300&fontSize=32&fontColor=white`)
    },[fact])
    return {imageUrl}
  } 