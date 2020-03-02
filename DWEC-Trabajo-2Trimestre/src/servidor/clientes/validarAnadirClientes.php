<?php
$value = $_GET['query'];
$formfield = $_GET['field'];

if ($formfield == "id") {
    if (!preg_match("/^[0-9]*$/", $value)) {
        echo "Id inválido, solo puede contener números";
        } else {
        echo "<span>Válido</span>";
        }
        }

if ($formfield == "nombre") {
    if (!preg_match("/^[a-zA-Z]+$/", $value)) {
        echo "Nombre inválido, solo puede contener letras";
        } else {
        echo "<span>Válido</span>";
        }
        }

if ($formfield == "apellidos") {
    if (!preg_match("/^[a-zA-Z]+$/", $value)) {
        echo "Apellidos inválidos, solo pueden contener letras";
        } else {
        echo "<span>Válido</span>";
        }
        }

if ($formfield == "email") {
    if (!preg_match("/([w-]+@[w-]+.[w-]+)/", $value)) {
echo "Email inválido, debe ser como el siguiente formato: example@gmail.com";
} else {
echo "<span>Válido</span>";
}
}

if ($formfield == "telefono") {
    if (!preg_match("/^[-\s\./0-9]*$/", $value)) {
        echo "Teléfono inválido, solo puede contener 9 números y -";
        } else {
        echo "<span>Válido</span>";
        }
        }

if ($formfield == "dni") {
    if (!preg_match("/^[0-9]{8,8}[A-Za-z]$/", $value)) {
echo "DNI inválido, solo puede contener 8 números y una letra al final";
} else {
echo "<span>Valid</span>";
}
}
?>