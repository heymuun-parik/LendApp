import { Router } from 'express'
import { createListing } from '../controllers/listing.controller.js'

const router = Router()
router.post('/', createListing)

export default router
