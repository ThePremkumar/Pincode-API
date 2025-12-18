// routes/pincode.js
import Router from 'express';
import { getPincode } from '../controllers/pincodeController.js';
import { protect } from '../middleware/authMiddleware.js';
const pincodeRouter = Router();

pincodeRouter.get('/:pin', protect, getPincode);

export default pincodeRouter;
