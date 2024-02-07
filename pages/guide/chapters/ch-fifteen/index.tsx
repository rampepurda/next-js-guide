import { NextPage } from 'next'
import { Modal } from '../../../../components'
import Head from 'next/head'
import { mCh15 } from '../../../../configuration'

const ChFifteen: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-15 | FocusTrap</title>
      </Head>

      <div>
        <h2>15. Focus Trap library</h2>
        <h4>
          <strong>Install:</strong> npm i focus-trap-react | yarn add focus-trap-react
        </h4>
        <a href="https://www.npmjs.com/package/focus-trap-react" rel="author">
          Focus Trap, read more
        </a>
        <div>
          <a
            href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/"
            rel="author"
          >
            Modal Window and Web Accessibility, read more
          </a>
        </div>
        <hr />

        <h4>
          Trap focus within a DOM node.
          <br />
          There may come a time when you find it important to trap focus within a DOM node — so that
          when a user hits Tab or Shift+Tab or clicks around, she can't escape a certain cycle of
          focusable elements.
          <br />
          You will definitely face this challenge when you are trying to build{' '}
          <strong>ACCESSIBLE MODALS</strong>.
        </h4>

        <ul className="hasTypeDisc">
          <li>
            Some element within the focus trap receives focus. By default, this will be the first
            element in the focus trap's tab order (as determined by tabbable). Alternately, you can
            specify an element that should receive this initial focus.
          </li>
          <li>
            The Tab and Shift+Tab keys will cycle through the focus trap's tabbable elements but
            will not leave the focus trap.
          </li>
          <li>
            Clicks within the focus trap behave normally; but clicks outside the focus trap are
            blocked.
          </li>
          <li>The Escape key will deactivate the focus trap.</li>
        </ul>
        <hr />

        <Modal
          openModalDialog={mCh15.openModalDialog}
          mHeader={mCh15.mHeader}
          mFooter={mCh15.mFooter}
        >
          <p>
            Modal window is a user experience pattern that is useful when you want to bring the
            user&apos;s attention to something important without leaving the current context/page.
          </p>
          <p>
            You might also learn more about the{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role">
              dialog
            </a>{' '}
            role.
          </p>
        </Modal>
      </div>
    </>
  )
}

export default ChFifteen
