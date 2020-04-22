const express = require('express');
const TodoController = require('../todosController/todos');

const router = express.Router();

router.get('/todos', TodoController.getAllTodos);
router.get('/todos/:id', TodoController.getTodo);
router.post('/todos', TodoController.createTodo);
router.put('/todos', TodoController.updateTodo);
router.delete('/todos', TodoController.deleteTodo);

module.exports = router;