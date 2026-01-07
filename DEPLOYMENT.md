# Deployment Guide

Este documento explica cómo configurar y desplegar tu portfolio en GitHub Pages.

## 📋 Pre-requisitos

- Cuenta de GitHub
- Git instalado en tu computadora
- Node.js 18+ instalado

## 🚀 Paso a Paso

### 1. Preparar el proyecto

```bash
# Instalar gh-pages si vas a usar despliegue manual
npm install --save-dev gh-pages
```

### 2. Configurar el base path

Edita `vite.config.ts` y cambia el `base`:

```typescript
export default defineConfig({
  base: '/NOMBRE_DE_TU_REPOSITORIO/',
  // ...
})
```

**Ejemplos:**
- Si tu repo es `mi-portfolio`: usa `base: '/mi-portfolio/'`
- Si tu repo es `usuario.github.io`: usa `base: '/'`

### 3. Crear repositorio en GitHub

```bash
# Inicializar git (si no lo has hecho)
git init

# Agregar archivos
git add .
git commit -m "Initial commit"

# Crear repositorio en GitHub y conectarlo
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git branch -M main
git push -u origin main
```

### 4. Configurar GitHub Pages

**Opción A: Con GitHub Actions (Automático)**

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. En "Source", selecciona: **GitHub Actions**
4. El archivo `.github/workflows/deploy.yml` se encargará del resto

Cada vez que hagas `git push`, se desplegará automáticamente.

**Opción B: Manual con gh-pages**

```bash
npm run deploy
```

Este comando:
1. Construye el proyecto (`npm run build`)
2. Sube la carpeta `dist` a la rama `gh-pages`

Luego en GitHub:
1. Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** → folder: **/ (root)**

### 5. Verificar el despliegue

Tu sitio estará disponible en:
```
https://TU_USUARIO.github.io/TU_REPO/
```

Ejemplo:
```
https://carlosjsl.github.io/cv/
```

## 🔄 Actualizar el sitio

```bash
# Hacer cambios en tu código
git add .
git commit -m "Descripción de los cambios"
git push

# Con GitHub Actions: se despliega automáticamente
# Con gh-pages manual: ejecuta npm run deploy
```

## 🎨 Personalizar antes de desplegar

### Información personal
`src/data/personalInfo.ts` - Actualiza tu nombre, email, teléfono, etc.

### Proyectos
`src/data/projects.ts` - Agrega tus proyectos reales

### Imágenes de proyectos
1. Coloca tus capturas de pantalla en `public/images/`
2. Actualiza las rutas en `projects.ts`:

```typescript
images: [
  "/images/proyecto1-home.png",
  "/images/proyecto1-dashboard.png",
]
```

### Colores y estilos
Edita `src/index.css` y los componentes en `src/components/`

## ⚠️ Problemas Comunes

### Error 404 al navegar

**Causa**: El `base` en `vite.config.ts` no coincide con el nombre del repo.

**Solución**: Verifica que:
```typescript
base: '/nombre-exacto-del-repo/'
```

### Las imágenes no se cargan

**Causa**: Rutas incorrectas o imágenes no en `public/`

**Solución**:
- Usa rutas que empiecen con `/` (ej: `/images/foto.png`)
- Coloca imágenes en la carpeta `public/`
- O usa URLs completas de CDNs

### Build falla en GitHub Actions

**Causa**: Dependencias faltantes o errores de TypeScript

**Solución**:
1. Prueba el build localmente: `npm run build`
2. Verifica que no hay errores de TypeScript
3. Asegúrate de que `package-lock.json` esté en el repo

### El sitio muestra la versión antigua

**Causa**: Caché del navegador

**Solución**:
- Fuerza recarga: `Ctrl + F5` (Windows) o `Cmd + Shift + R` (Mac)
- Abre en modo incógnito
- Espera unos minutos para que GitHub Pages se actualice

## 📞 Recursos Adicionales

- [Documentación de GitHub Pages](https://docs.github.com/en/pages)
- [Documentación de Vite](https://vitejs.dev/guide/static-deploy.html)
- [gh-pages package](https://www.npmjs.com/package/gh-pages)

## ✅ Checklist antes de desplegar

- [ ] Actualicé `personalInfo.ts` con mis datos
- [ ] Agregué mis proyectos reales en `projects.ts`
- [ ] Las imágenes están en `public/images/`
- [ ] Configuré el `base` correcto en `vite.config.ts`
- [ ] El build funciona localmente (`npm run build`)
- [ ] Creé el repositorio en GitHub
- [ ] Configuré GitHub Pages en Settings
- [ ] Hice push del código

¡Listo para desplegar! 🚀
