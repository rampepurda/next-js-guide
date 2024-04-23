/**
 * @function handler is 'obliged, rule' use as Fn name
 * https://www.youtube.com/watch?v=GgzWFxIiwK4
 * Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import { CarName } from '../../__mock__/dataMock'
import { CarNameTS } from '../../types'

const cars: CarNameTS[] = CarName

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // TimeOut simulates real data fetching
    setTimeout(() => {
      res.status(200).json(cars)
    }, 2000)
  }
  if (req.method === 'POST') {
    const car = req.body
    const carSingle = JSON.parse(car)
    const newCar: CarNameTS = {
      model: carSingle.model,
    }
    cars.push(newCar)
    res.status(200).json(cars)
  }
}
