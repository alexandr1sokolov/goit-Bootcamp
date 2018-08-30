const express = require('express');
const router = express.Router();
const todoControllers = require('../controllers/todoControllers');

router.get('/tasks', todoControllers.getTasks);

router.get('/tasks/:id', todoControllers.getTask);

router.post('/tasks', todoControllers.addTask);

router.put('/tasks/:id', todoControllers.editTask);

router.delete('/tasks/:id', todoControllers.deleteTask);

module.exports = router;