import { Router } from 'express'
const router = Router()

import {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
} from '../controllers/jobController.js'
import { validateJobInput,validateIdParam } from '../middleware/validationMiddleware.js'

//routes for jobs
router.route('/').get(getAllJobs).post(validateJobInput, createJob)
router.route('/:id').get(validateIdParam, getJob).patch(validateIdParam, validateJobInput, updateJob).delete(validateIdParam, deleteJob)

export default router;