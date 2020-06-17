class validator {

    constructor() {
        this.validations = [

        ]
    }

    // iniciar a validacao de todos os campos 
    validate(form){

        // pegar os inputs 
        let inputs = form.getElementByTagName('input');

        // htmlcollection -> array
        let inputsArray = [...inputs];

        console.log(inputsArray)
    }

}


let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new validator();

// evento que dispara as validacoes 
submit.addEventListener('click', function(e) {

    e.preventDefault();


    validator.validate(form);
})