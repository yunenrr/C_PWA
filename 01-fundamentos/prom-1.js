function sumarUno(elNumero, laFuncionALlamar){
    if(elNumero >= 7){
        laFuncionALlamar('Número muy alto');
        return;
    }

    setTimeout(function() {
        laFuncionALlamar(null, elNumero + 1);
    }, 800);
}

sumarUno(5, function(elMensajeDeError, elNuevoValor){
    if(elMensajeDeError){
        console.log(elMensajeDeError);
        return;
    }

    sumarUno(elNuevoValor, function(elMensajeDeError, elNuevoValorDerivado){

        if(elMensajeDeError){
            console.log(elMensajeDeError);
            return;
        }

        sumarUno(elNuevoValorDerivado, function(elMensajeDeError, elNuevoValorDerivadoDeSegundoNivel){

            if(elMensajeDeError){
                console.log(elMensajeDeError);
                return;
            }

            console.log(elNuevoValorDerivadoDeSegundoNivel); 
        });
    });
});