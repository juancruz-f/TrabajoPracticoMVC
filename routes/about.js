const express = require('express');
const router = express.Router();
const {about} = require('../controllers/aboutController');//Destructurando index para tomar la propiedad.

router.get('/', about);


module.exports = router;