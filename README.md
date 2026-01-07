# Portfolio CV - Carlos Sipan

Portfolio personal desarrollado con React y TypeScript, aplicando principios de arquitectura limpia y buenas prácticas de desarrollo.

## 🚀 Despliegue en GitHub Pages

### Opción 1: Despliegue Automático con GitHub Actions (Recomendado)

1. **Crea el repositorio en GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/cv.git
   git push -u origin main
   ```

2. **Configura GitHub Pages**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: GitHub Actions

3. **El workflow se ejecutará automáticamente** cada vez que hagas push a `main`
   - Tu sitio estará disponible en: `https://TU_USUARIO.github.io/cv/`

### Opción 2: Despliegue Manual

```bash
# Construir el proyecto
npm run build

# Desplegar a GitHub Pages
npm run deploy
```

## 📝 Configuración Importante

Antes de desplegar, **actualiza** el archivo `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/cv/', // Cambia 'cv' por el nombre de tu repositorio
  // ...
})
```

Si tu repositorio se llama `portfolio`, usa `base: '/portfolio/'`
Si usas `TU_USUARIO.github.io` como nombre de repo, usa `base: '/'`

## 🛠️ Instalación y Ejecución Local

### Prerrequisitos
- Node.js 18+ 
- npm o pnpm

### Instalación
```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

La aplicación estará disponible en `http://localhost:5173/`

## 🛠️ Tecnologías

- **React 18**: Biblioteca de interfaz de usuario
- **TypeScript**: Tipado estático
- **Vite**: Build tool y dev server ultra rápido
- **Tailwind CSS**: Framework de CSS utility-first
- **Lucide React**: Iconos modernos
- **PostCSS**: Procesador de CSS

## 🏗️ Arquitectura

El proyecto sigue una estructura de arquitectura limpia con separación de responsabilidades:

```
src/
├── components/          # Componentes React organizados por responsabilidad
│   ├── common/         # Componentes reutilizables (Button, Card, Badge, etc.)
│   ├── layout/         # Componentes de layout (Navigation, Footer)
│   └── sections/       # Secciones de la página (Hero, Skills, Projects, etc.)
├── data/               # Datos de la aplicación separados de la lógica
│   ├── personalInfo.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── projects.ts
│   └── navigation.ts
├── types/              # Definiciones de tipos TypeScript
│   └── index.ts
└── App.tsx            # Componente principal
```

## ✨ Características

- **TypeScript**: Tipado fuerte para mayor seguridad y mantenibilidad
- **Componentes modulares**: Cada componente tiene una única responsabilidad
- **Separación de datos**: Los datos están separados de la presentación
- **Reutilización**: Componentes comunes reutilizables (Button, Card, Badge, etc.)
- **Responsive**: Diseño adaptable a diferentes dispositivos
- **Clean Code**: Código limpio siguiendo principios SOLID

## 🎯 Principios aplicados

### 1. Single Responsibility Principle (SRP)
Cada componente tiene una única responsabilidad bien definida.

### 2. Separation of Concerns
- Datos en carpeta `data/`
- Tipos en carpeta `types/`
- Componentes organizados por función

### 3. DRY (Don't Repeat Yourself)
Componentes comunes reutilizables para evitar duplicación.

### 4. Composition over Inheritance
Componentes compuestos de otros componentes más pequeños.

### 5. Props Typing
Todas las props están fuertemente tipadas con TypeScript.

## 🚀 Mejoras implementadas

### Antes
- Componente monolítico de 500+ líneas
- Datos mezclados con la presentación
- Sin tipos definidos
- Difícil de mantener y testear

### Después
- Componentes pequeños y enfocados
- Datos separados en archivos independientes
- Tipos TypeScript bien definidos
- Estructura escalable y mantenible
- Fácil de testear y extender

## 📦 Componentes

### Common
- `Button`: Botón reutilizable con variantes (primary, secondary, outline)
- `Card`: Tarjeta base para contenido
- `Badge`: Etiquetas para categorización
- `SectionHeader`: Encabezado de sección consistente

### Layout
- `Navigation`: Barra de navegación responsive
- `Footer`: Pie de página con información de contacto

### Sections
- `HeroSection`: Sección principal de presentación
- `SkillsSection`: Muestra de habilidades técnicas
- `ProjectsSection`: Proyectos destacados
- `ExperienceSection`: Experiencia profesional

## 🔧 Extensibilidad

Para añadir nuevo contenido:

1. **Nuevo tipo de dato**: Definir en `src/types/index.ts`
2. **Nuevos datos**: Añadir en `src/data/`
3. **Nuevo componente común**: Crear en `src/components/common/`
4. **Nueva sección**: Crear en `src/components/sections/`

## � Personalización

### 1. Cambiar la información personal
Edita [src/data/personalInfo.ts](src/data/personalInfo.ts)

### 2. Actualizar habilidades
Edita [src/data/skills.ts](src/data/skills.ts)

### 3. Agregar proyectos
Edita [src/data/projects.ts](src/data/projects.ts)

#### Para agregar imágenes a los proyectos:
```typescript
{
  title: "Mi Proyecto",
  images: [
    "/images/screenshot1.png",  // Coloca las imágenes en public/images/
    "/images/screenshot2.png",
    "https://example.com/image.jpg"  // O usa URLs externas
  ]
  // ...
}
```

### 4. Modificar experiencia laboral
Edita [src/data/experience.ts](src/data/experience.ts)

## 🔧 Solución de Problemas

### El sitio no carga correctamente en GitHub Pages

Verifica que el `base` en `vite.config.ts` coincida con el nombre de tu repositorio:
```typescript
base: '/NOMBRE_DE_TU_REPO/'
```

### Las imágenes no se muestran

- Si usas rutas locales, coloca las imágenes en la carpeta `public/`
- Las rutas deben empezar con `/` (ej: `/images/foto.png`)
- Para producción, usa URLs absolutas o CDNs como Unsplash

### Errores al hacer deploy

```bash
# Reinstala dependencias
rm -rf node_modules package-lock.json
npm install

# Prueba el build local
npm run build
npm run preview
```

## 📂 Estructura del Proyecto (Arquitectura Limpia)