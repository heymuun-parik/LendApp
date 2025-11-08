import { Request, Response } from 'express'

export async function createListing(req: Request, res: Response){
  res.json({ message: 'create listing (placeholder)', data: req.body })
}
