//slider
let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 10000)

function nextImage(){
    count++;
    if(count>4){
        count =1;
    }

    document.getElementById("radio"+count).checked = true;

}




//formulário 




const inputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea')

inputs.forEach(input => {

    input.addEventListener('focus', () => {
        input.parentElement.querySelector('label').classList.add('active');
    });

    input.addEventListener('blur', () => {
        if(input.value === '') {
            input.parentElement.querySelector('label').classList.remove('active');
        }
    });

});