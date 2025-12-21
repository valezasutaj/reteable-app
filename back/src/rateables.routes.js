const express = require('express');
const router = express.Router();
const controller = require('./rateables.controller');

router.get('/rateables', controller.getRateables);
router.post('/rateables/:id/like', controller.likeItem);

module.exports = router;
