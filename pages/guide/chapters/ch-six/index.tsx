import style from '../../chapters.module.scss'
import useTranslation from "next-translate/useTranslation"
import { useAppSelector } from "../../../../store/hooks"
import Trans from "next-translate/Trans"
import Image from "next/image"
import i18n from '../../../../public/images/ch-six/i18n.png'
import i18Trans from '../../../../public/images/ch-six/i18Trans.png'
import Head from "next/head"
import { Navigation } from "../../../../components"
import Data from "../../../../data-mock/data.json"
import { navData } from "../../../../types"
import { NextPage } from "next";

const ChSix: NextPage = () => {
  const { amount } = useAppSelector((state) => state.common)
  const { t } = useTranslation('common')
  const links: navData[] = Data.NavigationLeft

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-six</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <Navigation links={links}/>
        </div>

        <div className='col-9'>
          <div>
            <h2>next-translate: how to install and use</h2>
            <p>
              <a
                href='https://www.npmjs.com/package/next-translate?activeTab=readme'
                target='_blank'
                rel='noreferrer'
              >
                next-translate read more
              </a>
            </p>

            <h4 className='color-is-darkmagenta'>1. How to Install next-translate</h4>
            <p><strong>yarn add next-translate</strong></p>

            <h4 className='color-is-darkmagenta'>2. create: i18n.js</h4>
            <Image
              src={i18n}
              layout='fixed'
              alt='i18n'
              aria-hidden={true}
            />

            <h4 className='color-is-darkmagenta'>3. next.config.js</h4>

            <ul className={style.hasNoBorder}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <li><strong>const nextTranslate = require&#40;'next-translate'&#41;</strong></li>
              <li>module.exports = <strong>nextTranslate</strong>(&#123;</li>
              <li>&nbsp; ...rest</li>
              <li>&#125;)</li>
            </ul>

            <h4 className='color-is-darkmagenta'>4. ChangeLanguage</h4>
            <p>See pages/ChangeLanguage.tsx</p>

            <h4 className='color-is-darkmagenta'>5. Trans Component:</h4>
            <p>
              <Trans
                i18nKey="common:trans"
                components={{bold: <strong/>}}
                values={{ count: 42 }}
              />
            </p>
            <p>
              <Trans
                i18nKey="common:trans2"
                components={{total: <strong/>}}
              />
            </p>

            <h4>json</h4>
            <code>
              <p>&quot;trans&quot;: &quot;Be in touch with your friends <strong className='color-is-red'>&lt;bold&gt; &#123;&#123;count&#125;&#125; test&lt;/bold</strong>&gt;&quot;</p>
              <p>&quot;trans2&quot;: &quot;Be in touch with your friends <strong className='color-is-red'>&lt;total&gt;price&lt;/total&gt;</strong>&quot;</p>
            </code>

            <h4>code:</h4>
            <Image
              src={i18Trans}
              layout='fixed'
              alt='store'
              aria-hidden={true}
            />
            <hr/>

            <h4>Translate example:</h4>
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

/*
// Todo MiTom Reach 'Locale' below just as an example,we dont need it cause useTranslation from next-translate
export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}
 */


