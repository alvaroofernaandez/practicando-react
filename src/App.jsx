import { useEffect, useState } from "react"
import './App.css'

const ENDPOINT_CAT_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGEURL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState() 
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => { // A la hora de escribir el useEffect es buena práctica comenzar escribiendo el array vacío seguido de la función
    fetch(ENDPOINT_CAT_FACT) // -> promesa
      .then(res => res.json()) // -> respuesta transformando a json
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return
    
    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })

      const imageUrl = `${CAT_PREFIX_IMAGEURL}/cat/says/${threeFirstWords}?size=50&fontColor=white`
      setImageUrl(imageUrl)
  }, [fact])

  const handleClick = () => {
    fetch(ENDPOINT_CAT_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }

  return (
    <main>
      <h1>Facts Cats 😸</h1>

      <button onClick={handleClick}>
        A new cat fact
      </button>

      { fact && <p>{fact}</p>}
      { imageUrl && <img src={imageUrl} alt={`Imagen de gato con las palabras: ${fact?.split(' ', 3).join(' ')}`} />}
    </main>

  )
}