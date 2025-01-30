const express = require('express');
const cikRoutes = require('./CIKRoutes');

const router = express.Router();

router.use('/cik', cikRoutes); // Mount the cikRoutes under /cik
module.exports = router;