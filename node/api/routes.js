const express = require('express');
const router = express.Router();
const textProcessors = require('./textProcessor');

let counter = 0;
/**
 * GET api/status
 */
router.get('/status', (req, res) => {counter++; console.log(`[${counter}] status requested`); res.send({status: 'OK'})});

/**
 * POST api/text
 */
router.post('/text', textProcessors.parse);

/**
 * POST api/json
 */
router.post('/json', textProcessors.parse);

/**
 * GET api/static
 */
// router.use('/static', express.static('docs'));


module.exports = router;