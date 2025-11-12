import { Request, Response } from 'express'

export async function signup(req: Request, res: Response){
  // placeholder
  res.json({ message: 'signup endpoint (placeholder)', body: req.body })
}

export async function login(req: Request, res: Response){
  // placeholder
  res.json({ message: 'login endpoint (placeholder)' })
}
