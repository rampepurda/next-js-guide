import React, { PropsWithChildren, useEffect } from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import { Navigation } from '../../../../components'
import Image from 'next/image'
import imgPropsWithChildren from '../../../../public/images/ch-eight/propsWithChildren.png'
import { breakPoints, navigationGuideLinks } from '../../../../configuration'
import { useWindWidth } from '../../../../hooks'

type Props = { name: string; address: string }
const user: Props = {
  name: 'Eda Jezowicz',
  address: 'Na Micance 39, Praha 6',
}

const WithChild = ({ user, children }: PropsWithChildren<{ user: Props }>) => {
  return (
    <>
      <label htmlFor="name">Full Name:</label>
      <h4 id="name">{user.name}</h4>
      <label htmlFor="address">Address:</label>
      <h4 id="address">{user.address}</h4>
      {children}
    </>
  )
}

const ChEight: NextPage = () => {
  const { windowSize, getWindWidth } = useWindWidth()

  useEffect(() => {
    getWindWidth()
  }, [])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Chapter8</title>
      </Head>

      <div className="cols">
        {windowSize > breakPoints.isMediumDevice && (
          <div className="col-3 has-br">
            <Navigation links={navigationGuideLinks} />
          </div>
        )}

        <div className="col-9">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h2>8. PropsWithChildren</h2>

          <WithChild user={user}>
            <hr />
            <h4 className="color-is-red">This is PropsWithChildren Area</h4>
          </WithChild>
          <hr />

          <Image src={imgPropsWithChildren} aria-hidden={true} alt="propsWithChildren" />
        </div>
      </div>
    </>
  )
}

export default ChEight
