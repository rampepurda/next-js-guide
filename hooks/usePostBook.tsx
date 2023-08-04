/**
 * @url link where the DATA will be POSTed
 * @function clearFormInpValue() set all input to value = ''
 */
import { clearFormInputValue } from '../utils/clearFormInpValue'

export const usePostBook = (url: string) => {
  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const data: Record<string, () => void> = {
      author: event.target.author.value,
      title: event.target.title.value,
      price: event.target.price.value,
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application.json' },
        body: JSON.stringify({ ...data }),
      })
      if (response) {
        alert('Account was created')
        clearFormInputValue()
      }
    } catch (err) {
      alert(`${err}`)
    }
  }

  return {
    handleSubmit,
  }
}
