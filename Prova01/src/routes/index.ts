import { Router } from "express";
import authRotes from './auth'

const router = Router()

router.use('/auth', authRotes)

export default router