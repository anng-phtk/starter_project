const express = require('express');

const cikRouter = express.Router();


// Define the /hello route
cikRouter.get('/hello', (req, res) => {
    res.send('Hello, world!');
});


module.exports = cikRouter;