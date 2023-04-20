import style from './ch-seven.module.scss'

import React, { MouseEventHandler, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../store/hooks"
import {
  incrementByAmount,
  UserName,
  Decrement,
  getPhotos
} from "../../../../slices"
import { useState } from "react"
import { Loader } from "../../../../components/Loader/Loader"
import classNames from "classnames"
import { NextPage } from "next"
import { Navigation } from "../../../../components"
import { navigationGuideLinks} from "../../../../configuration/navigation"
import Head from "next/head"
import Image from "next/image"
import { imgAsyncThunk, imgExtraReducer, imgComponent, imgSlice, imgStore, imgHooks, imgThunkApi, imgThunkWithRejValue } from './index-img'
import { Photos} from "../../../../components/Photos"

type OnClick = (MouseEventHandler<HTMLButtonElement>)

const ChSeven: NextPage = () => {
  const dispatch = useAppDispatch()
  const Alert: string = 'Please select numbers of photos should be displayed'
  const { amount, error, isLoading, photos, userName } = useAppSelector((state) => state.common)
  const [blockIsVisible, setBlockIsVisible] = useState<boolean>(false)
  const [hasLimit, setHasLimit] = useState<string>()
  const handlePhotos: OnClick = () => {
    // @ts-ignore
    dispatch(getPhotos(hasLimit))
    if(!hasLimit) {
      alert(`${Alert}`)
    }
  }

  useEffect(() => {},[amount, isLoading, error, hasLimit])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-seven</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <Navigation links={navigationGuideLinks} />
        </div>

        <div className='col-9'>
          <h2>7. Next JS and Redux-Toolkit</h2>
          <ul className='hasTypeDisc'>
            <li>yarn add @reduxjs/toolkit</li>
            <li>
              <a
                href='https://redux-toolkit.js.org/tutorials/typescript'
                target='_blank'
                rel='noreferrer'
              >
                See more about redux-toolkit (official)
              </a>
            </li>
            <li>
              <a
                href='https://www.merixstudio.com/blog/introduction-using-redux-toolkit-nextjs-and-typescript/'
                target='_blank'
                rel='noreferrer'
              >
                See more about redux-toolkit (merixstudio)
              </a>
            </li>
          </ul>
          <hr/>

          <h3>
            <a onClick={(e) => setBlockIsVisible(!blockIsVisible)}
               style={{
                 cursor: 'pointer',
                 fontSize: '1.7rem',
                 color: 'black'
            }}>
              1. Toolkit: how to setup
              {blockIsVisible ?
                <span
                  className={classNames(style.chevron)}
                  style={{color: 'red'}}>&#94;</span> : <span
                  className={classNames(style.chevron, style.chevron__down)}
                  style={{color: 'green'}}>&#94;
                  </span>
              }
            </a>
          </h3>

          {
            blockIsVisible ? <div>
              <h3 style={{color: 'darkmagenta'}}>store.ts</h3>
              <Image
                src={imgStore}
                aria-hidden={true}
                alt='store'
              />

              <h3 style={{color: 'darkmagenta'}}>hooks.ts</h3>
              <Image
                src={imgHooks}
                aria-hidden={true}
                alt='hooks'/>

              <h3 style={{color: 'darkmagenta'}}>slice.ts</h3>
              <Image
                src={imgSlice}
                aria-hidden={true}
                alt='store'
              />

              <h3 style={{color: 'darkmagenta'}}>components</h3>
              <Image
                src={imgComponent}
                aria-hidden={true}
                alt='use in component'
              />
              <hr/>
            </div> : ''
          }

          <h3>2. createAsyncThunk</h3>
          <Image
            src={imgAsyncThunk}
            aria-hidden={true}
            alt='syncThunk'
          />
          <hr/>

          <h3>3. Slice: extraReducers</h3>
          <p>
            <mark>fulfilled</mark>
            <mark>rejected</mark>
            <mark>pending</mark>
          </p>
          <Image
            src={imgExtraReducer}
            aria-hidden={true}
            alt='store'
          />

          <h3>4. Thunk: payloadCreator</h3>
          <p>
            <mark>thunkAPI</mark>
            <mark>&#123; rejectWithValue &#125;</mark>
          </p>

          <h4 className='color-is-red'>thunkAPI</h4>
          <p>Via thunkAPI <strong>states and actions</strong> are reachable in thunk, see below:</p>
          <Image
            src={imgThunkApi}
            aria-hidden={true}
            alt='thunk'
          />

          <h4 className='color-is-red'>&#123; rejectWithValue &#125;</h4>
          <p>In case fetch failed <strong>error message</strong> is send and is reachable in Slice extraReducers via <strong>&#123; rejectWithValue &#125;</strong>, see below</p>
          <Image
            src={imgThunkWithRejValue}
            aria-hidden={true}
            alt='thunk reject value'
          />
          <hr/>

          <h3 style={{color: 'darkmagenta'}}>Examples:</h3>
          <h4>Select Numbers of Photos you want to see:</h4>
          <input
            type='number'
            placeholder='0'
            min='100' max='500'
            step='50'
            onChange={(e) => setHasLimit(e.target.value)}
          />
          <button
            className='btn btn-primary'
            type='button'
            aria-label='show photo gallery'
            onClick={handlePhotos}
          >
            Show Gallery
          </button>
          <p>{isLoading && error === '' ? <Loader /> : ''}</p>
          <h4>{error === '' ? '' : <span style={{color: 'red'}}>{error}</span>}</h4>
          <Photos photos={photos} />
          <hr/>

          <h3>User Name: {userName}</h3>
          <div style={{
            display: 'flex',
            alignContent: 'center'
          }}>
            <button
              className='btn btn-primary'
              type='button'
              onClick={(e) => dispatch(incrementByAmount(34))}
            >
              Increment By Amount
            </button>
            <span style={{
              display: 'inline-block',
              margin: '0.2rem 0.3rem 0.2rem',
              border: '1px solid gray',
              padding: '0.5rem',
              fontWeight: 'bolder',
              fontSize: '1.3rem'
            }}>
          {amount}
        </span>

            <button
              className='btn btn-remove'
              type='button'
              onClick={() => dispatch(Decrement())}
            >
              Decrease Value
            </button>

            <input
              type='text'
              placeholder='onKey change the User name'
              onKeyUp={(e) => dispatch(UserName({changeUserName: 'donovald truskavec'}))}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ChSeven

