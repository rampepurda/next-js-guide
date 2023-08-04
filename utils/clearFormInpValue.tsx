export const clearFormInputValue = () => {
  let inputAll = document.querySelectorAll<HTMLInputElement>('input')
  return inputAll.forEach((input) => {
    input.value = ''
  })
}
