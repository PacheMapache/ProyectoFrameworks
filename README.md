# 🦝 Mapache Posts Manager

Una aplicación React moderna para gestionar publicaciones utilizando Zustand como store global y la API de JSONPlaceholder.

## ✨ Características

- **✅ Listar Posts**: Visualiza publicaciones desde JSONPlaceholder API
- **✏️ Editar Posts**: Modifica título y contenido de forma inline
- **🗑️ Eliminar Posts**: Elimina publicaciones con confirmación
- **🏪 Estado Global**: Gestión completa con Zustand (sin useState para datos)
- **📱 Responsive**: Diseño adaptativo con Tailwind CSS
- **⚡ Performance**: Optimizado para una experiencia fluida
- **🔄 Error Handling**: Manejo robusto de errores y estados de carga

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework frontend
- **Zustand** - Gestión de estado global
- **Vite** - Build tool y servidor de desarrollo
- **Tailwind CSS** - Framework de estilos utility-first
- **Lucide React** - Iconos modernos
- **JSONPlaceholder** - API REST para pruebas

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn

## 🚀 Instalación y Configuración

### 1. Clonar o crear el proyecto

```bash
# Si creas desde cero
npm create vite@latest mapache-posts-app -- --template react
cd mapache-posts-app
```

### 2. Instalar dependencias

```bash
# Dependencias principales
npm install react react-dom zustand lucide-react

# Dependencias de desarrollo
npm install -D vite @vitejs/plugin-react tailwindcss postcss autoprefixer
```

### 3. Configurar Tailwind CSS

```bash
# Inicializar Tailwind
npx tailwindcss init -p
```

### 4. Estructura de archivos

```
mapache-posts-app/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    └── index.css
```

### 5. Ejecutar la aplicación

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne automáticamente).

## 📁 Arquitectura del Proyecto

### Store de Zustand

El estado global se gestiona completamente con Zustand:

```javascript
// Variables con prefijo "Mapache-"
'Mapache-posts': [],          // Lista de publicaciones
'Mapache-loading': false,     // Estado de carga
'Mapache-error': null,        // Manejo de errores
'Mapache-editingPost': null,  // Post en edición
'Mapache-editForm': {}        // Formulario de edición
```

### Acciones Principales

- `Mapache-fetchPosts()` - Cargar posts desde la API
- `Mapache-deletePost(id)` - Eliminar un post
- `Mapache-startEditing(post)` - Iniciar edición
- `Mapache-savePost(id)` - Guardar cambios
- `Mapache-cancelEditing()` - Cancelar edición

## 🎯 Funcionalidades Detalladas

### Listar Posts

- Carga automática al iniciar la aplicación
- Muestra los primeros 10 posts para optimizar rendimiento
- Diseño en tarjetas responsive
- Estado de carga con spinner animado

### Editar Posts

- Edición inline sin modales
- Campos de título y contenido
- Validación básica antes de guardar
- Botones de guardar/cancelar intuitivos

### Eliminar Posts

- Confirmación antes de eliminar
- Actualización inmediata del estado
- Feedback visual con iconos

### Manejo de Errores

- Estados de error personalizados
- Botón de reintento
- Mensajes de error descriptivos

## 🎨 Componentes

### `MapachePostsApp`
Componente principal que maneja el layout y la lógica de carga inicial.

### `MapachePostCard`
Componente individual para cada publicación con funcionalidades de edición y eliminación.

## 📡 API Integration

La aplicación consume la API de JSONPlaceholder:

- **GET** `/posts` - Obtener lista de posts
- **PUT** `/posts/:id` - Actualizar un post
- **DELETE** `/posts/:id` - Eliminar un post

> **Nota**: JSONPlaceholder es una API de prueba, por lo que los cambios no persisten realmente.

## 🔧 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build
```

## 🎯 Decisiones de Diseño

### ¿Por qué Zustand?

- **Simplicidad**: API minimalista sin boilerplate
- **Performance**: Re-renders optimizados
- **TypeScript**: Excelente soporte nativo
- **Tamaño**: Librería muy ligera (2kb)

### ¿Por qué Tailwind CSS?

- **Utility-first**: Desarrollo rápido y consistente
- **Customización**: Fácil de personalizar y extender
- **Performance**: CSS optimizado automáticamente
- **Responsive**: Sistema de breakpoints integrado

## 🚧 Mejoras Futuras

- [ ] Paginación para manejar más posts
- [ ] Búsqueda y filtrado de posts
- [ ] Crear nuevos posts
- [ ] Validación avanzada de formularios
- [ ] Tests unitarios y de integración
- [ ] PWA (Progressive Web App)
- [ ] Dark mode
- [ ] Internacionalización (i18n)

## 🐛 Solución de Problemas

### Error 404 en localhost

Asegúrate de que:
- El archivo `index.html` esté en la raíz del proyecto
- Vite esté corriendo (`npm run dev`)
- Accedas a la URL correcta mostrada en la terminal

### Error "vite command not found"

```bash
npm install -D vite @vitejs/plugin-react
```

### Estilos de Tailwind no funcionan

Verifica que `src/index.css` contenga:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 👨‍💻 Desarrollo

### Estructura recomendada para proyectos grandes:

```
src/
├── components/
│   ├── PostCard/
│   ├── PostList/
│   └── Layout/
├── store/
│   └── postsStore.js
├── services/
│   └── apiService.js
├── hooks/
│   └── useMapacheStore.js
├── utils/
└── constants/
```

## 📄 Licencia

Este proyecto es de uso educativo y demostrativo.

## 🤝 Contribución

1. Fork del proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📞 Contacto

¿Preguntas o sugerencias? ¡El mapache está aquí para ayudar! 🦝

---

**¡Disfruta gestionando tus posts con el poder del mapache!** 🚀
