import type { NextApiRequest, NextApiResponse } from 'next'
import { CarName } from '../../../../__mock__/dataMock'
import { CarNameTS } from '../../../../types'

const cars: CarNameTS[] = CarName

/**
 * @function handler is 'obliged, rule' use as Fn name in Next < 14
 * https://www.youtube.com/watch?v=GgzWFxIiwK4
 * Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 */

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  switch (method) {
    case 'GET':
      // Get data from your database
      setTimeout(() => {
        res.status(200).json(cars)
      }, 2000)
      break
    case 'POST':
      const date = new Date()
      const car = await req.body
      const carList = JSON.parse(car)
      const newCar: CarNameTS = {
        id: date.getDate(),
        model: carList.model,
      }
      res.status(200).json(cars.push(newCar))
      break
    case 'DELETE':
      const id = parseInt(req.query.id as string)
  }
}
