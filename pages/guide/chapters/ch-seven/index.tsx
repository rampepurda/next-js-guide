import style from './ch-seven.module.scss'

import React, { MouseEventHandler, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { getPhotos } from '../../../../slices'
import { useState } from 'react'
import classNames from 'classnames'
import { NextPage } from 'next'
import { Navigation, Photos, Input } from '../../../../components'
import { navigationGuideLinks } from '../../../../configuration'
import Head from 'next/head'
import Image from 'next/image'
import {
  imgAsyncThunk,
  imgExtraReducer,
  imgComponent,
  imgSlice,
  imgStore,
  imgHooks,
  imgThunkApi,
  imgThunkWithRejValue,
} from './index-img'
import { initPhotos } from '../../../../types'

type OnClick = MouseEventHandler<HTMLButtonElement>

const ChSeven: NextPage = () => {
  const dispatch = useAppDispatch()
  const Alert: string = 'Please select numbers of photos should be displayed'
  const { amount, error, isLoading, photos, userName } = useAppSelector((state) => state.Photos)
  const [blockIsVisible, setBlockIsVisible] = useState<boolean>(false)
  const [hasLimit, setHasLimit] = useState<string>('0')
  const [selectedPhotos, setSelectedPhotos] = useState<initPhotos[]>(photos)
  const handlePhotos: OnClick = () => {
    dispatch(getPhotos(hasLimit))
    setSelectedPhotos(photos)
    if (hasLimit === '0') {
      alert(`${Alert}`)
    }
  }

  useEffect(() => {
    setSelectedPhotos(photos)
  }, [amount, isLoading, error])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-seven</title>
      </Head>

      <div className="cols">
        <div className="col-3 has-br">
          <Navigation links={navigationGuideLinks} />
        </div>

        <div className="col-9">
          <h2>7. Next JS and Redux-Toolkit</h2>
          <ul className="hasTypeDisc">
            <li>yarn add @reduxjs/toolkit</li>
            <li>
              <a
                href="https://redux-toolkit.js.org/tutorials/typescript"
                target="_blank"
                rel="noreferrer"
              >
                See more about redux-toolkit (official)
              </a>
            </li>
            <li>
              <a
                href="https://www.merixstudio.com/blog/introduction-using-redux-toolkit-nextjs-and-typescript/"
                target="_blank"
                rel="noreferrer"
              >
                See more about redux-toolkit (merixstudio)
              </a>
            </li>
          </ul>
          <hr />

          <h3>
            <a
              onClick={(e) => setBlockIsVisible(!blockIsVisible)}
              style={{
                cursor: 'pointer',
                fontSize: '1.7rem',
                color: 'black',
              }}
            >
              1. Toolkit: how to setup
              {blockIsVisible ? (
                <span className={classNames(style.chevron)} style={{ color: 'red' }}>
                  &#94;
                </span>
              ) : (
                <span
                  className={classNames(style.chevron, style.chevron__down)}
                  style={{ color: 'green' }}
                >
                  &#94;
                </span>
              )}
            </a>
          </h3>

          {blockIsVisible ? (
            <div>
              <h3>store.ts</h3>
              <Image src={imgStore} aria-hidden="true" alt="store" />
              <h3>hooks.ts</h3>
              <Image src={imgHooks} aria-hidden="true" alt="hooks" />
              <h3>slice.ts</h3>
              <Image src={imgSlice} aria-hidden="true" alt="store" />
              <h3>components</h3>
              <Image src={imgComponent} aria-hidden="true" alt="use in component" />
              <hr />
            </div>
          ) : (
            ''
          )}

          <h3>2. createAsyncThunk</h3>
          <Image src={imgAsyncThunk} aria-hidden="true" alt="syncThunk" />
          <hr />

          <h3>3. Slice: extraReducers</h3>
          <p>
            <mark>fulfilled</mark>
            <mark>rejected</mark>
            <mark>pending</mark>
          </p>
          <Image src={imgExtraReducer} aria-hidden="true" alt="store" />

          <h3>4. Thunk: payloadCreator</h3>
          <p>
            <mark>thunkAPI</mark>
            <mark>&#123; rejectWithValue &#125;</mark>
          </p>

          <h4 className="color-is-red">thunkAPI</h4>
          <p>
            Via thunkAPI <strong>states and actions</strong> are reachable in thunk, see below:
          </p>
          <Image src={imgThunkApi} aria-hidden="true" alt="thunk" />

          <h4 className="color-is-red">&#123; rejectWithValue &#125;</h4>
          <p>
            In case fetch failed <strong>error message</strong> is send and is reachable in Slice
            extraReducers via <strong>&#123; rejectWithValue &#125;</strong>, see below
          </p>
          <Image src={imgThunkWithRejValue} aria-hidden="true" alt="thunk reject value" />
          <hr />

          <h4>Select Numbers of Photos you want to see:</h4>
          <div>
            <Input
              id={'email'}
              ariaLabel={'select number'}
              tabIdx={1}
              OnChange={(e) => setHasLimit(e.target.value)}
              rest={{
                type: 'number',
                placeholder: '0',
                min: '50',
                max: '500',
                step: '50',
              }}
            />
            <button
              className="btn btn-primary"
              type="button"
              aria-label="show photo gallery"
              onClick={handlePhotos}
            >
              Show Gallery
            </button>
          </div>

          <Photos photos={selectedPhotos} />
        </div>
      </div>
    </>
  )
}

export default ChSeven
