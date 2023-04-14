export interface initPhotos {
  albumId?: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

export interface navData {
  tKey: string,
  link: string
}

// Groups
export interface BooksInitValue {
  id: number,
  title: string,
  author: string,
  price: number
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
