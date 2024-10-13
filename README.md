# Aplicación Web de Gestión de Tareas

## Descripción del Proyecto

La **Aplicación Web de Gestión de Tareas** es una herramienta diseñada para ayudar a los usuarios a organizar y administrar sus tareas diarias de manera eficiente. Utilizando el patrón de diseño **Modelo-Vista-Controlador (MVC)**, la aplicación permite a los usuarios agregar, editar, completar y eliminar tareas con una interfaz intuitiva y fácil de usar.

## Características

- **Agregar Tareas**: Permite a los usuarios ingresar el nombre y la descripción de una tarea.
- **Editar Tareas**: Posibilidad de modificar el nombre y la descripción de tareas existentes.
- **Eliminar Tareas**: Funcionalidad para eliminar tareas no deseadas.
- **Completar Tareas**: Los usuarios pueden marcar tareas como completadas, con una representación visual que muestra el estado de cada tarea.
- **Almacenamiento Local**: Utiliza `localStorage` para almacenar las tareas, lo que permite que los datos persistan incluso después de cerrar la aplicación.

## Tecnologías Utilizadas

- **HTML**: Para la estructura básica de la aplicación.
- **CSS**: Para el diseño y la presentación visual.
- **JavaScript**: Para la lógica de la aplicación y la interacción del usuario.
- **Patrón MVC**: Organización del código en Modelos, Vistas y Controladores para una mejor mantenibilidad.
- **GitHub**: Almacenamiento del repositorio.
- **GitHub Pages**: Como vista  del proyecto.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

/gestor-tareas │ ├── index.html # Archivo principal HTML ├── styles.css # Estilos CSS ├── model.js # Lógica del Modelo ├── view.js # Lógica de la Vista └── controller.js # Lógica del Controlador

## Uso

1. **Agregar una nueva tarea**:
   - Completa el campo "Nombre de la tarea" y el área de "Descripción de la tarea".
   - Haz clic en "Agregar Tarea" para añadir la tarea a la lista.

2. **Editar una tarea**:
   - Haz clic en el botón "Editar" junto a la tarea que deseas modificar.
   - Introduce el nuevo nombre y la descripción cuando se te solicite.

3. **Eliminar una tarea**:
   - Haz clic en el botón "Eliminar" junto a la tarea que deseas eliminar.

4. **Completar una tarea**:
   - Marca la casilla de verificación para marcar la tarea como completada. El nombre de la tarea se mostrará con una línea a través.

## Modelos del Producto

La aplicación está diseñada utilizando el patrón de arquitectura **Modelo-Vista-Controlador (MVC)**, que proporciona una separación clara de preocupaciones. Esto facilita el mantenimiento y la escalabilidad de la aplicación:

- **Modelo**: Gestiona la lógica de los datos (clase `Task` y `TaskModel`).
- **Vista**: Se encarga de la representación visual de los datos (clase `TaskView`).
- **Controlador**: Coordina la interacción entre el modelo y la vista (clase `TaskController`).

## Descripción Técnica

### Modelo

El modelo de datos se basa en la clase `Task`, que define la estructura de cada tarea, incluyendo propiedades como `id`, `name`, `description`, `createdAt` y `completed`. La clase `TaskModel` gestiona la colección de tareas, proporcionando métodos para agregar, editar, eliminar y cambiar el estado de las tareas. La persistencia de datos se logra mediante el uso de `localStorage`, lo que asegura que las tareas se mantengan incluso al recargar la página.

### Vista

La vista se compone de un formulario para la entrada de tareas y una lista para mostrar las tareas actuales. La clase `TaskView` se encarga de crear y actualizar la interfaz de usuario según las interacciones del usuario y el estado actual del modelo.

### Controlador

El controlador actúa como intermediario entre el modelo y la vista, gestionando eventos como la adición, edición y eliminación de tareas. A través de un enfoque orientado a eventos, se asegura de que las acciones del usuario se reflejen en la interfaz y en el modelo.


