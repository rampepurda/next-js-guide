export async function fetchURL(url: string) {
  const res = await fetch(url)
  return res.json()
}
