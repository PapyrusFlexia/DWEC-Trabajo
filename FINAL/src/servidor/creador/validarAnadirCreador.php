<?php

function validarId($id){
    $errores = array();
    if($id === "") {
    $errores[] = "El id no puede estar vacio";

    }else{
        if (!preg_match("/^[0-9]*$/",$id)) {
            $errores[] = "El id solo pueden ser números";
        }
    }
    return $errores;
}
    
function validarNombre($nombre){
    $errores = array();
    if($nombre === "") {
    $errores[] = "El nombre no puede estar vacio";

    }else{
        if (!preg_match("/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/",$nombre)) {
            $errores[] = "El nombre debe de tener solo letras";
        }
    }
    return $errores;
}

function validarApellidos($apellidos){
    $errores = array();
    if($apellidos === "") {
        $errores[] = "Los apellidos no pueden estar vacios";
    
        }else{
            if (!preg_match("/[A-ZÑa-zñ ]{2,}$/",$apellidos)) {
                $errores[] = "Los apellidos deben de tener solo letras";
            }
        }
        return $errores;
    }

function validarEmail($email){
    $errores = array();
    if($email === "") {
    $errores[] = "Email validado";

    }else{
        if (!preg_match("/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/",$email)) {
            $errores[] = "El email debe ser del siguiente tipo: example@example.example (EMAIL ES OPCIONAL)";
        }
    }
    return $errores;
}

