# API de Gestión de Usuarios

Este proyecto es una API RESTful creada con **Node.js** y **Express** para gestionar usuarios en una base de datos MySQL. Está diseñada para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar), proporcionando una manera eficiente y escalable de manipular datos de usuarios.

## Descripción del Proyecto

La API se conecta a una base de datos MySQL, permitiendo almacenar y manipular la información de usuarios mediante un conjunto de endpoints organizados y seguros. Este sistema es ideal para aplicaciones web que requieren gestión de usuarios o administración de perfiles.

### Características

- **CRUD Completo**: La API permite la creación, consulta, actualización y eliminación de registros de usuarios.
- **Conexión con MySQL**: Usa MySQL como sistema de gestión de base de datos, manejando conexiones y consultas de forma eficiente.
- **Modularidad**: Organizado en controladores y rutas, lo cual facilita la extensión y mantenimiento.
- **Gestión de Errores**: Implementación de respuestas de error detalladas para mejorar la experiencia del usuario y ayudar en la depuración.
- **Formato JSON**: Interacción con la API mediante datos en formato JSON, estandarizado y fácil de manejar.

## Endpoints

Cada operación que ofrece la API está documentada en los endpoints correspondientes:

### 1. Obtener todos los usuarios
   - **Ruta**: `/users`
   - **Método**: `GET`
   - **Descripción**: Devuelve una lista de todos los usuarios registrados.

### 2. Obtener un usuario por ID
   - **Ruta**: `/users/:id`
   - **Método**: `GET`
   - **Descripción**: Obtiene los datos de un usuario específico según el ID proporcionado en la ruta.

### 3. Crear un nuevo usuario
   - **Ruta**: `/users`
   - **Método**: `POST`
   - **Descripción**: Permite agregar un nuevo usuario a la base de datos.
   - **Datos de Entrada**:
     ```json
     {
       "name": "Nombre del usuario",
       "edad": 25,
       "profesion": "Profesión",
       "curso": "Curso"
     }
     ```

### 4. Actualizar un usuario
   - **Ruta**: `/users/:id`
   - **Método**: `PUT`
   - **Descripción**: Actualiza la información de un usuario específico.
   - **Datos de Entrada**:
     ```json
     {
       "name": "Nuevo nombre",
       "edad": 26,
       "profesion": "Nueva profesión",
       "curso": "Nuevo curso"
     }
     ```

### 5. Eliminar un usuario
   - **Ruta**: `/users/:id`
   - **Método**: `DELETE`
   - **Descripción**: Elimina un usuario de la base de datos en función de su ID.

## Estructura del Proyecto

La estructura de archivos está organizada para lograr un código claro y mantenible:

```plaintext
tu_repositorio/
├── controllers/
│   └── userController.js    # Controladores para manejar la lógica de cada endpoint
├── routes/
│   └── apiRoutes.js         # Definición de las rutas de la API
├── db.js                    # Configuración de la conexión a MySQL
├── .env                     # Variables de entorno (configuración segura)
├── .gitignore               # Archivos y carpetas a ignorar por Git
├── package.json             # Dependencias y scripts de Node.js
└── server.js                # Archivo principal que inicializa el servidor Express
