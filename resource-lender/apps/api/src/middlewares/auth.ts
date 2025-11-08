import { Request, Response, NextFunction } from 'express'

export function requireAuth(req: Request, res: Response, next: NextFunction){
  // Placeholder: in real app validate JWT/session
  next()
}
