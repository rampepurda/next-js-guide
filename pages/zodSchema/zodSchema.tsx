import { z } from 'zod'

export const schema = {
  login: z
    .object({
      email: z.string().email().min(10, { message: 'Must be 10 or fewer characters long' }),
      password: z.string().min(10),
      passwordConfirm: z.string().min(10, { message: 'Password must match' }),
    })
    .refine((data) => data.passwordConfirm === data.password, {
      message: 'Password must match',
      path: ['passwordConfirm'],
    }),
}
/**
 * @const schemaPost includes: 'posts' data from url: typiCodePosts
 */
export const schemaPost = {
  posts: z.object({
    userId: z.string({ required_error: 'Must be over 2 or fewer characters longs' }).min(2),
    title: z
      .string()
      .max(20, { message: 'Must be 20 or fewer characters long' })
      .min(1, { message: 'Must be over 1 or fewer characters long' }),
    body: z.string().max(80, { message: 'Must be 80 or fewer characters long' }),
  }),
}
export const schemaSearch = z.object({
  inpSearchPost: z.string().min(1, { message: 'Must be 20 or fewer characters long' }),
})
