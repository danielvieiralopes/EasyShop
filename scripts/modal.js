class Validator {

    constructor() {
        this.validations = [
            'data-min-length',
        ]
    }

    // iniciar a validacao de todos os campos
    validate(form){
        // pegar os inputs
        let inputs = form.getElementsByTagName('input');

     

        //transformo uma HTMLCollection -> array
        let inputsArray = [...inputs];

        // loop nos inputs e validacao mediante ao que for encontrado
        inputsArray.forEach(function(input){
            
            // loop em todas as validacoes existentes
            for(let i = 0; this.validations.length > i; i++){
                //verifica se a validacao atual existe no input
                if(input.getAttribute(this.validations[i]) != null) {
                  
                }
            }
            
        }, this)
    
    }
    

}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

// evento que dispara as validacoes 
submit.addEventListener('click', function(e) {

    e.preventDefault();

    validator.validate(form);
});