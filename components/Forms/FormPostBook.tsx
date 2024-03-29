import { Input } from '../Input'
import useTranslation from 'next-translate/useTranslation'
import { FormEvent } from 'react'

/**
 * @CompName: FormAddBook is only for testing purpose. This project does not contain any books components.
 */
type Props = {
  OnSubmit: (ev: FormEvent<HTMLFormElement>) => void
}

export const FormPostBook = ({ OnSubmit }: Props) => {
  const { t } = useTranslation('forms')

  return (
    <>
      <h3>{t('formTitle')}</h3>
      <form className="width-is-4" name="addBook" onSubmit={OnSubmit}>
        <label htmlFor="author">{t('author')}</label>
        <Input
          id={'author'}
          ClassName={'width-is-12'}
          rest={{ type: 'text', maxLength: '80' }}
          ariaLabel={t('author')}
          Name={'author'}
          isRequired={true}
        />

        <label htmlFor="title">{t('title')}</label>
        <Input
          id={'title'}
          ClassName={'width-is-12'}
          rest={{ type: 'text', maxLength: '180' }}
          ariaLabel={t('title')}
          Name={'title'}
          isRequired={true}
        />
        <label htmlFor="price">
          {t('price')} / <strong>{t('currency.cz')}</strong>
        </label>
        <Input
          id={'price'}
          ClassName={'width-is-12'}
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
