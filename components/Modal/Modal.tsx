import style from './Modal.module.scss'

/**
 * FocusTrap library used as an Example how is possible to create Modal Window
 * INSTALLATION below:
 * https://www.npmjs.com/package/focus-trap-react
 *
 * ModalContent part includes mapping to build more than on BTNs
 * @param title Modal Window Headline
 * @param btnProps includes at the moment: 'title' and 'conditionValue' and there is more than possible that new one will be created
 */

import { PropsWithChildren, useState } from 'react'
import FocusTrap from 'focus-trap-react'
import classNames from 'classnames'
import useTranslation from 'next-translate/useTranslation'

enum mFooterBtnValue {
  close = 'Close',
  submit = 'Submit',
}

type Props = {
  openModalDialog: {
    title: string
    className?: string
  }
  mHeader: {
    title: string
  }
  mFooter: {
    conditionValue?: string
    title: string
  }[]
}

export const Modal = ({
  openModalDialog,
  mFooter,
  mHeader,
  children,
}: PropsWithChildren<Props>) => {
  const { t } = useTranslation('common')
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        className={classNames('btn', `${openModalDialog.className}`)}
        type="button"
        onClick={() => {
          setIsModalOpen(true)
        }}
      >
        {openModalDialog.title}
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
            role="dialog"
            aria-labelledby="modal-2-heading"
            aria-modal={true}
          >
            <div className={style.modalHeader}>
              <h2 id="modal-2-heading">{mHeader.title}</h2>
              <button
                className={style.modalHeader__closeBtn}
                type="button"
                aria-label={t('close modal window')}
                onClick={() => {
                  setIsModalOpen(false)
                }}
              >
                X
              </button>
            </div>
            <div className="modalBody">
              {children}
              <hr />
            </div>
            <div className={style.modalFooter}>
              {mFooter.map((item, idx: number) => {
                return (
                  <button
                    className={classNames('btn', {
                      ['btn-submit']: item.conditionValue === 'Submit',
                      ['btn-primary']: item.conditionValue === 'Close',
                    })}
                    key={idx}
                    type="button"
                    aria-label={t(`${item.title}`)}
                    onClick={() => {
                      if (item.conditionValue === mFooterBtnValue.close) {
                        setIsModalOpen(false)
                      }
                    }}
                  >
                    {t(`${item.title}`)}
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
