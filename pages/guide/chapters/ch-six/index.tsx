import style from '../../chapters.module.scss'

import useTranslation from "next-translate/useTranslation"
import { useAppSelector } from "../../../../store/hooks"
import Trans from "next-translate/Trans"
import Head from "next/head"
import { Navigation } from "../../../../components"
import { navigationGuideLinks } from "../../../../configuration"
import { NextPage } from "next"
import Image from "next/image"
import i18n from '../../../../public/images/ch-six/i18n.png'
import i18Trans from '../../../../public/images/ch-six/i18Trans.png'

const ChSix: NextPage = () => {
  const { amount } = useAppSelector((state) => state.Photos)
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-six</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <Navigation links={navigationGuideLinks}/>
        </div>

        <div className='col-9'>
          <div>
            <h2>6. next-translate: how to install and use</h2>
            <a
              href='https://www.npmjs.com/package/next-translate?activeTab=readme'
              target='_blank'
              rel='noreferrer'
            >
              next-translate read more
            </a>
            <hr />

            <h3>1. How to Install next-translate</h3>
            <strong>yarn add next-translate</strong>
            <h3>2. create: i18n.js</h3>
            <Image
              src={i18n}
              layout='fixed'
              alt='i18n'
              aria-hidden={true}
            />
            <hr />

            <h3>3. next.config.js</h3>
            <ul className={style.hasNoBorder}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <li><strong>const nextTranslate = require&#40;'next-translate'&#41;</strong></li>
              <li>module.exports = <strong>nextTranslate</strong>(&#123;</li>
              <li>&nbsp; ...rest</li>
              <li>&#125;)</li>
            </ul>
            <hr />

            <h3>4. Trans Component:</h3>
            <h4>
              <span className='color-is-red'>Result: </span>
              <Trans i18nKey="common:trans" components={{bold: <strong/>}} values={{ count: 42 }} />
            </h4>
            <h4>
              <span className='color-is-red'>Result: </span>
              <Trans
                i18nKey="common:trans2"
                components={{total: <strong/>}}
              />
            </h4>

            <h3>json</h3>
            <code>&quot;trans&quot;: &quot;Be in touch with your friends <strong className='color-is-red'>&lt;bold&gt; &#123;&#123;count&#125;&#125; test&lt;/bold</strong>&gt;&quot;</code>
            <code>&quot;trans2&quot;: &quot;Be in touch with your friends <strong className='color-is-red'>&lt;total&gt;price&lt;/total&gt;</strong>&quot;</code>
            <hr />

            <Image
              src={i18Trans}
              layout='fixed'
              alt='store'
              aria-hidden={true}
            />

            <h3>5. Translate example:</h3>
            <p>{t('home:createAccount')}</p>
            <p>{t('home:createAccount_headline', {count: amount})}</p>
            <p>{t('welcome')}</p>
          </div>
          <hr/>

          <div>
            <h2>i18n: how to install and use</h2>
            <p>
              <a
                href='https://github.com/i18next/next-i18next'
                target='_blank'
                rel='noreferrer'
              >
                react-i18next read more
              </a>
            </p>

            <h4 className='color-is-darkmagenta'>1. How to Install Next i18n</h4>
            <p><strong>yarn add next-i18next react-i18next i18next</strong></p>

            <h4 className='color-is-darkmagenta'>2. Translation content</h4>
            <p>By default, <mark>next-i18next</mark> expects your translations to be organised as such:</p>
            <ul className={style.hasNoBorder}>
              <li>.</li>
              <li>&nbsp;└── public</li>
              <li>&nbsp;└── locales</li>
              <li>
                &nbsp;&nbsp;├── en<br/>
                &nbsp;&nbsp;&nbsp;└── common.json<br/>
                &nbsp;&nbsp;└── de<br/>
                &nbsp;&nbsp;&nbsp;└── common.json
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChSix



