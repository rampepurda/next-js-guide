import { useAppSelector } from '../../store'
import classNames from 'classnames'

export const Main = ({ children }: any) => {
  const { isThemeDark } = useAppSelector((state) => state.Common)

  return <main className={classNames({ ['isDark']: isThemeDark })}>{children}</main>
}
