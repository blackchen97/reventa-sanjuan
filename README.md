# 🛒 Reventa San Juan

Plataforma de compra y venta de productos de segunda mano.

## 🚀 Características

### Backend
- ✅ Node.js + Express + TypeScript
- ✅ API REST con autenticación JWT
- ✅ CRUD completo de productos
- ✅ Arquitectura modular y escalable
- ✅ Variables de entorno configurables

### Frontend
- ✅ Vite + React 18 + TypeScript
- ✅ Tailwind CSS para estilos
- ✅ React Router para navegación SPA
- ✅ Componentes reutilizables
- ✅ Diseño completamente responsive
- ✅ Interceptores de axios para autenticación

## 📁 Estructura del Proyecto

```

reventa-sanjuan/
├── backend/           # API REST (puerto 3000)
│   ├── src/
│   │   ├── modules/  # Módulos de negocio
│   │   ├── routes/   # Rutas de la API
│   │   └── config/   # Configuraciones
├── frontend/         # Aplicación web (puerto 3001)
│   ├── src/
│   │   ├── components/ # Componentes UI
│   │   ├── pages/     # Páginas de la app
│   │   ├── services/  # Servicios API
│   │   └── types/     # Tipos TypeScript
└── README.md         # Esta documentación

```

## 🛠️ Instalación

### Backend
```bash
cd backend
npm install
npm run dev
```

Frontend

```bash
cd frontend
npm install
npm run dev
```

🌐 URLs

· Frontend: http://localhost:3001
· Backend API: http://localhost:3000
· Health Check: http://localhost:3000/health

🔧 Endpoints API

Autenticación

· POST /api/auth/register - Registrar usuario
· POST /api/auth/login - Iniciar sesión
· GET /api/auth/profile - Perfil de usuario

Productos

· GET /api/products - Listar productos
· GET /api/products/:id - Obtener producto
· POST /api/products - Crear producto
· PUT /api/products/:id - Actualizar producto
· DELETE /api/products/:id - Eliminar producto

📦 Tecnologías Utilizadas

Backend

· Node.js
· Express
· TypeScript
· bcryptjs (hashing)
· JSON Web Tokens

Frontend

· Vite
· React 18
· TypeScript
· Tailwind CSS
· React Router
· Axios

📄 Licencia

MIT
