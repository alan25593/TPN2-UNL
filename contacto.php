<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = trim($_POST['nombre']);
    $direccion = trim($_POST['direccion']);
    $telefono = trim($_POST['telefono']);
    $correo = trim($_POST['correo']);
    $consulta = trim($_POST['consulta']);
    
    $nombreArchivo = str_replace(' ', '-', strtolower($nombre)) . '.txt';
    $consultaConFecha = date('Y-m-d H:i:s') . " - " . $direccion . " - " . $telefono . " - " . $correo . " - " . $consulta .  "\n";
    
    file_put_contents($nombreArchivo, $consultaConFecha, FILE_APPEND);
    
    echo json_encode(['message' => $nombre. ' su consulta fue enviada con éxito, en breves nos pondremos en contacto!']);
    exit;
}
?>
