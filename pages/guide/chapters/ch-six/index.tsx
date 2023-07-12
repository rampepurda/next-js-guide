import style from '../../chapters.module.scss'

import useTranslation from 'next-translate/useTranslation'
import { useAppSelector } from '../../../../store/hooks'
import Trans from 'next-translate/Trans'
import Head from 'next/head'
import { InfoBox, Input, Navigation } from '../../../../components'
import { navigationGuideLinks } from '../../../../configuration'
import { NextPage } from 'next'
import Image from 'next/image'
import i18n from '../../../../public/images/ch-six/i18n.png'
import i18Trans from '../../../../public/images/ch-six/i18Trans.png'
import { useEffect, useState } from 'react'
import { formatDateFromUTC } from '../../../../utils'

/**
 * https://www.i18next.com/translation-function/formatting
 */

const ChSix: NextPage = () => {
  const { amount } = useAppSelector((state) => state.Photos)
  const [age, setAge] = useState<string | number>(0)
  const currentDate = new Date()
  const { t } = useTranslation('common')

  useEffect(() => {}, [age])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-six</title>
      </Head>

      <div className="cols">
        <div className="col-3 has-br">
          <Navigation links={navigationGuideLinks} />
        </div>

        <div className="col-9">
          <div>
            <h2>6. next-translate: how to install and use</h2>
            <a
              href="https://www.npmjs.com/package/next-translate?activeTab=readme"
              target="_blank"
              rel="noreferrer"
            >
              next-translate read more
            </a>
            <hr />

            <h3>1. How to Install next-translate</h3>
            <strong>yarn add next-translate</strong>
            <h3>2. create: i18n.js</h3>
            <Image src={i18n} layout="fixed" alt="i18n" aria-hidden={true} />
            <hr />

            <h3>3. next.config.js</h3>
            <ul className={style.hasNoBorder}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <li>
                <strong>const nextTranslate = require&#40;'next-translate'&#41;</strong>
              </li>
              <li>
                module.exports = <strong>nextTranslate</strong>(&#123;
              </li>
              <li>&nbsp; ...rest</li>
              <li>&#125;)</li>
            </ul>
            <hr />

            <h3>4. Trans Component:</h3>
            <h4>
              <span className="color-is-red">Result: </span>
              <Trans
                i18nKey="common:trans"
                components={{ bold: <strong /> }}
                values={{ count: 42 }}
              />
            </h4>
            <h4>
              <span className="color-is-red">Result: </span>
              <Trans i18nKey="common:trans2" components={{ total: <strong /> }} />
            </h4>
            <hr />

            <h3>5. Interpolation</h3>
            <InfoBox className={'isInfo'}>
              <h4>
                In JavaScript, interpolation is the process of inserting strings or values into an
                existing string for various purposes. This functionality is useful because it
                enables you to create powerful and dynamic strings for your software.
              </h4>
            </InfoBox>
            <h4>locales - json:</h4>
            <div>
              <ul className="hasVerticalPadding-2">
                <li>
                  {' '}
                  &quot;trans&quot;: &quot;Be in touch with
                  <strong className="color-is-red">
                    &lt;bold&gt; &#123;&#123;count&#125;&#125; test&lt;/bold&gt;
                  </strong>
                  &quot;
                </li>
                <li>
                  &quot;trans2&quot;: &quot;Be in touch with your friends{' '}
                  <strong className="color-is-red">&lt;total&gt;price&lt;/total&gt;</strong>&quot;
                </li>
                <li>
                  "age": <strong>"My age is: &#123;&#123; num &#125;&#125;"</strong>
                </li>
              </ul>
              <Input
                id={'num'}
                ariaLabel={'select number'}
                rest={{ type: 'number', placeholder: '0' }}
                OnChange={(ev) => setAge(ev.target.value)}
              />
              <p>
                {t('pages.ch-6.interpolation.age', {
                  num: `${age}`,
                })}
              </p>
            </div>
            <Image src={i18Trans} layout="fixed" alt="store" aria-hidden={true} />
            <hr />

            <h3>
              {' '}
              6. &#123; t( 'locales- appropriate target', query &#123; &#125;, option: &#123;
              returnObject: true &#125;) &#125;
            </h3>
            <div>
              <h4>
                {formatDateFromUTC(`${currentDate}`, t('months', {}, { returnObjects: true }))}
              </h4>
            </div>

            <hr />

            <h3>5. Translate example:</h3>
            <p>{t('home:createAccount')}</p>
            <p>{t('home:createAccount_headline', { count: amount })}</p>
            <p>{t('welcome')}</p>
          </div>
          <hr />

          <div>
            <h2>i18n: how to install and use in React</h2>
            <p>
              <a href="https://github.com/i18next/next-i18next" target="_blank" rel="noreferrer">
                react-i18next read more
              </a>
            </p>

            <h4 className="color-is-darkmagenta">1. How to Install Next i18n</h4>
            <p>
              <strong>yarn add next-i18next react-i18next i18next</strong>
            </p>

            <h4 className="color-is-darkmagenta">2. Translation content</h4>
            <p>
              By default, <mark>next-i18next</mark> expects your translations to be organised as
              such:
            </p>
            <ul className={style.hasNoBorder}>
              <li>.</li>
              <li>&nbsp;└── public</li>
              <li>&nbsp;└── locales</li>
              <li>
                &nbsp;&nbsp;├── en
                <br />
                &nbsp;&nbsp;&nbsp;└── common.json
                <br />
                &nbsp;&nbsp;└── de
                <br />
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
