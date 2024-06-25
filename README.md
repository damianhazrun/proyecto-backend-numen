# Documentación de Uso del Proyecto de Backend

## 1. Configuración Inicial

- Clona el repositorio del proyecto desde [repositorio](https://github.com/tu-repositorio).
- Instala las dependencias utilizando `npm install`.
- Crea un archivo `.env` con las siguientes variables de entorno:
    - `MONGO_URL`: URL de conexión a la base de datos MongoDB.
    - `SESSION_SECRET`: Clave secreta para la sesión.
    - `JWT_SECRET_KEY`: Clave secreta para firmar los tokens JWT.

## 2. Estructura del Proyecto

- El proyecto sigue una estructura MVC (Modelo-Vista-Controlador) con los siguientes componentes:
    - `models`: Define los esquemas de datos para usuarios, alumnos, docentes y no docentes.
    - `controllers`: Contiene la lógica de negocio para cada módulo (alumnos, docentes, obras de arte, países, etc.).
    - `routes`: Define las rutas y sus controladores asociados.
    - `middlewares`: Contiene los middlewares para verificar roles, tokens y registrar timestamps.

## 3. Rutas y Controladores

### Alumnos

- Crear un alumno:
    - Ruta: `POST /alumnos/new-alumno`
    - Parámetros: `{ nombre, apellido, dni, fecha_nacimiento, curso, email, telefono, direccion }`
    - Acceso: No docentes y administrador

- Obtener lista de alumnos:
    - Ruta: `GET /alumnos`
    - Acceso: Docentes, no docentes y administrador

- Buscar alumno por ID:
    - Ruta: `GET /alumnos/id/:id`
    - Acceso: No docentes y administrador

- Actualizar datos de alumno por ID:
    - Ruta: `PUT /alumnos/update-alumno/id/:id`
    - Parámetros: `{ nombre, apellido, dni, fecha_nacimiento, curso, email, telefono, direccion }`
    - Acceso: No docentes y administrador

- Cambiar a irregular:
    - Ruta: `DELETE /alumnos/irregular/id/:id`
    - Acceso: No docentes y administrador

- Eliminar alumno por ID:
    - Ruta: `DELETE /alumnos/delete-alumno/id/:id`
    - Acceso: Administrador

### Docentes

- Crear un docente:
    - Ruta: `POST /docentes/new-docente`
    - Parámetros: `{ nombre, apellido, dni, fecha_nacimiento, curso, email, telefono, direccion }`
    - Acceso: No docentes y administrador

- Obtener lista de docentes:
    - Ruta: `GET /docentes`
    - Acceso: No docentes y administrador

- Buscar docente por ID:
    - Ruta: `GET /docentes/id/:id`
    - Acceso: No docentes y administrador

- Actualizar datos del docente por ID:
    - Ruta: `PUT /docentes/update-docente/id/:id`
    - Parámetros: `{ nombre, apellido, dni, fecha_nacimiento, curso, email, telefono, direccion }`
    - Acceso: No docentes y administrador

- Establecer docente con licencia por ID:
    - Ruta: `DELETE /docentes/licencia/id/:id`
    - Acceso: No docentes y administrador

- Eliminar docente por ID:
    - Ruta: `DELETE /docentes/delete-docente/id/:id`
    - Acceso: Administrador

### No Docentes

- Crear un no docente:
    - Ruta: `POST /no-docentes/new-nodocente`
    - Parámetros: `{ nombre, apellido, dni, fecha_nacimiento, curso, email, telefono, direccion }`
    - Acceso: No docentes y administrador

- Crear un no docente aleatorio (con FAKER):
    - Ruta: `POST /no-docentes/new-nodocente-random`
    - Acceso: Público (sin autenticación)

- Obtener lista de no docentes:
    - Ruta: `GET /no-docentes`
    - Acceso: No docentes y administrador

- Buscar no docente por ID:
    - Ruta: `GET /no-docentes/id/:id`
    - Acceso: No docentes y administrador

- Actualizar datos del no docente por ID:
    - Ruta: `PUT /no-docentes/update-nodocente/id/:id`
    - Parámetros: `{ nombre, apellido, dni, fecha_nacimiento, curso, email, telefono, direccion }`
    - Acceso: No docentes y administrador

- Establecer no docente con licencia por ID:
    - Ruta: `DELETE /no-docentes/licencia/id/:id`
    - Acceso: No docentes y administrador

- Eliminar no docente por ID:
    - Ruta: `DELETE /no-docentes/delete-nodocente/id/:id`
    - Acceso: Administrador


### Autenticación

- Registrar un Nuevo Usuario:
    - Ruta: `POST /auth/register`
    - Parámetros: `{ nombre, apellido, email, password }`
    - Acceso: Público (sin autenticación)

- Obtener Lista de Usuarios
    - Ruta: `GET /auth/users`
    - Acceso: Administrador

- Iniciar Sesión
    - Ruta: `POST /auth/login`
    - Parámetros: `{ email, password }`
    - Acceso: Público (sin autenticación)

- Cerrar Sesión
    - Ruta: `POST /auth/logout`
    - Acceso: Público (sin autenticación)

## 4. Ejecución del Servidor

- Ejecuta el servidor utilizando `npm start` para iniciar el servidor en modo producción.
- Ejecuta `npm run dev` para iniciar el servidor en modo desarrollo utilizando Nodemon.


