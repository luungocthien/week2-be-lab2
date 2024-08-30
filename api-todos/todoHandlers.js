const ToDo = require("./todoLib");

const getAllTodos = (req, res) => {
  const tasks = ToDo.getAll();
  res.json(tasks);
};

const createTodo = (req, res) => {
  const { task, completed, dueDate } = req.body;
  const newTask = ToDo.addOne(task, completed, dueDate);
  if (newTask) {
    res.json(newTask);
  } else {
    res.status(500).json({ message: "Failed to create task" });
  }
};

const getTodoById = (req, res) => {
  const todoId = req.params.todoId;
  const task = ToDo.findById(todoId);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

const updateTodo = (req, res) => {
  const todoId = req.params.todoId;
  const { task, completed, dueDate } = req.body;
  const updatedTask = ToDo.updateOneById(todoId, { task, completed, dueDate });
  if (updatedTask) {
    res.json(updatedTask);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

const deleteTodo = (req, res) => {
  const todoId = req.params.todoId;
  const deleteTask = ToDo.deleteOneById(todoId);
  if (deleteTask) {
    res.json({ message: "Task deleted successfully" });
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

module.exports = {
  getAllTodos,

  createTodo,

  getTodoById,

  updateTodo,

  deleteTodo,
};
