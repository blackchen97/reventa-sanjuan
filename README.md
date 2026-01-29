# Reventa San Juan

Plataforma de compra y venta de productos de segunda mano.

## 🚀 Características

### Backend
- Node.js con Express y TypeScript
- Autenticación JWT
- CRUD de productos
- Arquitectura modular

### Frontend
- Next.js 14 con App Router
- TypeScript
- Tailwind CSS
- Responsive design

## 📁 Estructura del Proyecto

```

reventa-sanjuan/
├── backend/           # API REST
│   ├── src/
│   │   ├── modules/  # Módulos (auth, products)
│   │   ├── routes/   # Rutas de la API
│   │   └── config/   # Configuraciones
│   └── package.json
├── frontend/         # Aplicación web
│   ├── app/         # Next.js App Router
│   ├── components/  # Componentes reutilizables
│   └── services/    # Servicios API
└── README.md

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

🔧 Variables de Entorno

Backend (.env)

```
PORT=3000
JWT_SECRET=tu_super_secreto_jwt
NODE_ENV=development
```

📦 Scripts

Backend

· npm run dev: Inicia servidor en modo desarrollo
· npm run build: Compila TypeScript
· npm start: Inicia servidor en producción

Frontend

· npm run dev: Inicia servidor en modo desarrollo
· npm run build: Construye para producción
· npm start: Inicia servidor en producción

🌐 Endpoints API

· GET /api/products - Obtener todos los productos
· POST /api/products - Crear nuevo producto
· POST /api/auth/register - Registrar usuario
· POST /api/auth/login - Iniciar sesión

📝 Licencia

Este proyecto está bajo la licencia MIT.
