import { ChangeEvent } from 'react'

export interface NavigationLink {
  tKey: string
  link: string
}
export interface initPhotos {
  albumId?: number
  id?: number
  title: string
  url: string
  thumbnailUrl: string
  testMe?: boolean
}
export type Country = {
  code: string
  capital?: string
  name: string
  native?: string
  phone?: string | number
  currency?: string | number
  emoji?: string
  emojiU?: string
}
export interface CarTypes {
  id: string | number
  model: string
  name: string
  location?: string
  price: string
}
export type InpRest = Record<string, string>

// Hooks
export type InitOptions = { value: string }

// Playground
export type Person = {
  name: string
  age: number
}
// Slices
interface InitValueSL {
  title: string
  age: number
}

export interface PersonFn {
  (name: string, age: number): string | number
}

export type PersonTypoFn = (name: string, age: number) => number | string
