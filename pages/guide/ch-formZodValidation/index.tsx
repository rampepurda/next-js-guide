import { Button } from '../../../components'
import Head from 'next/head'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from '../../zodSchema/zodSchema'
import { useState } from 'react'
import Image from 'next/image'

type LoginT = {
  email: string
  password: string
  passwordConfirm: string
}
type InpPasT = 'password' | 'text'

export default function ChFormValidationZod() {
  const errMessage: string = 'Problems during sending occurred. Please try again.'
  const [inpPassword, setInpPassword] = useState<InpPasT>('password')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginT>({ resolver: zodResolver(schema.login) })
  const onSubmit = async (data: LoginT) => {
    const response = await fetch(``, {
      method: 'POST',
      headers: { 'Content-Type': 'application.json' },
      body: JSON.stringify(data),
    })
    if (response.ok) {
      alert(`You are logged`)
      reset()
    } else {
      alert(errMessage)
      throw new Response(JSON.stringify(errMessage))
    }
  }
  const handlePassVisibility = () => {
    switch (inpPassword) {
      case 'password':
        return setInpPassword('text')
      case 'text':
        return setInpPassword('password')
    }
  }
  const styles: any = {
    mb: {
      marginTop: '-.2rem',
    },
    icoEye: {
      cursor: 'pointer',
      position: 'absolute',
      top: '1rem',
      right: '1rem',
    },
  }

  return (
    <>
      <Head>
        <title>Next JS | Guide | form validation with Zod </title>
      </Head>

      <div>
        <h2>Zod form validation together with useForm hook</h2>
        <ul className="hasTypeDisc hasVerticalPadding-4">
          <li>
            <h4>Install:</h4>
            yarn add zod <strong>@hookform/resolvers</strong>
          </li>
          <li>
            <h4>Check:</h4>
            tsconfig.json &quot;strict&quot;: must be true,
          </li>
          <li>
            <Link href="https://zod.dev/?id=introduction" target="_blank" rel="noreferrer">
              Zod - read more here
            </Link>{' '}
          </li>
          <li>
            <Link
              href="https://www.youtube.com/watch?v=u6PQ5xZAv7Q"
              target="_blank"
              rel="noreferrer"
            >
              Video tutorial - Zod validation with useForm hook
            </Link>{' '}
          </li>
        </ul>
        <h2>Zod - Schema(object)</h2>
        <ul className="hasVerticalPadding-3 hasOutline">
          <li>
            <strong>import &#123; z &#125; from 'zod'</strong>
          </li>
          <li>&nbsp;</li>
          <li>export const schema = &#123;</li>
          <li>
            &nbsp;login: <strong>z.object</strong>(&#123;
          </li>
          <li>
            &nbsp;&nbsp;email: z.string().email().min(10, &#123; message: 'Must be 10...' &#125;),
          </li>
          <li>&nbsp;&nbsp;password: z.string().min(10),</li>
          <li>&nbsp;&#125;)</li>
          <li>&#125;</li>
        </ul>
        <h2>Zod and useForm implementation</h2>
        <ul className="hasVerticalPadding-3 hasOutline">
          <li>const &#123;</li>
          <li>&nbsp;register, handleSubmit,</li>
          <li>&#125;</li>
          <li>&nbsp;formState: &#123; errors, isSubmitting ... &#125;,</li>
          <li>
            &nbsp;&#125; = useForm&lt;TS&gt;(&#123;{' '}
            <strong>resolver: zodResolver(schema.name)</strong> &#125;)
          </li>
          <li>&#125;</li>
        </ul>
        <form className="width-is-5" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">
            <strong>Email:</strong>
          </label>
          <input
            id="email"
            type="email"
            placeholder="@"
            aria-label="your email address"
            {...register('email')}
          />
          {errors.email && (
            <p className="color-is-red" style={styles.mb} aria-live="polite" role="status">
              {errors.email.message}
            </p>
          )}
          <label htmlFor="password">
            <strong>Password:</strong>
          </label>
          <input
            id="password"
            type="password"
            placeholder="password"
            aria-label="insert password"
            {...register('password')}
          />
          {errors.password && (
            <p className="color-is-red" style={styles.mb} aria-live="polite" role="status">
              {errors.password.message}
            </p>
          )}

          <label htmlFor="passwordConfirm">
            <strong>Confirm Password:</strong>
          </label>

          <div style={{ position: 'relative' }}>
            <input
              id="passwordConfirm"
              type={inpPassword}
              placeholder="confirm password"
              aria-label="confirm password"
              {...register('passwordConfirm')}
            />
            <Image
              src={'/ico-eye.svg'}
              alt={'ico eye'}
              fill={false}
              priority={false}
              width={30}
              height={20}
              onClick={(ev) => {
                handlePassVisibility()
              }}
              style={styles.icoEye}
            />
          </div>

          {errors.passwordConfirm && (
            <p className="color-is-red" style={styles.mb} aria-live="polite" role="status">
              {errors.passwordConfirm.message}
            </p>
          )}
          <div>
            <Button
              ClassName={'btn-submit'}
              title={'Submit'}
              rest={{ type: 'submit' }}
              isDisabled={isSubmitting}
            />
          </div>
        </form>
      </div>
    </>
  )
}
