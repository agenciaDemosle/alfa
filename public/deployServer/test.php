<?php
/**
 * Script de prueba para verificar la configuración del servidor
 * Eliminar este archivo en producción por seguridad
 */

header('Content-Type: application/json; charset=utf-8');

$tests = [];

// Test 1: PHP Version
$tests['php_version'] = [
    'test' => 'Versión de PHP',
    'result' => phpversion(),
    'status' => version_compare(phpversion(), '7.4.0', '>=') ? 'OK' : 'ERROR',
    'message' => version_compare(phpversion(), '7.4.0', '>=')
        ? 'PHP 7.4+ instalado'
        : 'Se requiere PHP 7.4 o superior'
];

// Test 2: mail() function
$tests['mail_function'] = [
    'test' => 'Función mail()',
    'result' => function_exists('mail'),
    'status' => function_exists('mail') ? 'OK' : 'ERROR',
    'message' => function_exists('mail')
        ? 'Función mail() disponible'
        : 'Función mail() NO disponible'
];

// Test 3: JSON functions
$tests['json_support'] = [
    'test' => 'Soporte JSON',
    'result' => function_exists('json_encode') && function_exists('json_decode'),
    'status' => (function_exists('json_encode') && function_exists('json_decode')) ? 'OK' : 'ERROR',
    'message' => (function_exists('json_encode') && function_exists('json_decode'))
        ? 'Funciones JSON disponibles'
        : 'Funciones JSON NO disponibles'
];

// Test 4: Write permissions
$logFile = __DIR__ . '/test.log';
$canWrite = is_writable(__DIR__);
if ($canWrite) {
    @file_put_contents($logFile, 'Test write: ' . date('Y-m-d H:i:s') . "\n");
    $canWrite = file_exists($logFile);
    if ($canWrite) {
        @unlink($logFile); // Clean up test file
    }
}

$tests['write_permissions'] = [
    'test' => 'Permisos de escritura',
    'result' => $canWrite,
    'status' => $canWrite ? 'OK' : 'WARNING',
    'message' => $canWrite
        ? 'El directorio tiene permisos de escritura'
        : 'El directorio NO tiene permisos de escritura (logs no funcionarán)'
];

// Test 5: Filter functions
$tests['filter_support'] = [
    'test' => 'Funciones de filtrado',
    'result' => function_exists('filter_var'),
    'status' => function_exists('filter_var') ? 'OK' : 'ERROR',
    'message' => function_exists('filter_var')
        ? 'Funciones de filtrado disponibles'
        : 'Funciones de filtrado NO disponibles'
];

// Test 6: Headers already sent
$tests['headers'] = [
    'test' => 'Headers',
    'result' => !headers_sent(),
    'status' => !headers_sent() ? 'OK' : 'WARNING',
    'message' => !headers_sent()
        ? 'Headers pueden ser enviados correctamente'
        : 'Headers ya fueron enviados'
];

// Summary
$allOk = true;
foreach ($tests as $test) {
    if ($test['status'] === 'ERROR') {
        $allOk = false;
        break;
    }
}

$response = [
    'server_ready' => $allOk,
    'timestamp' => date('Y-m-d H:i:s'),
    'tests' => $tests,
    'server_info' => [
        'php_version' => phpversion(),
        'server_software' => $_SERVER['SERVER_SOFTWARE'] ?? 'Unknown',
        'os' => PHP_OS,
    ],
    'recommendations' => []
];

// Add recommendations
if (!$allOk) {
    foreach ($tests as $test) {
        if ($test['status'] === 'ERROR') {
            $response['recommendations'][] = $test['message'];
        }
    }
}

// Pretty print JSON
echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

// Log test execution
$logFile = __DIR__ . '/test_executions.log';
@file_put_contents(
    $logFile,
    date('Y-m-d H:i:s') . " - Test ejecutado - Status: " . ($allOk ? 'OK' : 'ERRORS FOUND') . "\n",
    FILE_APPEND
);
?>
