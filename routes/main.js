const express = require('express');
const router = express.Router();
const {main} = require('../controllers/mainController');//Destructurando index para tomar la propiedad.

router.get('/', main);


module.exports = router;