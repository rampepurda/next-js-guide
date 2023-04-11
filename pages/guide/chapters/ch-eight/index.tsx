import style from '../chapters.module.scss'

import React, {PropsWithChildren, useState} from "react"
import Head from "next/head"
import classNames from "classnames"

type Props = {name: string, address: string }
const user: Props = {
  name: 'Eda Jezowicz',
  address: 'Na Micance 39, Praha 6',
}

const WithChild = ({user, children}: PropsWithChildren<{ user: Props }> ) => {
  return (
    <>
      <label htmlFor='name'>Full Name:</label>
      <h4 id='name'>{user.name}</h4>
      <label htmlFor='address'>Address:</label>
      <h4 id='address'>{user.address}</h4>
      {children}
    </>
  )
}

export const ChEight = ({ID}: {ID: number}) => {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Chapter8</title>
      </Head>

      <div
        className={classNames(style.ChaptersModuleSheet)}
        style={{display: ID === 8 ? 'block' : 'none'}}>

        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h2>8. PropsWithChildren</h2>

        <WithChild user={user}>
          <hr/>
          <h4 className='color-is-red'>This is PropsWithChildren Area</h4>
        </WithChild>
        <hr/>

        <img src='./images/ch-eight/propsWithChildren.png'  aria-hidden={true} alt='propsWithChildren'/>
      </div>
    </>
  )
}

