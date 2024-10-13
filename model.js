// model.js
class Task {
    constructor(id, name, description, createdAt = new Date(), completed = false) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.createdAt = createdAt;
      this.completed = completed;
    }
  }
  
  class TaskModel {
    constructor() {
      this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }
  
    addTask(name, description) {
      const id = this.tasks.length > 0 ? Math.max(...this.tasks.map(task => task.id)) + 1 : 1;
      const task = new Task(id, name, description);
      this.tasks.push(task);
      this._commit();
      return task;
    }
  
    editTask(id, name, description) {
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        task.name = name;
        task.description = description;
        this._commit();
      }
    }
  
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
      this._commit();
    }
  
    toggleTaskStatus(id) {
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        task.completed = !task.completed;
        this._commit();
      }
    }
  
    getTasks() {
      return this.tasks;
    }
  
    _commit() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }