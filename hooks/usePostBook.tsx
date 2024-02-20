import { clearFormInputValue } from '../utils/clearFormInpValue'
import { FormEvent } from 'react'

/**
 * @param url link where the DATA will be POSTed
 * @param title Alert message includes: title
 * @param fetchDataResponse Take response from Server and send updated data
 * @function clearFormInputValue() set all inputs to value = ''
 */

export const usePostBook = (url: string, title: string, fetchDataResponse: Function) => {
  const handleSubmitObject = async (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget)
    const formDataObject = Object.fromEntries(formData)
    const form = event.currentTarget
    const option = {
      method: 'POST',
      headers: { 'Content-Type': 'application.json' },
      body: JSON.stringify({ ...formDataObject }),
    }

    event.preventDefault()
    try {
      const response = await fetch(url, option)
      if (response) {
        alert(`${title}`)
        clearFormInputValue()
        fetchDataResponse()
        form.reset()
      }
    } catch (err) {
      alert(`${err}`)
    }
  }
  const handleSubmit = async (event: any) => {
    const data: Record<string, () => string | undefined> = {
      author: event.target.author.value,
      title: event.target.title.value,
      price: event.target.price.value,
    }
    const option = {
      method: 'POST',
      headers: { 'Content-Type': 'application.json' },
      body: JSON.stringify({ ...data }),
    }

    event.preventDefault()

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
    handleSubmitObject,
    fetchDataResponse,
  }
}
