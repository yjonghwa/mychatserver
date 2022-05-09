const express = require('express');
const user = require('../controller/user.controller.js');
const {encode} = require('../middlewares/jwt.js');

const router = express.Router();

router
  .post('/login/:userId', encode, (req, res, next) => { });

export default router;
