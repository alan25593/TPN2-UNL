<?php
$cookie_name = "first_visit";
$first_visit = false;

if (!isset($_COOKIE[$cookie_name])) {
    setcookie($cookie_name, "1", time() + (86400 * 30), "/"); // La cookie expirará en 30 días
    $first_visit = true;
}
?>