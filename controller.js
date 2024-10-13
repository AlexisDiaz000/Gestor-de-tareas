// controller.js
class TaskController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      this.view.bindAddTask(this.handleAddTask.bind(this));
      this.view.bindEditTask(this.handleEditTask.bind(this));
      this.view.bindDeleteTask(this.handleDeleteTask.bind(this));
      this.view.bindToggleTask(this.handleToggleTask.bind(this));
  
      this.onTaskListChanged(this.model.getTasks());
    }
  
    onTaskListChanged = tasks => {
      this.view.displayTasks(tasks);
    }
  
    handleAddTask = (taskName, taskDescription) => {
      this.model.addTask(taskName, taskDescription);
      this.onTaskListChanged(this.model.getTasks());
    }
  
    handleEditTask = (id, taskName, taskDescription) => {
      this.model.editTask(id, taskName, taskDescription);
      this.onTaskListChanged(this.model.getTasks());
    }
  
    handleDeleteTask = id => {
      this.model.deleteTask(id);
      this.onTaskListChanged(this.model.getTasks());
    }
  
    handleToggleTask = id => {
      this.model.toggleTaskStatus(id);
      this.onTaskListChanged(this.model.getTasks());
    }
  }