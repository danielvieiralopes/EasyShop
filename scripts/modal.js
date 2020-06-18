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
                  
                    // limpando a string para virar um metodo 
                    let method = this.validations[i].replace('data-','').replace('-','');

                    // valor do input 
                    let value = input.getAttribute(this.validations[i]);

                    // invocar o metodo 
                    this[method](input, value);
                }
            }
            
        }, this);
    
    }


    // verifica se um input tem um numero minimo de caracteres

    minlength(input, minValue){

       let inputLength = input.value.length;

       let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;

       if(inputLength < minValue){
           this.printMessage(input, errorMessage);
       }
    }

    // metodo para imprimir mensagens de erro na tela 
    printMessage(input, msg){

        let template = document.querySelector('.error-validation').cloneNode(true);

        template.textContent = msg;

        let inputParent = input.parentNode;

        template.classList.remove('template');

        inputParent.appendChild(template);
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