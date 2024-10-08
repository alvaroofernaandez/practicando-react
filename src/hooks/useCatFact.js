import { useEffect, useState } from "react"
import { getCatFact } from "../services/Facts"

export function useCatFact () {
  const [fact, setFact] = useState() 

  const refreshFact = () => {
    getCatFact().then(newFact => setFact(newFact))
  } 

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}