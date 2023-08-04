/**
 * @function handler is 'obliged, rule' use as Fn name
 * https://www.youtube.com/watch?v=GgzWFxIiwK4
 * Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 */

import { NextApiRequest, NextApiResponse } from 'next'
import { CarList } from '../../configuration'
import { CarTypes } from '../../types'

export default async function handler(_req: NextApiRequest, res: NextApiResponse<CarTypes[]>) {
  if (_req.method === 'POST') {
    //const notKnow = _req.body.email
  }
  // TimeOut simulates real data fetching
  setTimeout(() => {
    res.status(200).json(CarList)
  }, 2000)
}
