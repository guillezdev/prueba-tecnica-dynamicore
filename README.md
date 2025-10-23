# Prueba Técnica para DynamiCore

Una aplicación React moderna desarrollada con **TypeScript**, **Vite**, **Tailwind CSS** y **shadcn/ui** que implementa una lista de usuarios con filtros, paginación y un formulario de creación de usuarios.

## 🚀 Características Implementadas

### ✅ **Tarea 1: Lista de Usuarios**
- **Componente funcional** que recibe lista de usuarios como props
- **Ordenamiento alfabético** automático (A-Z / Z-A)
- **Filtros avanzados** por nombre y edad
- **Paginación** (9 usuarios por página)
- **Búsqueda en tiempo real**
- **Interfaz responsive** con diseño moderno

### ✅ **Tarea 2: Formulario de Usuario**
- **Hooks de estado** para manejo de datos del formulario
- **Validación con Zod** para campos obligatorios
- **Verificación de campos vacíos** antes de envío
- **Visualización de datos** enviados debajo del formulario
- **Estados de carga** y manejo de errores
- **Componentes reutilizables** para campos de formulario

## 🛠️ Tecnologías Utilizadas

- **React 19** con TypeScript
- **Vite** para desarrollo y build
- **Tailwind CSS** para estilos
- **shadcn/ui** como sistema de componentes
- **Radix UI** como primitivos base
- **Lucide React** para iconografía
- **Zod** para validación de formularios
- **React Router DOM** para navegación
- **Class Variance Authority** para variantes de componentes

## 📦 Instalación y Ejecución

### Prerrequisitos
- **Node.js** >= 18.0.0
- **pnpm** (recomendado) o npm

### Pasos para ejecutar el proyecto

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd prueba-tecnica
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   # o
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   pnpm dev
   # o
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

### Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Inicia el servidor de desarrollo

# Producción
pnpm build        # Construye la aplicación para producción
pnpm preview      # Preview de la build de producción

# Calidad de código
pnpm lint         # Ejecuta ESLint para revisar el código
```

## 📁 Organización de Carpetas

```
src/
├── components/           # Componentes reutilizables
│   ├── ui/              # 🎨 Componentes primitivos de shadcn/ui
│   │   ├── button.tsx   # Botones base del design system
│   │   ├── input.tsx    # Inputs base del design system
│   │   ├── card.tsx     # Cards base del design system
│   │   ├── badge.tsx    # Badges base del design system
│   │   └── ...          # Otros primitivos de UI
│   ├── form/            # Componentes relacionados con formularios
│   │   └── form-field.tsx
│   ├── nav/             # Componentes de navegación
│   │   └── navbar.tsx
│   ├── misc/            # Componentes misceláneos
│   │   └── theme-switcher.tsx
│   └── pages/           # Componentes específicos de páginas
│       ├── users-list/  # Componentes de la lista de usuarios
│       └── users-form/  # Componentes del formulario
├── hooks/               # 🎣 Custom hooks para lógica de negocio
│   ├── use-user-list.tsx   # Hook para manejo de lista de usuarios
│   └── use-user-form.tsx   # Hook para manejo de formularios
├── pages/               # 📄 Páginas principales de la aplicación
│   ├── users-list-page.tsx
│   └── user-form-page.tsx
├── mock/                # 📊 Datos de prueba y mocks
│   └── user-list-mocks.ts
├── lib/                 # 🔧 Utilidades y configuraciones
│   └── utils.ts
└── assets/              # 🎨 Recursos estáticos
```

### 🎨 **Componentes UI (shadcn/ui)**

La carpeta `src/components/ui/` contiene todos los **componentes primitivos** del design system basados en shadcn/ui:

- **Propósito**: Componentes base reutilizables y consistentes
- **Características**: 
  - Basados en Radix UI primitives
  - Completamente tipados con TypeScript
  - Variantes configurables con CVA
  - Accesibilidad integrada
  - Temas claro/oscuro incluidos

### 🎣 **Custom Hooks**

Los hooks personalizados encapsulan la lógica de negocio:

- **`use-user-list.tsx`**: Maneja filtrado, ordenamiento y paginación
- **`use-user-form.tsx`**: Maneja estado del formulario y validación con Zod

### 📱 **Arquitectura de Componentes**

```
Page Components (Container)
    ↓
Feature Components (Business Logic)
    ↓
UI Components (Presentation)
```

---

**Desarrollado por guillezdev con ❤️ para DynamiCore**
