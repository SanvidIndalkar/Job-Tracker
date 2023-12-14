import { get } from 'mongoose';
import {getCurrentUser, 
getApplicationStatus,
updateUser
} from '../controllers/userController.js'

import { Router } from 'express'
import { validateUpdateUserInput} from '../middleware/validationMiddleware.js';
import { authorizePermission } from '../middleware/authMiddleware.js';

const router = Router();

router.route('/current-user').get(getCurrentUser);
router.route('/admin/app-stats').get(authorizePermission('admin'), getApplicationStatus);
router.route('/update-user').patch(validateUpdateUserInput ,updateUser);

export default router;
