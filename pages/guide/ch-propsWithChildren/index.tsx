import React, { PropsWithChildren } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import imgPropsWithChildren from '../../../public/images/ch-eight/propsWithChildren.png'

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

export default function ChPropsWithChildren() {
  return (
    <>
      <Head>
        <title>Next JS | Guide | PropsWithChildren</title>
      </Head>

      <div>
        <h2>PropsWithChildren</h2>
        <WithChild user={user}>
          <h4 className="color-is-red">This is PropsWithChildren Area</h4>
        </WithChild>
        <Image src={imgPropsWithChildren} aria-hidden={true} alt="propsWithChildren" />
      </div>
    </>
  )
}
