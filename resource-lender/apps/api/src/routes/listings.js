import { Router } from 'express'
import { createListing } from '../controllers/listing.controller'

const router = Router()
router.post('/', createListing)

export default router
