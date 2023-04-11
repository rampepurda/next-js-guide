import style from '../chapters.module.scss'

import React, { MouseEventHandler, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../store/hooks"
import {
  incrementByAmount,
  UserName,
  Decrement,
  incrementX,
  getPhotos
} from "../../../../slices"
import { useState } from "react"
import { useInput } from "../../../../hooks"
import { Loader } from "../../../Loader/Loader"
import classNames from "classnames"

type OnClick = (MouseEventHandler<HTMLButtonElement>)

export const ChSeven = ({ID}: {ID: number}) => {
  const dispatch = useAppDispatch()
  const Alert: string = 'Please select numbers of photos should be displayed'
  const { amount, error, isLoading, photos, userName} = useAppSelector((state) => state.common)
  const [blockIsVisible, setBlockIsVisible] = useState<boolean>(false)
  //const { Value, handleInput } = useInput()
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
    <div
      className={style.ChaptersModuleSheet}
      style={{display: ID === 7 ? 'block' : 'none'}}>
      <h2>7. Next JS and Redux-Toolkit</h2>
      <button onClick={() => dispatch(incrementX(23))} type='button'>Increase</button>
      <p>
        <a
          href='https://redux-toolkit.js.org/tutorials/typescript'
          target='_blank'
          rel='noreferrer'
        >
          See more about redux-toolkit (official)
        </a>
      </p>
      <p>
        <a
          href='https://www.merixstudio.com/blog/introduction-using-redux-toolkit-nextjs-and-typescript/'
          target='_blank'
          rel='noreferrer'
        >
          See more about redux-toolkit (merixstudio)
        </a>
      </p>
      <hr/>

      <h3
        onClick={(e) => setBlockIsVisible(!blockIsVisible)}
        style={{cursor: 'pointer'}}
      >
        1. Toolkit: how to setup { blockIsVisible ? <span
        className={classNames(style.chevron)}
        style={{color: 'red'}}>&#94;</span> : <span
        className={classNames(style.chevron, style.chevron__down)}
        style={{color: 'green'}}>&#94;</span>}
      </h3>

      {
        blockIsVisible ? <div>
          <h3 style={{color: 'darkmagenta'}}>store.ts</h3>
          <img src='./images/ch-seven/store.png' aria-hidden={true} alt='store'/>

          <h3 style={{color: 'darkmagenta'}}>hooks.ts</h3>
          <img src='./images/ch-seven/hooks.png' aria-hidden={true} alt='store'/>

          <h3 style={{color: 'darkmagenta'}}>slice.ts</h3>
          <img src='./images/ch-seven/slice.png' aria-hidden={true} alt='store'/>

          <h3 style={{color: 'darkmagenta'}}>components</h3>
          <img src='./images/ch-seven/comp.png' aria-hidden={true} alt='store'/>
          <hr/>
        </div> : ''
      }

      <h3>2. createAsyncThunk</h3>
      <img src='./images/ch-seven/createAsyncthunk.png' aria-hidden={true} alt='store'/>
      <hr/>

      <h3>3. Slice: extraReducers</h3>
      <p>
        <mark>fulfilled</mark>
        <mark>rejected</mark>
        <mark>pending</mark>
      </p>
      <img src='./images/ch-seven/extraReducer.png' aria-hidden={true} alt='store'/>

      <h3>4. Thunk: payloadCreator</h3>
      <p>
        <mark>thunkAPI</mark>
        <mark>&#123; rejectWithValue &#125;</mark>
      </p>

      <h4 className='color-is-red'>thunkAPI</h4>
      <p>Via thunkAPI <strong>states and actions</strong> are reachable in thunk, see below:</p>
      <img src='./images/ch-seven/thunkAPI.png' aria-hidden={true} alt='store'/>

      <h4 className='color-is-red'>&#123; rejectWithValue &#125;</h4>
      <p>In case fetch failed <strong>error message</strong> is send and is reachable in Slice extraReducers via <strong>&#123; rejectWithValue &#125;</strong>, see below</p>
      <img src='./images/ch-seven/thunkrejectwithvalue.png' aria-hidden={true} alt='store'/>
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

      <div className={style.card}>
        {
          photos.map(({id, title, thumbnailUrl}) => {
            return (
              <div key={id} style={{border: photos.length === 1 ? 'none' : ''}}>
                <img src={thumbnailUrl} />
                <span>
                  <p>{title}</p>
                </span>
              </div>
            )
          })
        }
      </div>
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
  )
}

