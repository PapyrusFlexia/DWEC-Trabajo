var procesos = [];
$(function(){

    $("#selectCreador").change(function(){
        datosSelect();
    });
    $("#id").change(function(){
        validar([$(this)],false);
    });
    $("#formActualizar").submit(function(event){
        event.preventDefault();
        $("#btnActualizar").prop("disabled",true);
        $("#formActualizar input").prop("readOnly",true);
        validar([$("#id")],true);       
    });
});

function datosSelect(){
    $("#spinner").css("display","block"); 
    let form = new FormData();
    form.append("selectCreador",$("#selectCreador").val());
    fetch("servidor/select.php",{
        method:"post", body:form
    })
    .then(function(response){
            return response.json();
    })
    .then(añadirSelect)
    .catch(function(err){
        alert("Error");
        $("#selectResultado").html("Error");    
    }).finally(function(){
        $("#spinner").css("display","none");
    });
}

function añadirSelect(respuesta){
    var resultado= respuesta;
    let salida="";         
        for (let i=0; i < resultado.length; i++){
            let obj = resultado[i];
            salida+="<option>"+obj.id+"</option>";
        }
        document.getElementById("selectResultado").innerHTML=salida;        
}

function validar(nInputs, mandarFormulario){
    let form = new FormData();
    $("#spinner").css("display","block");
    nInputs.forEach(
        input => form.append(input.attr('id'),input.val())
    );
    fetch("servidor/validar.php",{
            method:"POST",
            body:form
        
    })
    .then(function(response){
            return response.json();
    })
    .then(function(errores){
            document.getElementById("resultadoActualizar").innerHTML="";
            let todoCorrecto = true;
            for(inputName in errores){
                let erroresInput = errores[inputName];
                $(`#${inputName}`).removeClass("inputCorrecto");
                $(`#${inputName}`).removeClass("inputErroneo");
                let divErrores = $(`#${inputName}`).next("div");
                divErrores.html("");
                if(!$.isEmptyObject(erroresInput)){
                    $(`#${inputName}`).addClass("inputErroneo");
                    for(tipoError in erroresInput){
                        divErrores.append(`<div>${erroresInput[tipoError]}</div>`);
                    }
                    todoCorrecto = false;
                    document.getElementById("resultadoActualizar").innerHTML="Error";

                }else{
                   $(`#${inputName}`).addClass("inputCorrecto"); 
                }
            }

            if(todoCorrecto && mandarFormulario){
                   actualizar();
            }
    })
    .catch(function(err){
        console.log(err);
        alert("Error");
            $("#resultado").html("Error");    
    }).finally(function(){
        $("#spinner").css("display","none");
    });
}

/*
Devuelve error: "Tienes que escribir algo" del archivo validar.php.
Creo que no está cogiendo el ID del select al mandar la solicitud de actualizar.
*/
function actualizar(){
    let form = new FormData();
    form.append("id",$("#id").val());
    form.append("creador",$("#creador").val());
    form.append("genero",$("#genero").val());
    form.append("editorial",$("#editorial").val());
    fetch("servidor/actualizar.php",{
        method:"post",
        body:form
    })
    .then(function(response){
            return response.json();
    })
    .then($("#resultadoActualizar").html("Actualizado"))
    .catch(function(err){
        console.log(err);
        alert("Error");
            $("#resultadoActualizar").html("Error");    
    });    
}