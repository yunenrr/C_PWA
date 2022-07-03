function sumarUno(elNumero){
    var laPromesa = new Promise(function(laEjecucionCorrecta, laEjecucionConErrores){

        setTimeout(function() {
            laEjecucionCorrecta(elNumero + 1);
        }, 800);
    });

    return laPromesa;
}

sumarUno(5)
    .then(elNuevoNumero => sumarUno(elNuevoNumero)) // Se modifica la estructura eliminando el function y el return
    .then(sumarUno) // Como el valor recibido es el mismo que se envía se puede escribir de esta manera
    .then(elNuevoNumero => {
        console.log(elNuevoNumero);
    });