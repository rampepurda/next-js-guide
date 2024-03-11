export async function getData(url: string) {
  const res = await fetch(url)
  return res.json()
}
export async function getDynamicData(url: string, param: unknown) {
  const res = await fetch(`${url}/${param}`)
  return res.json()
}
