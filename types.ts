export enum PathName {
  guide = '/guide',
  project = '/projects',
  tsDocumentation = '/typeScriptDoc',
}
export enum NavType {
  Primary = 'primary',
  Sidebar = 'sidebar',
  SubNav = 'sub',
  Accordion = 'accordion',
}
export interface NavigationLink {
  tKey: string
  link: string
}
export type Chapters = {
  tKey: string
  link: string
}
export type PhotoType = {
  albumId?: number
  id?: number
  title: string
  url: string
  thumbnailUrl: string
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
export type Continent = {
  name: string
  code: string
}
export type ContinentDetailTS = {
  continent: {
    name: string | undefined
    countries: {
      name: string
      capital: string | null
    }[]
  }
}
export type BookT = {
  id: number
  quantity?: number
  author: string
  title: string
  price?: string
  imgSrc?: string
}
export interface CarTypes {
  id: string | number
  model: string
  name: string
  location?: string
  price: string
}
export interface CarNameTS {
  id: number
  model: string
}
export interface SlideShowImages {
  url: any
  alt: string
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
