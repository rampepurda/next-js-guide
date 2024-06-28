import type { NextApiRequest, NextApiResponse } from 'next'
import { CarName } from '../../../../../__mock__/dataMock'
import { CarNameTS } from '../../../../../types'

const cars: CarNameTS[] = CarName

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req
  const id = parseInt(query.id as string)
  const carID = cars.find((car: CarNameTS) => car.id === id)
  return res.status(200).json(carID)
}
