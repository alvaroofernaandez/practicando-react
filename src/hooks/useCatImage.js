import { useEffect, useState } from "react"

const CAT_PREFIX_IMAGEURL = 'https://cataas.com'

export function useCatImage ( {fact} ) {
  const [imageUrl, setImageUrl] = useState()

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

  return { imageUrl }

}