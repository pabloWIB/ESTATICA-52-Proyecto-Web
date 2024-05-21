$(function(){
    setTimeout(function(){
        $("#video").addClass("animationVideo1");
        $("#findMain").addClass("animationForm1");
    }, 700);
});

$(function(){
    setTimeout(function(){
        $("#width-adjust").addClass("animationN3");
    }, 1200);
});


const main = document.getElementById('findMain');
const section = document.getElementById('findSection');
const footer = document.getElementById('findFooter');
const nav = document.getElementById('findNav');
const formIndex = document.getElementById('formIndex').textContent = '1';

const circleSelect1 = document.getElementById('circle-select1');
const circleSelect2 = document.getElementById('circle-select2');
const circleSelect3 = document.getElementById('circle-select3');


const firstForm = document.getElementById('firstForm').addEventListener('submit', function(event){
    event.preventDefault();
    const namef1 = document.getElementById('namef1').value.trim();
    const emailf1 = document.getElementById('emailf1').value.trim();
    const findErrorsDiv = document.getElementById('findErrorsDiv');    
    const errorMassage1 = document.getElementById('errorMassage1');
    const errorMassage2 = document.getElementById('errorMassage2');

    const nameValue = document.getElementById('nameValue');
    const emailValue = document.getElementById('emailValue');

    if (namef1 === '' || emailf1 === '') {

        findErrorsDiv.classList = 'error-div-show';
        errorMassage1.textContent = namef1 === '' ? '• Ingresa tu nombre' : '';
        errorMassage2.textContent = emailf1 === '' ? '• Ingresa tu correo' : '';

    } else {

        errorMassage1.textContent = '';
        errorMassage2.textContent = '';

        findErrorsDiv.classList = 'error-div-hide';
        main.classList = 'display-none';
        section.classList = 'display-flex';
        nameValue.textContent = namef1;
        emailValue.textContent = emailf1;
        const formIndex = document.getElementById('formIndex').textContent = '2';
        circleSelect1.classList = 'circle-passed';
        circleSelect2.classList = 'circle-select';
    }
});


const secondForm = document.getElementById('secondForm').addEventListener('submit', function(event2){
    event2.preventDefault(); 

    const softwareD = document.getElementById('softwareD').checked;
    const userE = document.getElementById('userE').checked;
    const graphicD = document.getElementById('graphicD').checked;
    const formOptions = document.getElementById('formOptions');
    const selectedOptions = [];

    if (softwareD) {
        selectedOptions.push('Lectura de manos');
    }

    if (userE) {
        selectedOptions.push('Lectura de cartas');
    }

    if (graphicD) {
        selectedOptions.push('Lectura de bola');
    }

    if (selectedOptions.length === 0) {
        selectedOptions.push('Ninguno seleccionado');
    }

    formOptions.innerHTML = '';

    selectedOptions.forEach(option => {
        const optionElement = document.createElement('li');
        optionElement.textContent = option;
        formOptions.appendChild(optionElement);
    });

    section.classList = 'display-none';
    footer.classList = 'display-flex';
    const formIndex = document.getElementById('formIndex').textContent = '3';

    circleSelect2.classList = 'circle-passed';
    circleSelect3.classList = 'circle-select';

 });
