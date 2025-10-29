# Guía de Deploy para SiteGround

Esta guía proporciona instrucciones paso a paso para desplegar el sitio "Piscinas Alfa y Soluciones" en SiteGround.

## Pre-requisitos

- Acceso a SiteGround cPanel
- Cliente FTP o File Manager de cPanel
- Proyecto compilado localmente

## Paso 1: Compilar el Proyecto

En tu máquina local, abre la terminal y ejecuta:

```bash
cd ~/Desktop/alfa
npm run build
```

Esto generará una carpeta `dist/` con todos los archivos optimizados para producción.

## Paso 2: Preparar Archivos para Deploy

### Archivos a copiar de dist/

Todos los archivos dentro de `dist/`:
- `index.html`
- `assets/` (carpeta completa con JS y CSS)
- `images/` (carpeta completa)
- `.htaccess` (archivo oculto, importante)
- `robots.txt`
- `sitemap.xml`

### Archivos adicionales

- `deployServer/sendmail.php`
- `deployServer/.htaccess`

## Paso 3: Conectar a SiteGround

### Opción A: File Manager (Recomendado para principiantes)

1. Accede a tu cuenta de SiteGround
2. Ve a "Site Tools"
3. En la sección "Site", haz clic en "File Manager"
4. Navega a `public_html/` (o el directorio específico de tu dominio)

### Opción B: FTP

1. Descarga un cliente FTP (FileZilla, Cyberduck, etc.)
2. Usa las credenciales FTP de SiteGround
3. Conéctate al servidor
4. Navega a `public_html/`

## Paso 4: Subir Archivos

### 4.1 Limpiar el directorio (si es necesario)

Si ya hay archivos en `public_html/`, elimínalos o respaldalos primero.

### 4.2 Subir contenido de dist/

1. Selecciona TODOS los archivos dentro de `dist/`
2. Súbelos a la raíz de `public_html/`
3. **IMPORTANTE**: Asegúrate de que `.htaccess` se copie (archivos ocultos)

### 4.3 Crear carpeta deployServer

1. En `public_html/`, crea una nueva carpeta llamada `deployServer`
2. Sube `sendmail.php` dentro de `deployServer/`
3. Sube `.htaccess` dentro de `deployServer/`

## Paso 5: Configurar Permisos

### Via File Manager:

1. Haz clic derecho en `deployServer/sendmail.php`
2. Selecciona "Change Permissions"
3. Establece permisos a `644` o `755`

### Permisos correctos:

- `sendmail.php`: 644 o 755
- `.htaccess`: 644
- Carpetas: 755
- Otros archivos: 644

## Paso 6: Configurar Email

1. Abre `deployServer/sendmail.php`
2. Busca la línea:
   ```php
   $to = 'contacto@franciscal44.sg-host.com';
   ```
3. Cámbiala por tu email real:
   ```php
   $to = 'tu-email@dominio.com';
   ```
4. Guarda el archivo

## Paso 7: Verificar el Deploy

### 7.1 Verificar carga del sitio

Visita: `https://franciscal44.sg-host.com`

Deberías ver la página de inicio correctamente.

### 7.2 Probar rutas SPA

Prueba cada ruta navegando directamente:
- `https://franciscal44.sg-host.com/sobre-nosotros`
- `https://franciscal44.sg-host.com/servicios`
- `https://franciscal44.sg-host.com/contacto`

Todas deberían cargar correctamente (no error 404).

### 7.3 Probar formulario de contacto

1. Ve a `/contacto`
2. Llena el formulario
3. Envía un mensaje de prueba
4. Verifica que llegue al email configurado

### 7.4 Verificar archivos SEO

- Robots.txt: `https://franciscal44.sg-host.com/robots.txt`
- Sitemap: `https://franciscal44.sg-host.com/sitemap.xml`

Ambos deberían mostrar su contenido correctamente.

## Paso 8: Optimizaciones Post-Deploy (Opcional)

### 8.1 Verificar SSL

Asegúrate de que tu sitio cargue con HTTPS. En SiteGround:
1. Ve a "Security" > "SSL Manager"
2. Activa el certificado SSL gratuito de Let's Encrypt

### 8.2 Habilitar caché

En SiteGround:
1. Ve a "Speed" > "Caching"
2. Activa "Dynamic Cache"
3. Activa "NGINX Direct Delivery"

### 8.3 Configurar HTTPS forzado

Si deseas forzar HTTPS, descomenta estas líneas en `.htaccess`:

```apache
# RewriteCond %{HTTPS} !=on
# RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

Remueve el `#` al inicio de cada línea.

## Troubleshooting

### Error 404 en rutas

**Problema**: Al refrescar en `/servicios` aparece error 404

**Solución**:
- Verifica que `.htaccess` esté en la raíz
- Asegúrate de que el módulo `mod_rewrite` esté habilitado en Apache
- Revisa permisos del `.htaccess` (debe ser 644)

### Formulario no envía emails

**Problema**: El formulario se envía pero no llega email

**Solución**:
- Verifica que el email en `sendmail.php` sea correcto
- Revisa la carpeta de spam
- Contacta a soporte de SiteGround para verificar que la función `mail()` esté habilitada

### Imágenes no cargan

**Problema**: Las imágenes no se muestran

**Solución**:
- Verifica que la carpeta `images/` se haya subido correctamente
- Revisa permisos de la carpeta (debe ser 755)
- Verifica rutas en el código (deben empezar con `/images/`)

### CSS/JS no carga

**Problema**: El sitio se ve sin estilos

**Solución**:
- Asegúrate de haber subido la carpeta `assets/` completa
- Verifica que el archivo `.htaccess` esté presente
- Limpia caché del navegador (Ctrl+F5)

## Actualizaciones Futuras

Para actualizar el sitio:

1. Realiza cambios en el código local
2. Ejecuta `npm run build`
3. Respalda los archivos actuales en SiteGround
4. Sube los nuevos archivos de `dist/`
5. Si actualizaste `deployServer/sendmail.php`, súbelo también

## Notas Importantes

- **Siempre respalda** los archivos existentes antes de sobrescribirlos
- El `.htaccess` es crítico para el funcionamiento de la SPA
- Los archivos en `deployServer/` solo se suben una vez, a menos que los modifiques
- Guarda las credenciales de acceso en un lugar seguro

## Soporte

Si tienes problemas con el deploy:
1. Revisa la documentación de SiteGround
2. Contacta al soporte de SiteGround
3. Revisa los logs de error en cPanel > "Statistics" > "Error Log"
