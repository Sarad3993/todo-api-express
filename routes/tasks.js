const express = require('express');
const router = express.Router();

const { getAllTasks } = require('../controllers/tasks');





//routes

router.route('/api/v1/tasks')
    .get(getAllTasks);









module.exports = router