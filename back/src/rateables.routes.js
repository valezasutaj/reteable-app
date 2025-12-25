const express = require('express');
const router = express.Router();
const controller = require('./rateables.controller');

router.get('/rateables', controller.getRateables);
router.post('/rateables/:id/skip', controller.skipItem);
router.post('/rateables/:id/like', controller.likeItem);
router.delete('/rateables/:id', controller.deleteItem);

module.exports = router;