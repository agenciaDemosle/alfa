<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Método no permitido']);
    exit();
}

try {
    // Get JSON data from request
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    // Validate required fields
    if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
        throw new Exception('Todos los campos obligatorios deben ser completados');
    }

    // Sanitize inputs
    $name = filter_var($data['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    $phone = isset($data['phone']) ? filter_var($data['phone'], FILTER_SANITIZE_STRING) : 'No proporcionado';
    $message = filter_var($data['message'], FILTER_SANITIZE_STRING);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Email inválido');
    }

    // Email configuration
    $to = 'piscinasalfaysoluciones.48i@gmail.com';
    $subject = 'Nuevo mensaje de contacto - Piscinas Alfa y Soluciones';

    // Email body
    $emailBody = "
<!DOCTYPE html>
<html lang='es'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Nuevo mensaje de contacto</title>
</head>
<body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;'>
    <div style='background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;'>
        <h1 style='color: white; margin: 0; font-size: 24px;'>Nuevo mensaje de contacto</h1>
    </div>

    <div style='background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;'>
        <h2 style='color: #667eea; margin-top: 0;'>Información del cliente</h2>

        <div style='background: white; padding: 20px; border-radius: 5px; margin-bottom: 20px;'>
            <p style='margin: 10px 0;'><strong style='color: #667eea;'>Nombre:</strong> {$name}</p>
            <p style='margin: 10px 0;'><strong style='color: #667eea;'>Email:</strong> <a href='mailto:{$email}' style='color: #764ba2;'>{$email}</a></p>
            <p style='margin: 10px 0;'><strong style='color: #667eea;'>Teléfono:</strong> {$phone}</p>
        </div>

        <div style='background: white; padding: 20px; border-radius: 5px;'>
            <h3 style='color: #667eea; margin-top: 0;'>Mensaje:</h3>
            <p style='white-space: pre-wrap; line-height: 1.8;'>{$message}</p>
        </div>

        <div style='margin-top: 30px; padding-top: 20px; border-top: 2px solid #e0e0e0; text-align: center; color: #999;'>
            <p style='font-size: 12px; margin: 5px 0;'>Este mensaje fue enviado desde el formulario de contacto de</p>
            <p style='font-size: 12px; margin: 5px 0;'><strong>Piscinas Alfa y Soluciones</strong></p>
            <p style='font-size: 12px; margin: 5px 0;'>Fecha: " . date('d/m/Y H:i:s') . "</p>
        </div>
    </div>
</body>
</html>
";

    // Email headers
    $headers = array(
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8',
        'From: Piscinas Alfa Web <noreply@piscinasalfaysoluciones.com>',
        'Reply-To: ' . $email,
        'X-Mailer: PHP/' . phpversion()
    );

    // Send email
    $mailSent = mail($to, $subject, $emailBody, implode("\r\n", $headers));

    if (!$mailSent) {
        throw new Exception('Error al enviar el correo. Por favor, intenta nuevamente.');
    }

    // Send confirmation email to client
    $clientSubject = 'Gracias por contactarnos - Piscinas Alfa y Soluciones';
    $clientBody = "
<!DOCTYPE html>
<html lang='es'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Confirmación de contacto</title>
</head>
<body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;'>
    <div style='background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;'>
        <h1 style='color: white; margin: 0; font-size: 24px;'>¡Gracias por contactarnos!</h1>
    </div>

    <div style='background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;'>
        <p style='font-size: 16px;'>Hola <strong>{$name}</strong>,</p>

        <p style='font-size: 16px;'>Hemos recibido tu mensaje y nos pondremos en contacto contigo en menos de 24 horas.</p>

        <div style='background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #667eea;'>
            <h3 style='color: #667eea; margin-top: 0;'>Tu mensaje:</h3>
            <p style='white-space: pre-wrap; line-height: 1.8; color: #666;'>{$message}</p>
        </div>

        <p style='font-size: 16px;'>Mientras tanto, puedes:</p>
        <ul style='font-size: 16px;'>
            <li>Visitar nuestro sitio web para conocer más sobre nuestros servicios</li>
            <li>Seguirnos en nuestras redes sociales</li>
            <li>Contactarnos directamente por WhatsApp</li>
        </ul>

        <div style='margin-top: 30px; padding-top: 20px; border-top: 2px solid #e0e0e0; text-align: center;'>
            <p style='font-size: 14px; margin: 5px 0;'><strong>Piscinas Alfa y Soluciones</strong></p>
            <p style='font-size: 14px; margin: 5px 0; color: #666;'>Especialistas en revestimiento y remodelación de piscinas</p>
            <p style='font-size: 14px; margin: 5px 0; color: #666;'>Garantía de 15 años</p>
        </div>
    </div>
</body>
</html>
";

    $clientHeaders = array(
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8',
        'From: Piscinas Alfa y Soluciones <noreply@piscinasalfaysoluciones.com>',
        'Reply-To: piscinasalfaysoluciones.48i@gmail.com',
        'X-Mailer: PHP/' . phpversion()
    );

    // Send confirmation email (don't fail if this doesn't work)
    @mail($email, $clientSubject, $clientBody, implode("\r\n", $clientHeaders));

    // Log the contact (optional)
    $logFile = __DIR__ . '/contacts.log';
    $logEntry = date('Y-m-d H:i:s') . " - Contacto de: {$name} ({$email}) - Tel: {$phone}\n";
    @file_put_contents($logFile, $logEntry, FILE_APPEND);

    // Success response
    http_response_code(200);
    echo json_encode([
        'ok' => true,
        'message' => '¡Mensaje enviado exitosamente!'
    ]);

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'error' => $e->getMessage()
    ]);
}
?>
