# 🌱 WasteTrack Landing Page

Plataforma de gestión inteligente de residuos urbanos con landing pages personalizadas por rol de usuario.

## 🚀 Características

- ✅ Landing pages dinámicas por rol (Administrador Municipal, Conductor, Ciudadano)
- ✅ Autenticación con reset y activación de contraseña
- ✅ Detección automática de dispositivos móviles/desktop
- ✅ Redirección inteligente según rol del usuario
- ✅ Diseño responsive y moderno con Tailwind CSS
- ✅ Componentes reutilizables con shadcn/ui
- ✅ Validación de formularios con Zod y React Hook Form
- ✅ SEO optimizado con metadata por página

## 🛠️ Tecnologías

- **Framework:** Next.js 16 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS 4
- **Componentes UI:** shadcn/ui
- **Validación:** Zod
- **Formularios:** React Hook Form
- **Gestor de paquetes:** pnpm

## 📦 Instalación
```bash
# Clonar el repositorio
git clone <tu-repositorio>

# Instalar dependencias
pnpm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus valores

# Iniciar servidor de desarrollo
pnpm dev
```

## 🌍 Variables de Entorno

Configura estas variables en `.env.local`:
```env
# API Backend
NEXT_PUBLIC_API_URL=http://localhost:8080/api/v1

# URLs de redirección - Web Apps
NEXT_PUBLIC_SYSTEM_ADMIN_URL=http://localhost:4200/system-admin/dashboard
NEXT_PUBLIC_MUNICIPAL_ADMIN_URL=http://localhost:4200/municipal-admin/dashboard

# Deep Links - Mobile Apps
NEXT_PUBLIC_DRIVER_DEEP_LINK_LOGIN=wastetrack-driver://login
NEXT_PUBLIC_DRIVER_DEEP_LINK_HOME=wastetrack-driver://home
NEXT_PUBLIC_CITIZEN_DEEP_LINK_LOGIN=wastetrack-citizen://login
NEXT_PUBLIC_CITIZEN_DEEP_LINK_REGISTER=wastetrack-citizen://register
NEXT_PUBLIC_CITIZEN_DEEP_LINK_HOME=wastetrack-citizen://home

# App Stores
NEXT_PUBLIC_DRIVER_IOS_URL=https://apps.apple.com/app/wastetrack-driver
NEXT_PUBLIC_DRIVER_ANDROID_URL=https://play.google.com/store/apps/details?id=com.wastetrack.driver
NEXT_PUBLIC_CITIZEN_IOS_URL=https://apps.apple.com/app/wastetrack-citizen
NEXT_PUBLIC_CITIZEN_ANDROID_URL=https://play.google.com/store/apps/details?id=com.wastetrack.citizen
```

## 📁 Estructura del Proyecto
```
/app
  /(auth)           # Páginas de autenticación
  /(landing)        # Landing pages por rol
  
/components
  /auth             # Componentes de autenticación
  /landing          # Componentes de landing
  /ui               # Componentes shadcn
  
/lib
  /api              # Cliente HTTP y tipos
  /redirect         # Lógica de redirección
  - constants.ts    # Configuración centralizada
  - validators.ts   # Validadores Zod
  
/hooks              # React hooks personalizados
/contexts           # React contexts
/public             # Assets estáticos
```

## 🎨 Paleta de Colores

- **Verde Principal:** `#2ca05a` (hsl 145, 56%, 45%)
- **Verde Oscuro:** `#005c2f` (hsl 158, 100%, 18%)
- **Base:** Slate (shadcn/ui)

## 📱 Rutas Principales

### Landing Pages
- `/municipal-admin` - Administradores municipales
- `/driver` - Conductores de recolección
- `/citizen` - Ciudadanos

### Autenticación
- `/reset-password?token=xyz` - Restablecer contraseña
- `/activate-account?token=xyz` - Activar cuenta nueva

## 🔧 Scripts Disponibles
```bash
pnpm dev          # Servidor de desarrollo
pnpm build        # Build de producción
pnpm start        # Servidor de producción
pnpm lint         # Linter
```

## 🚀 Deployment

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

### Build Manual
```bash
pnpm build
pnpm start
```

## 📝 Convenciones de Código

- **Componentes:** PascalCase (`HeroSection.tsx`)
- **Utilidades:** camelCase (`auth-client.ts`)
- **Constantes:** UPPER_SNAKE_CASE (`API_ENDPOINTS`)
- **Tipos:** PascalCase con sufijo Type (`AuthPasswordResponse`)

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: Amazing Feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es propiedad de WasteTrack. Todos los derechos reservados.

## 👥 Equipo

Desarrollado con ❤️ por el equipo de WasteTrack

## 📧 Contacto

- Email: info@wastetrack.com
- Website: https://wastetrack.com