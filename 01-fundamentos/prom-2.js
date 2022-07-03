function sumarUno(elNumero){
    var laPromesa = new Promise(function(laEjecucionCorrecta, laEjecucionConErrores){

        setTimeout(function() {
            laEjecucionCorrecta(elNumero + 1);
        }, 800);
    });

    return laPromesa;
}

sumarUno(5).then(elNuevoNumero => {
    console.log(elNuevoNumero);
    return sumarUno(elNuevoNumero);
}).then(elNuevoNumero => {
    console.log(elNuevoNumero);
});