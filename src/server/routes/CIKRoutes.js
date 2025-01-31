import express from 'express';

// const express = require('express');

const cikRouter = express.Router();

// Define an example /hello route that will be accessible via localhost:3000/api/vi/cik/hello
cikRouter.get('/hello', (req, res) => {
    res.send('Hello, world!');
});

export default cikRouter;