//funcao de fabrica
function criarCelular(marca) {
    const celular = {
        marcaCelular : 'ASUS',
        tamanhoTela : {
            vertical : 155,
            horizontal : 75
        },
        capacidadeBateria: 5000,
        ligar : function() {
            console.log("Fazendo ligação ...")
        }
    }
    function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
        return {
            marcaCelular,
            tamanhoTela,
            capacidadeBateria,
            ligar() {
                console.log("Fazendo ligação ...")
            }
        }
    }

   const celular1 = criarCelular('Zenfone', 5.5, 5000);
   console.log(celular1);
}