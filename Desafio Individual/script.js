console.log('javascriptcarregado');

function validarCPF(cpf){

    if (cpf.length != 11) {
        return false;   
  }  else {
        
     var numeros = cpf.substring(0, 9);
     var digitos = cpf.substring(9);

}

function validação() {
    console.log('iniciando validação CPF')
    var cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf);
    
        var validação = validarCPF(cpf);
        
        if (resultadovalidacao) {
            return false;       
        }
        return true; {

        }
        numeros = cpf.substring(0, 10);

        for  (var k = 11; k > 1; k--){
            soma += numeros.charAt(11 - k) * k;
 
        }
        if(resultado != digitos.charAt(1)) {
            return false;
 
        }   
            
        
 
        return true;
   }
 
     }