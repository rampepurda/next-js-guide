import type { NextApiRequest, NextApiResponse } from 'next'

import { UserT } from '../../../types'
import { apiData } from '../../../__mock__/dataMock'

const user: UserT = apiData.user

/**
 * @function handler is 'obliged, rule' use as Fn name in Next < 14
 * https://www.youtube.com/watch?v=GgzWFxIiwK4
 * Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 */

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  switch (method) {
    case 'GET':
      setTimeout(() => {
        res.status(200).json(user)
      }, 2000)
  }
}
