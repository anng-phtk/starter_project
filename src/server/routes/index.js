import express from 'express';
import cikRoutes from './CIKRoutes.js';

const router = express.Router();

router.use('/cik', cikRoutes); // Mount the cikRoutes under /cik


export default router;