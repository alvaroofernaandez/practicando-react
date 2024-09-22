import { useEffect, useState } from "react"
const ENPOINT_CAT_FACT = 'https://catfact.ninja/fact'
// const ENPOINT_CAT_IMAGE = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red?json=true`

export function App (){
  const [fact, setFact] = useState() 

  useEffect(() => { // A la hora de escribir el useEffect es buena práctica comenzar escribiendo el array vacío seguido de la función
    fetch(ENPOINT_CAT_FACT) // -> promesa
    .then(res => res.json()) // -> respuesta transformando a json
    .then(data => {
      const { fact } = data
      setFact(fact)
    })
  }, [])

  return (
    <main>
      <h1>Aplicación de gatos</h1>
      { fact && <p>{fact}</p>}
    </main>

  )
}