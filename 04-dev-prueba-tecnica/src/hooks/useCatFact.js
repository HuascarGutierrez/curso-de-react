import { useState } from "react"
import { getRandomFact } from "../services/facts"

export const useCatFact = () => {
    const [fact, setFact] = useState()
  
    const refreshFact = () => {
      async function setRandomFact() {
        const newFact = await getRandomFact()
        setFact(newFact)
        }
      setRandomFact();
    }
  
    return {fact, refreshFact}
  }