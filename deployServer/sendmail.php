<?php
// Enable CORS for same-origin requests
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method Not Allowed']);
    exit;
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate input
if (!$data) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid JSON']);
    exit;
}

// Extract and validate fields
$name = isset($data['name']) ? trim($data['name']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$phone = isset($data['phone']) ? trim($data['phone']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

// Validation
$errors = [];

if (empty($name) || strlen($name) < 2) {
    $errors[] = 'El nombre debe tener al menos 2 caracteres';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Email inválido';
}

if (empty($message) || strlen($message) < 10) {
    $errors[] = 'El mensaje debe tener al menos 10 caracteres';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => implode(', ', $errors)]);
    exit;
}

// Prepare email
$to = 'contacto@franciscal44.sg-host.com'; // Change to actual email
$subject = 'Nuevo mensaje de contacto - Piscinas Alfa y Soluciones';

$emailBody = "
Nuevo mensaje de contacto desde el sitio web

Nombre: {$name}
Email: {$email}
Teléfono: " . ($phone ?: 'No proporcionado') . "

Mensaje:
{$message}

---
Enviado desde: https://franciscal44.sg-host.com
Fecha: " . date('Y-m-d H:i:s') . "
";

$headers = "From: noreply@franciscal44.sg-host.com\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$mailSent = @mail($to, $subject, $emailBody, $headers);

if ($mailSent) {
    http_response_code(200);
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Error al enviar el correo. Intenta nuevamente.']);
}
