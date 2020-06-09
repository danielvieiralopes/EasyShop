const inputs = document.querySelectorAll('.input');

function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove('blur');
    }
}

inputs.forEach(inputs => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);

})