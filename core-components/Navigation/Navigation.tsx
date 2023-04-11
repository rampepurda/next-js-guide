import style from './navigation-main.module.scss'

import Link from "next/link"
import { useRouter } from 'next/router'
import { navData } from "../../types"
import Data from '../../data-mock/data.json'
import { LangSwitcher } from '../LangSwitcher/LangSwitcher'
import classNames from "classnames"
import useTranslation from "next-translate/useTranslation"

export const Navigation = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const navLinks: navData[] = Data.Navigation

  return (
    <nav className={style.Navigation}>
      <ul>
        {navLinks?.map(({tKey, link}, index) => {
          return (
            <li key={index}>
              <Link href={{pathname: `/${link}`}}>
                <a
                  className={classNames({[style.active]: router.pathname == `/${link}`})}
                  aria-label={`link to ${tKey}`}
                  rel={'chapter'}>
                  {t(tKey)}
                </a>
              </Link>
            </li>
          )
        })
        }
      </ul>

      <span className={classNames(style.Navigation__langSwitcher)}>
        <LangSwitcher route={''} />
      </span>
    </nav>
 )
}