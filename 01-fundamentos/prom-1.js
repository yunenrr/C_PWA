function sumarUno(elNumero, laFuncionALlamar){
    setTimeout(function() {
        laFuncionALlamar(elNumero + 1);
    }, 800);
}

sumarUno(5, function(elNuevoValor){
    console.log(elNuevoValor); 
});