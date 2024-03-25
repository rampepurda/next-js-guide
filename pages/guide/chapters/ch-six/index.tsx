import style from '../../chapters.module.scss'
import useTranslation from 'next-translate/useTranslation'
import { useAppSelector } from '../../../../redux/store'
import Trans from 'next-translate/Trans'
import Head from 'next/head'
import { InfoBox, Input, DateBox } from '../../../../components'
import { NextPage } from 'next'
import Image from 'next/image'
import i18n from './img/i18n.png'
import i18Trans from './img/i18Trans.png'
import React, { useEffect, useMemo, useState } from 'react'

/**
 * i18next - All About
 * https://www.i18next.com/translation-function/formatting
 */

const ChSix: NextPage = () => {
  const { amount } = useAppSelector((state) => state.Photos)
  const [age, setAge] = useState<string | number>(0)
  const { t } = useTranslation('common')
  const isAge50 = useMemo(() => {
    if (age === '50') {
      return <mark>Ooops, something happened</mark>
    }
  }, [age])

  useEffect(() => {}, [age])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-six</title>
      </Head>

      <div>
        <div>
          <h2>6. {t('chapter:ch6.title')}</h2>
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
              <strong>const nextTranslate = require&#40;&apos;next-translate&apos;&#41;</strong>
            </li>
            <li>
              module.exports = <strong>nextTranslate</strong>(&#123;
            </li>
            <li>&nbsp; ...rest</li>
            <li>&#125;)</li>
          </ul>
          <hr />
          <h3>4. Trans Component:</h3>
          <ul className="hasVerticalPadding-2">
            <li>
              <Trans
                i18nKey="chapter:ch6.trans.example1"
                components={{ bold: <strong /> }}
                values={{ num: 42 }}
              />
            </li>
            <li>
              <Trans i18nKey="chapter:ch6.trans.example2" components={{ total: <strong /> }} />
            </li>
          </ul>
          <Image src={i18Trans} layout="fixed" alt="store" aria-hidden={true} />
          <hr />
          <h3>5. Interpolation</h3>
          <InfoBox className={'isInfo'}>
            <h4>
              In JavaScript, interpolation is the process of inserting strings or values into an
              existing string for various purposes. This functionality is useful because it enables
              you to create powerful and dynamic strings for your software.
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
                &quot;age&quot;:{' '}
                <strong>&quot;My age is: &#123;&#123; num &#125;&#125;&quot;</strong>
              </li>
            </ul>
            <Input
              id={'num'}
              ariaLabel={'select number'}
              rest={{ type: 'number', placeholder: '30', step: '5', min: '30', max: '100' }}
              OnChange={(ev) => setAge(ev.target.value)}
            />
            <p>
              {t('chapter:ch6.interpolation.age', {
                num: `${age}`,
              })}
              {isAge50}
            </p>
          </div>
          <hr />
          <h3>6. Objects and Arrays</h3>
          <ul className="hasTypeDisc">
            <li>
              &#123; &quot;week&quot;: [ &quot;mon&quot;, &quot;tue&quot;, &quot;wed&quot; ] &#125;
            </li>
            <li>
              &#123; t(&apos;key&apos;, &#123; &#125;, &#123; returnObjects: true &#125;)&#125;
            </li>
          </ul>
          <h4>{t('chapter:ch6.week', {}, { returnObjects: true })}</h4>
          <hr />
          <h3>7. returnObject: true</h3>
          <h5>
            &#123; t( &apos;tKey&apos;, query &#123; &#125;, option: &#123; returnObject: true
            &#125;) &#125;
          </h5>
          <a
            href="https://www.i18next.com/translation-function/formatting"
            rel="noreferrer"
            target="_blank"
          >
            Read more about i18n formatting
          </a>
          <div style={{ position: 'relative', margin: '2rem 0' }}>
            <DateBox />
          </div>
          <hr />
          <h3>Translate example:</h3>
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
            By default, <mark>next-i18next</mark> expects your translations to be organised as such:
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
    </>
  )
}

export default ChSix
