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
            $errores[] = "El nombre debe de tener mas de 2 letras y solo letras";
        }
    }
    return $errores;
}

function validarApellidos($apellidos){
    if($apellidos === "") {
        $errores[] = "Los apellidos no puede estar vacio";
    
        }else{
            if (!preg_match("/[A-ZÑa-zñ ]{2,}$/",$apellidos)) {
                $errores[] = "Los apellidos deben de tener mas de 2 letras y solo letras";
            }
        }
        return $errores;
    }

function validarEmail($email){
    $errores = array();
    if($email === "") {
    $errores[] = "El email no puede estar vacio";

    }else{
        if (!preg_match("/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/",$email)) {
            $errores[] = "El email debe ser del siguiente tipo: example@gmail.com";
        }
    }
    return $errores;
}


function validarTelefono($telefono){
    $errores = array();
    if($telefono === "") {
    $errores[] = "El teléfono no puede estar vacio";

    }else{
        if (!preg_match("/^[0-9]*$/",$telefono)) {
            $errores[] = "El teléfono solo pueden ser números";
        }
    }
    return $errores;
}

function validarDni($dni){
    
    $errores = array();
    if($dni === "") {
    $errores[] = "El dni no puede estar vacio";

    }else{
        if (!preg_match("/^[0-9]{8,8}[A-Za-z]$/",$dni)) {
            $errores[] = "El dni solo pueden ser números";
        }
    }
    return $errores;
}

// /^[0-9]*$/ | /^[a-zA-Z]+$/ | /([w-]+@[w-]+.[w-]+)/ | /^[0-9]{8,8}[A-Za-z]$/  