const ENDPOINT_CAT_FACT = 'https://catfact.ninja/fact'

export const getCatFact = async () => {
  const res = await fetch(ENDPOINT_CAT_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}