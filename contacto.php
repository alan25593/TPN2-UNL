<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombreCompleto = trim($_POST['nombre']);
    $direccion = trim($_POST['direccion']);
    $telefono = trim($_POST['telefono']);
    $correo = trim($_POST['correo']);
    $consulta = trim($_POST['consulta']);
    
    // Separar el nombre y el apellido
    $partes = explode(' ', $nombreCompleto, 2);
    $nombre = isset($partes[0]) ? $partes[0] : '';
    $apellido = isset($partes[1]) ? $partes[1] : '';
    
    // Crear el nombre del archivo con Apellido-Nombre
    $nombreArchivo = str_replace(' ', '-', strtolower($apellido . '-' . $nombre)) . '.txt';
    $consultaConFecha = date('Y-m-d H:i:s') . " - " . $direccion . " - " . $telefono . " - " . $correo . " - " . $consulta .  "\n";
    
    file_put_contents($nombreArchivo, $consultaConFecha, FILE_APPEND);
    
    echo json_encode(['message' => $nombre . ' su consulta fue enviada con éxito, en breves nos pondremos en contacto!']);
    exit;
}
?>
