import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Button } from '../UI'

type Props = {
  title?: string
}
type LocStorage = string | null

export const TermsCondition = ({ title }: Props) => {
  const key: LocStorage = 'CookiesAreAccepted'
  const data: LocStorage = window.localStorage.getItem(key)
  const [isAccept, setIsAccept] = useState<boolean>(false)

  useEffect(() => {
    const data: LocStorage = window.localStorage.getItem(key)
    if (data !== null && data === 'true') {
      setIsAccept(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(isAccept))
  }, [isAccept, data])

  return (
    <>
      {!isAccept && (
        <div className={classNames('hasOutline', data !== null && data === 'true' && 'isHidden')}>
          <h4>You must agree with all my Terms and Condition</h4>
          <Button
            ClassName={classNames('btn-primary')}
            OnClick={(ev) => setIsAccept(true)}
            title={title}
            rest={{ type: 'button' }}
          />
        </div>
      )}
    </>
  )
}
