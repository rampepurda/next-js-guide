import { Input } from '../UI'
import useTranslation from 'next-translate/useTranslation'
import { FormEvent, PropsWithChildren } from 'react'

/**
 * @CompName: FormAddBook is only for testing purpose. This project does not contain any books components.
 */
type Props = {
  title?: string
  OnSubmit: (ev: FormEvent<HTMLFormElement>) => void
}

export const FormPostBook = ({ OnSubmit, title, children }: PropsWithChildren<Props>) => {
  const { t } = useTranslation('forms')

  return (
    <>
      <h3>{title}</h3>
      <form name="addBook" onSubmit={OnSubmit}>
        <label htmlFor="author">{t('author')}</label>
        <Input
          id="author"
          rest={{ type: 'text', maxLength: '80' }}
          ariaLabel={t('author')}
          Name={'author'}
          isRequired={true}
        />

        <label htmlFor="title">{t('title')}</label>
        <Input
          id="title"
          rest={{ type: 'text', maxLength: '180' }}
          ariaLabel={t('title')}
          Name={'title'}
          isRequired={true}
        />
        <label htmlFor="price">
          {t('price')} / <strong>{t('currency.cz')}</strong>
        </label>
        <Input
          id="price"
          rest={{ type: 'number', min: '50' }}
          Name={'price'}
          ariaLabel={t('price')}
        />

        <div>
          <button className="btn btn-submit" type="submit">
            {t('submit')}
          </button>
        </div>
      </form>
    </>
  )
}
