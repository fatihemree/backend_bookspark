import { Router } from 'express'
import loginControllers from '../controllers/loginControllers'

const router = Router()
router.post('/', loginControllers)

export default router