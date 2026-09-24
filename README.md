# CRUD JS

Aplicación CRUD de usuarios hecha en **JavaScript Vanilla** (sin frameworks), usando **Vite** como bundler/dev server y **json-server** como API REST simulada.

Permite listar usuarios paginados, crear, editar y eliminar registros desde una interfaz simple con tabla y modal.

## ✨ Características

- Listado de usuarios con paginación (`Prev` / `Next`)
- Alta y edición de usuarios mediante un modal con formulario
- Eliminación de usuarios
- Arquitectura por capas: `presentation`, `usecases`, `mappers`, `models`, `store`
- API simulada con `json-server`

## 🛠️ Tecnologías

- [Vite](https://vitejs.dev/)
- JavaScript (ES Modules), sin frameworks
- [json-server](https://github.com/typicode/json-server) como backend mock
- HTML + CSS

## 📁 Estructura del proyecto

```
src/
└── users/
    ├── models/          # Definición del modelo User
    ├── mappers/         # Conversión entre el modelo y el formato de la API
    ├── usecases/        # Lógica de negocio (get, save, delete, load por página)
    ├── store/           # Estado de la app (usuarios, paginación)
    ├── presentation/     # Componentes de UI (tabla, botones, modal)
    └── users-app.js      # Punto de entrada del módulo de usuarios
server/
└── db.json              # Base de datos simulada para json-server
```

## 🚀 Instalación

Cloná el repositorio e instalá las dependencias:

```bash
git clone <URL_DEL_REPOSITORIO>
cd crud-js
npm install
```

## ⚙️ Configuración

Este proyecto usa una variable de entorno para apuntar a la API. Copiá el archivo de ejemplo y completala:

```bash
cp .env.template .env
```

Editá `.env` con la URL del servidor (por defecto, `json-server` corre en el puerto `3001`):

```
VITE_BASE_URL=http://localhost:3001
```

## ▶️ Uso

Necesitás dos procesos corriendo en paralelo: el servidor de datos y el servidor de desarrollo.

**1. Levantar la API simulada (json-server):**

```bash
npm run server
```

Esto expone los datos de `server/db.json` en `http://localhost:3001`.

**2. Levantar la app (Vite):**

```bash
npm run dev
```

Abrí la URL que te muestre la terminal (por defecto `http://localhost:5173`).

## 📜 Scripts disponibles

| Script            | Descripción                                      |
|-------------------|---------------------------------------------------|
| `npm run dev`     | Inicia el servidor de desarrollo de Vite           |
| `npm run build`   | Genera el build de producción                     |
| `npm run preview` | Previsualiza el build de producción                |
| `npm run server`  | Levanta json-server con la base de datos mock      |

## 📄 Licencia

Este proyecto está disponible bajo la licencia MIT. Sentite libre de usarlo y modificarlo.
