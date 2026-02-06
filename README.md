# Restaurante BOB TORONJA - React + TypeScript

Esta aplicación ha sido reconstruida usando React con TypeScript para mejorar la mantenibilidad, escalabilidad y experiencia de desarrollo.

## 🚀 Características

- **React 18** con TypeScript para type safety
- **React Router** para navegación entre páginas
- **Vite** como build tool para desarrollo rápido
- **Componentes reutilizables** para mejor organización
- **Sistema de rutas** dinámico
- **Modal system** con hooks personalizados
- **Responsive design** compatible con dispositivos móviles

## 📁 Estructura del Proyecto

```
react-app/
├── src/
│   ├── components/      # Componentes reutilizables (Header, Footer, Modal)
│   ├── pages/          # Páginas de la aplicación (Home, Menu, About, etc.)
│   ├── data/           # Datos del menú y configuraciones
│   ├── types/          # Definiciones de TypeScript
│   ├── App.tsx         # Componente principal
│   └── main.tsx        # Punto de entrada
├── public/             # Archivos estáticos
└── package.json        # Dependencias del proyecto
```

## 🛠️ Instalación y Uso

### Requisitos previos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
cd react-app
npm install
```

### Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build para producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

### Preview del build

```bash
npm run preview
```

## 📄 Páginas Disponibles

- **Home** (`/`) - Página principal con hero section, servicios y call-to-actions
- **Menú** (`/menu`) - Catálogo completo con filtros por categoría y paginación
- **Sobre Nosotros** (`/about`) - Historia y misión del restaurante
- **Eventos** (`/events`) - Información sobre eventos privados
- **Servicios** (`/services`) - Servicios ofrecidos por el restaurante

## 🎨 Tecnologías Utilizadas

- React 18
- TypeScript
- React Router DOM
- Vite
- CSS Modules
- ESLint

## 📦 Componentes Principales

### Header
Navegación principal con menú responsive y scroll effects.

### Modal
Sistema de modales reutilizable para notificaciones y confirmaciones.

### Menu
Sistema de filtrado y paginación para el catálogo de productos.

## 🔄 Migración desde HTML/JS

La aplicación original en HTML/JS vanilla ha sido completamente recreada en React manteniendo:
- ✅ Todas las funcionalidades existentes
- ✅ El mismo diseño visual
- ✅ Datos del menú completo
- ✅ Navegación entre páginas
- ✅ Modales y interacciones

Mejoras añadidas:
- ✅ Type safety con TypeScript
- ✅ Componentes reutilizables
- ✅ Mejor organización del código
- ✅ Hot Module Replacement en desarrollo
- ✅ Build optimizado para producción

## 🤝 Contribución

Para contribuir al proyecto:
1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es propiedad de BOB TORONJA Restaurant.
