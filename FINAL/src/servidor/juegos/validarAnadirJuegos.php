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

function validarCreador($creador){
    $errores = array();
    if($creador === "") {
        $errores[] = "El creador no puede estar vacía";
    
        }else{
            if (!preg_match("/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/",$creador)) {
                $errores[] = "El creador debe de tener solo letras";
            }
        }
        return $errores;
    }

function validarPrecio($precio){
    $errores = array();
    if($precio === "") {
    $errores[] = "El precio no puede estar vacio";

    }else{
        if (!preg_match("/^[0-9]*$/",$precio)) {
            $errores[] = "El precio solo pueden ser números";
        }
    }
    return $errores;
}

function validarGenero($genero){
    $errores = array();
    if($genero === "") {
        $errores[] = "El género no puede estar vacío";
    
        }else{
            if (!preg_match("/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/",$genero)) {
                $errores[] = "El género debe de tener solo letras";
            }
        }
        return $errores;
    }

    function validarEditorial($editorial){
        $errores = array();
        if($editorial === "") {
            $errores[] = "La editorial no puede estar vacía";
        
            }else{
                if (!preg_match("/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/",$editorial)) {
                    $errores[] = "La editorial debe de tener solo letras";
                }
            }
            return $errores;
        }


