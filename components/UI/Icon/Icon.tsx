import Image from 'next/image'

type IconsT = 'ico-eye' | 'ico-search' | 'ico-chevron-down'
type Props = {
  className?: string
  icoName: IconsT
  onClick?: Function
  alt: string
  rest: Record<string, any>
}

export const Icon = ({ className, icoName, alt, onClick, rest }: Props) => {
  return (
    <Image
      className={className}
      src={`/${icoName}.svg`}
      alt={alt}
      fill={false}
      width={25}
      height={25}
      onClick={(ev) => onClick}
      aria-hidden={true}
      {...rest}
    />
  )
}
