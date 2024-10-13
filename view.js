class TaskView {
    constructor() {
      this.app = this.getElement('#root');
      
      this.form = this.createElement('form');
      this.nameInput = this.createElement('input');
      this.nameInput.type = 'text';
      this.nameInput.placeholder = 'Nombre de la tarea';
      this.nameInput.name = 'name';
      
      this.descriptionInput = this.createElement('textarea');
      this.descriptionInput.placeholder = 'Descripción de la tarea';
      this.descriptionInput.name = 'description';
      
      this.submitButton = this.createElement('button');
      this.submitButton.textContent = 'Agregar Tarea';
      
      this.form.append(this.nameInput, this.descriptionInput, this.submitButton);
      
      this.taskList = this.createElement('ul', 'task-list');
      
      this.app.append(this.form, this.taskList);
    }
  
    createElement(tag, className) {
      const element = document.createElement(tag);
      if (className) element.classList.add(className);
      return element;
    }
  
    getElement(selector) {
      return document.querySelector(selector);
    }
  
    get _taskName() {
      return this.nameInput.value;
    }
  
    get _taskDescription() {
      return this.descriptionInput.value;
    }
  
    _resetInput() {
      this.nameInput.value = '';
      this.descriptionInput.value = '';
    }
  
    displayTasks(tasks) {
      while (this.taskList.firstChild) {
        this.taskList.removeChild(this.taskList.firstChild);
      }
  
      if (tasks.length === 0) {
        const p = this.createElement('p');
        p.textContent = 'No hay tareas. ¡Añade una!';
        this.taskList.append(p);
      } else {
        tasks.forEach(task => {
          const li = this.createElement('li');
          li.id = task.id;
  
          const checkbox = this.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.checked = task.completed;
  
          const taskName = this.createElement('span');
          taskName.textContent = task.name;
          if (task.completed) taskName.style.textDecoration = 'line-through';
  
          const taskDescription = this.createElement('p');
          taskDescription.textContent = task.description;
  
          const editButton = this.createElement('button', 'edit');
          editButton.textContent = 'Editar';
  
          const deleteButton = this.createElement('button', 'delete');
          deleteButton.textContent = 'Eliminar';
  
          li.append(checkbox, taskName, taskDescription, editButton, deleteButton);
          this.taskList.append(li);
        });
      }
    }
  
    bindAddTask(handler) {
      this.form.addEventListener('submit', event => {
        event.preventDefault();
        if (this._taskName && this._taskDescription) {
          handler(this._taskName, this._taskDescription);
          this._resetInput();
        }
      });
    }
  
    bindDeleteTask(handler) {
      this.taskList.addEventListener('click', event => {
        if (event.target.className === 'delete') {
          const id = parseInt(event.target.parentElement.id);
          handler(id);
        }
      });
    }
  
    bindEditTask(handler) {
      this.taskList.addEventListener('click', event => {
        if (event.target.className === 'edit') {
          const id = parseInt(event.target.parentElement.id);
          const taskName = event.target.parentElement.querySelector('span').textContent;
          const taskDescription = event.target.parentElement.querySelector('p').textContent;
          const newName = prompt('Editar nombre de la tarea', taskName);
          const newDescription = prompt('Editar descripción de la tarea', taskDescription);
          if (newName && newDescription) {
            handler(id, newName, newDescription);
          }
        }
      });
    }
  
    bindToggleTask(handler) {
      this.taskList.addEventListener('change', event => {
        if (event.target.type === 'checkbox') {
          const id = parseInt(event.target.parentElement.id);
          handler(id);
        }
      });
    }
  }
