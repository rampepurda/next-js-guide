import { clearFormInputValue } from '../utils/clearFormInpValue'
/**
 * @param url link where the DATA will be POSTed
 * @param title Alert message includes: title
 * @param fetchDataResponse Take response from Server and send updated data
 * @function clearFormInputValue() set all inputs to value = ''
 */

export const usePostBook = (url: string, title: string, fetchDataResponse: Function) => {
  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const data: Record<string, () => void> = {
      author: event.target.author.value,
      title: event.target.title.value,
      price: event.target.price.value,
    }
    const option = {
      method: 'POST',
      headers: { 'Content-Type': 'application.json' },
      body: JSON.stringify({ ...data }),
    }

    try {
      const response = await fetch(url, option)
      if (response) {
        alert(`${title}`)
        clearFormInputValue()
        fetchDataResponse()
      }
    } catch (err) {
      alert(`${err}`)
    }
  }

  return {
    handleSubmit,
    fetchDataResponse,
  }
}
