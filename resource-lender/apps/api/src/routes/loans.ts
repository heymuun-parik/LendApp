import { Router } from 'express'

const router = Router()
// Placeholder loan endpoints
router.get('/', (_req, res) => res.json({ loans: [] }))

export default router
