# Configuración del Servidor para Envío de Correos

Este directorio contiene los scripts PHP necesarios para el envío de correos desde el formulario de contacto.

## Archivos

- `sendmail.php` - Script principal para enviar correos
- `.htaccess` - Configuración del servidor Apache
- `contacts.log` - Log de contactos (se crea automáticamente)

## Requisitos del Servidor

1. **PHP 7.4 o superior**
2. **Función `mail()` habilitada**
3. **Apache con mod_headers habilitado** (para CORS)

## Configuración

### 1. Verificar PHP

```bash
php -v
```

### 2. Verificar función mail()

```php
<?php
if (function_exists('mail')) {
    echo "La función mail() está habilitada";
} else {
    echo "La función mail() NO está habilitada";
}
?>
```

### 3. Configurar email en sendmail.php

El correo de destino está configurado en la línea 39:

```php
$to = 'piscinasalfaysoluciones.48i@gmail.com';
```

### 4. Permisos

Asegúrate de que el directorio tenga permisos de escritura para crear el archivo de logs:

```bash
chmod 755 /ruta/al/deployServer
chmod 644 sendmail.php
chmod 644 .htaccess
```

## Prueba del Endpoint

### Usando cURL:

```bash
curl -X POST https://tu-dominio.com/deployServer/sendmail.php \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+56912345678",
    "message": "Este es un mensaje de prueba"
  }'
```

### Respuesta esperada:

```json
{
  "ok": true,
  "message": "¡Mensaje enviado exitosamente!"
}
```

## Solución de Problemas

### El correo no se envía

1. Verificar que la función `mail()` esté habilitada
2. Revisar los logs de PHP
3. Verificar la configuración de sendmail/SMTP del servidor
4. Algunos proveedores de hosting requieren configuración adicional

### Error CORS

Si recibes errores de CORS:
1. Verifica que `.htaccess` esté presente
2. Verifica que `mod_headers` esté habilitado en Apache
3. Si usas Nginx, necesitarás configurar CORS en el archivo de configuración

### Configuración alternativa con SMTP

Si el servidor no tiene `mail()` configurado, puedes usar PHPMailer:

```bash
composer require phpmailer/phpmailer
```

## Seguridad

- Los correos están siendo sanitizados antes de enviarse
- Se validan los campos requeridos
- Se valida el formato del email
- Los archivos de log están protegidos por `.htaccess`

## Logs

El archivo `contacts.log` registra todos los contactos recibidos con:
- Fecha y hora
- Nombre del contacto
- Email
- Teléfono

**Importante:** No versionar el archivo `contacts.log` en Git por contener información sensible.

## Deployment

Al hacer deploy del proyecto:

1. Asegúrate de que este directorio esté incluido en el build
2. Verifica los permisos del servidor
3. Prueba el endpoint después del deploy
4. Verifica que los correos lleguen correctamente

## Soporte

Para problemas o consultas, contacta al equipo de desarrollo.
