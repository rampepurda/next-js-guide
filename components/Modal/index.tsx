import style from './Modal.module.scss'

import { PropsWithChildren, useCallback, useState } from 'react'
import FocusTrap from 'focus-trap-react'
import classNames from "classnames"
import useTranslation from "next-translate/useTranslation"

/**
 * FocusTrap library in use as an Example how to create Modal Window
 * INSTALLATION below:
 * https://www.npmjs.com/package/focus-trap-react
 *
 * ModalContent part includes mapping to build more than on BTNs
 * @param btnValue includes at the moment: label and conditionValue and there is more than possible that new one will be created
 */
type btnValues = {
  label: string
  conditionValue?: string
}

type Props = {
  title: string,
  labels: btnValues[]
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
                      if(item.conditionValue === 'Close') {
                        setIsModalOpen(false)}
                      }
                      // Possible more Condition will be here
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
  )
}
