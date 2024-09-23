import './App.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({fact}) 



  const handleClick = async () => {
    refreshFact()
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