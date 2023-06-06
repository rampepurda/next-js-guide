import React, { useState } from "react"
import { NextPage } from "next"
import { Navigation } from "../../../../components"
import Head from "next/head"
import { navigationGuideLinks, mInfo } from "../../../../configuration"
import { useCallback } from "react"
import { Modal } from "../../../../components/Modal"

const ChFifteen: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const isModalActive = useCallback(() => {
    if(!isModalOpen) {
      return document.body.classList.add("modal-open")
    }
    return document.body.classList.remove("modal-open")
  }, [isModalOpen])

  // @ts-ignore
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-15 | FocusTrap</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <Navigation links={navigationGuideLinks}/>
        </div>

        <div className='col-9'>
          <h2>15. Focus Trap library</h2>
          <h4><strong>Install:</strong> npm i focus-trap-react | yarn add focus-trap-react</h4>
          <a
            href='https://www.npmjs.com/package/focus-trap-react'
            rel='author'
          >
            Focus Trap, read more
          </a>
          <hr />
          <h4>
            Trap focus within a DOM node.
            <br />
            There may come a time when you find it important to trap focus within a DOM node — so that when a user hits Tab or Shift+Tab or clicks around, she can't escape a certain cycle of focusable elements.
            <br />
            You will definitely face this challenge when you are trying to build <strong>ACCESSIBLE MODALS</strong>.
          </h4>

          <ul className='hasTypeDisc'>
            <li>Some element within the focus trap receives focus. By default, this will be the first element in the focus trap's tab order (as determined by tabbable). Alternately, you can specify an element that should receive this initial focus.</li>
            <li>The Tab and Shift+Tab keys will cycle through the focus trap's tabbable elements but will not leave the focus trap.</li>
            <li>Clicks within the focus trap behave normally; but clicks outside the focus trap are blocked.</li>
            <li>The Escape key will deactivate the focus trap.</li>
          </ul>
          <hr />

          <Modal
            title={'Example of Focus Trap library'}
            labels={mInfo}>
            <p>Modal window is a user experience pattern that is useful when you want to bring the user&apos;s attention to something important without leaving the current context/page.</p>
            <p>You might also learn more about the <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role">dialog</a> role.</p>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default ChFifteen

