import { ChangeEvent } from "react"

export interface navData {
  tKey: string,
  link: string
}
export interface initPhotos {
  albumId?: number,
  id?: number,
  title: string,
  url: string,
  thumbnailUrl: string,
  testMe?: boolean
}
export interface initPagination {
  items: number,
  itemsPerPage: number,
  currentPage?: number,
  onPageChange?: (ev: ChangeEvent<HTMLSelectElement>) => void,
}
export type CountriesQL = {
  code: string,
  name: string,
  emoji: string,
}

// Hooks
export type Options = {
  label: string,
  value: string
}

// Playground
export type Person = {
  name: string,
  age: number
}

// Slices
interface InitValueSL
{
  title: string,
  age: number
}

export interface PersonFn {
  ( name: string, age: number): string | number
}

export type PersonTypoFn = (name: string, age: number) => number | string
