<?php
header('Content-Type: application/json');
function validar(){
    $error = [];
    if(isset($_POST["id"])){
       $id = $_POST["id"];
       $error["id"] = [];
       if($id < 0){
          $error["tamaño"]["minimo"] =  "Debe ser 0 minimo";
       }

       if(!preg_match("/^[0-9]*$/",$id)){
        $error["id"]["numero"] = "Debe ser un numero";
     }

       if($id == null){
          $error["id"]["vacio"] = "Tienes que escribir algo";
       }

    }

    if(!isset($_POST["id"])){
      $error["id"]["vacio"] =  "Tienes que escribir algo";
    }    

    return $error;
}
echo json_encode(validar());