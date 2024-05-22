$(document).ready(function() {
    setTimeout(function() {
        $(".load").addClass("hideLoad");
    }, 700);
});

$(document).ready(function() {
    setTimeout(function() {
        $(".floatReadMe0").addClass("floatReadMe");
    }, 700);
});

$(document).ready(function() {
    setTimeout(function() {
        $(".instagramWeb").addClass("showLoad");
    }, 700);
});

const form = document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
    const user = document.getElementById('user').value.trim();
    const passw = document.getElementById('passw').value.trim();
    const findErrorsDiv = document.getElementById('findErrorsDiv');    
    const errorMassage1 = document.getElementById('errorMassage1');
    const errorMassage2 = document.getElementById('errorMassage2');

    const load = document.getElementById('load');
    const instagramWeb = document.getElementById('instagramWeb');
    const normalIg = document.getElementById('normalIg');

    const readmeGo = document.getElementById('readmeGo');

    if (user === '' || passw === '') {

        findErrorsDiv.classList = 'error-div-show';
        errorMassage1.textContent = user === '' ? '• Ingresa tu Teléfono, usuario o correo electrónico' : '';
        errorMassage2.textContent = passw === '' ? '• Ingresa tu contraseña' : '';

    } else {
        
        errorMassage1.textContent = '';
        errorMassage2.textContent = '';

        findErrorsDiv.classList = 'error-div-hide';
        load.classList = 'error-div-hide';
        instagramWeb.classList = 'error-div-hide';
        normalIg.classList = 'showNormalIg';        
        readmeGo.classList = 'floatReadMe0';
     }
});

