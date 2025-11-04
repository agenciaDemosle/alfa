# Piscinas Alfa y Soluciones

Sitio web informativo construido con React + Vite + TypeScript + Tailwind CSS 3.4.17.

## 🚀 Stack Tecnológico

- **React 18.3.1** - Biblioteca de UI
- **Vite 5.4.10** - Build tool y dev server
- **TypeScript 5.6.2** - Tipado estático
- **Tailwind CSS 3.4.17** - Framework CSS utilitario
- **React Router DOM 7.8.2** - Navegación SPA
- **React Hook Form 7.62.0** + **Zod 4.1.5** - Formularios con validación
- **TanStack Query 5.84.1** - Gestión de estado asíncrono
- **Axios 1.11.0** - Cliente HTTP
- **Framer Motion 12.23.12** - Animaciones
- **Lucide React 0.539.0** - Iconos
- **Zustand 5.0.7** - Gestión de estado UI
- **React Helmet Async 2.0.5** - SEO y metadatos

## 📁 Estructura del Proyecto

```
alfa/
├── public/
│   ├── images/             # Imágenes estáticas
│   ├── .htaccess          # Configuración Apache
│   ├── robots.txt         # SEO crawlers
│   └── sitemap.xml        # Mapa del sitio
├── src/
│   ├── components/
│   │   ├── layout/        # Header, Footer, SEO, etc.
│   │   └── ui/            # Componentes reutilizables
│   ├── pages/             # Páginas de la aplicación
│   ├── lib/
│   │   ├── api/           # Configuración de axios y llamadas API
│   │   ├── store/         # Zustand stores
│   │   └── utils/         # Utilidades (tracking, cn, etc.)
│   ├── App.tsx            # Configuración de rutas
│   └── main.tsx           # Punto de entrada
├── deployServer/
│   ├── sendmail.php       # Endpoint para formulario de contacto
│   └── .htaccess          # Configuración Apache
└── package.json
```

## 🛠️ Desarrollo Local

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Instalación

```bash
cd ~/Desktop/alfa
npm install
```

### Servidor de desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Build de producción

```bash
npm run build
```

Los archivos optimizados se generarán en `dist/`

### Preview del build

```bash
npm run preview
```

## 🚢 Deploy en SiteGround

### Preparación

1. **Compilar el proyecto:**
   ```bash
   npm run build
   ```

2. **Estructura de archivos a subir:**
   ```
   Tu dominio piscinasalfa.cl/
   ├── (contenido de dist/)
   │   ├── index.html
   │   ├── assets/
   │   ├── images/
   │   ├── .htaccess
   │   ├── robots.txt
   │   └── sitemap.xml
   └── deployServer/
       ├── sendmail.php
       └── .htaccess
   ```

### Pasos de Deploy

1. **Acceder a SiteGround cPanel**
   - Navegar a "File Manager"
   - Ir a `public_html/` (o el directorio de tu dominio)

2. **Subir archivos del build**
   - Copiar TODO el contenido de `dist/` a la raíz de tu dominio
   - Asegurarse de copiar `.htaccess` (archivos ocultos)

3. **Subir carpeta deployServer**
   - Crear carpeta `deployServer/` en la raíz
   - Copiar `sendmail.php` y `.htaccess`

4. **Verificar permisos**
   - `sendmail.php` debe tener permisos 644 o 755
   - `.htaccess` debe tener permisos 644

5. **Configurar email en sendmail.php**
   - Abrir `deployServer/sendmail.php`
   - Verificar la línea (ya configurado):
     ```php
     $to = 'piscinasalfaysoluciones.48i@gmail.com';
     ```

### Verificación Post-Deploy

- ✅ Verificar que todas las rutas funcionen (refrescar en `/servicios`, `/contacto`, etc.)
- ✅ Probar el formulario de contacto
- ✅ Verificar que `robots.txt` sea accesible: `https://piscinasalfa.cl/robots.txt`
- ✅ Verificar que `sitemap.xml` sea accesible: `https://piscinasalfa.cl/sitemap.xml`
- ✅ Comprobar SEO con herramientas como Google Search Console

## 🎯 Características

### SEO
- Meta tags dinámicos por ruta
- JSON-LD para Organization/LocalBusiness
- Sitemap.xml y robots.txt
- OpenGraph y Twitter Cards

### Performance
- Lazy loading de imágenes
- Code splitting automático con Vite
- Compresión Gzip/Brotli (vía .htaccess)
- Cache headers optimizados

### Tracking
- DataLayer para eventos de navegación
- Tracking de clicks en CTAs y navegación
- Evento de envío de formulario

### Accesibilidad
- Foco visible en elementos interactivos
- Labels y aria-labels apropiados
- Contraste de colores WCAG AA
- Navegación por teclado

## 📄 Páginas

- **`/`** - Home: Hero, secciones de empresa, servicios y CTA
- **`/sobre-nosotros`** - Descripción completa de la empresa
- **`/servicios`** - Listado de servicios con índice lateral
- **`/contacto`** - Formulario de contacto validado

## 🔧 Configuración

### Cambiar dominio
Si necesitas cambiar el dominio, actualizar en:
- `src/components/layout/SEO.tsx` - `SITE_URL`
- `src/components/layout/StructuredData.tsx` - `SITE_URL`
- `public/sitemap.xml` - URLs
- `deployServer/sendmail.php` - Email y dominio

### Personalizar colores
Los colores principales están en Tailwind. Para cambiar el azul (#2563eb):
- Buscar `blue-600` en todo el proyecto
- Reemplazar con la clase de color deseada

### Agregar nuevas rutas
1. Crear página en `src/pages/`
2. Agregar ruta en `src/App.tsx`
3. Agregar link en `src/components/layout/Header.tsx` y `Footer.tsx`
4. Actualizar `public/sitemap.xml`

## 📞 Soporte

Para consultas sobre el proyecto:
- Email: piscinasalfaysoluciones.48i@gmail.com
- Dominio: https://piscinasalfa.cl

## 📝 Licencia

Proyecto privado - Piscinas Alfa y Soluciones © 2025
