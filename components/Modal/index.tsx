import style from './Modal.module.scss'

import { PropsWithChildren, useCallback, useState } from 'react'
import FocusTrap from 'focus-trap-react'
import classNames from "classnames"
import useTranslation from "next-translate/useTranslation"
import { mInfo } from "../../configuration"

/**
 * FocusTrap library
 * INSTALLATION below:
 * https://www.npmjs.com/package/focus-trap-react
 */
type btnLabel = {
  label: string
}

type Props = {
  title: string,
  labels: btnLabel[]
}


export const Modal = ({title, labels, children}: PropsWithChildren<Props>) => {
  const { t } = useTranslation('common')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const domAddClass = useCallback(() => {
    if(!isModalOpen) {
      return document.body.classList.add(`${style.modalOpen}`)
    }
  }, [isModalOpen])
  const domRemoveClass = useCallback(() => {
    if(isModalOpen) {
      return document.body.classList.remove("modal-open")
    }
  }, [isModalOpen])

  return (
    <>
      <button
        className='btn btn-submit'
        type="button"
        onClick={() => {
          setIsModalOpen(true)
        }}
      >
        Open accessible modal window
      </button>

      <div
        className={classNames(style.modalDialog, isModalOpen ? style.modalDialog__isOpen : '')}
        hidden={!isModalOpen}
      >
        <FocusTrap
          active={isModalOpen}
          focusTrapOptions={{
            onDeactivate: () => {
              setIsModalOpen(false)
              //domRemoveClass()
            },
            clickOutsideDeactivates: true,
          }}
        >
          <div
            className={style.modalContent}
            aria-labelledby="modal-2-heading"
            role="dialog"
          >
            <div className={style.modalHeader}>
              <h2 id="modal-2-heading">{title}</h2>
              <button
                className={style.modalHeader__closeBtn}
                type="button"
                aria-label= {t('modal.close')}
                onClick={() => {setIsModalOpen(false)}}
              >
                X
              </button>
            </div>
            <div className='modalBody'>
              {children}
              <hr />
            </div>
            <div className={style.modalFooter}>
              {labels.map((item, idx: number) => {
                return (
                  <button
                    className='btn btn-primary'
                    key={idx}
                    type="button"
                    aria-label= {t(`${item.label}`)}
                    onClick={() => {
                      if(item.label === 'Close') {
                        setIsModalOpen(false)}
                      }
                    }
                  >
                    {t(`${item.label}`)}
                  </button>
                )
              })}
            </div>
          </div>
        </FocusTrap>
      </div>
    </>
  );
}
