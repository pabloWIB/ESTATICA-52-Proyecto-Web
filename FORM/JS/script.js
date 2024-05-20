$(function(){
    setTimeout(function(){
        $("#video").addClass("animationVideo1");
    }, 700);
});



const main = document.getElementById('findMain');
const section = document.getElementById('findSection');
const footer = document.getElementById('findFooter');
const nav = document.getElementById('findNav');
const formIndex = document.getElementById('formIndex').textContent = '1';

const circleSelect1 = document.getElementById('circle-select1');
const circleSelect2 = document.getElementById('circle-select2');
const circleSelect3 = document.getElementById('circle-select3');

/*  FUNCTION #1 */

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
          errorMassage1.textContent = namef1 === '' ? '• Enter your name' : '';
          errorMassage2.textContent = emailf1 === '' ? '• Enter your email' : '';

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

/*  FUNCTION #2 */

const secondForm = document.getElementById('secondForm').addEventListener('submit', function(event2){
     event2.preventDefault(); 

     const softwareD = document.getElementById('softwareD').checked;
     const userE = document.getElementById('userE').checked;
     const graphicD = document.getElementById('graphicD').checked;
     const formOptions = document.getElementById('formOptions');
     const selectedOptions = [];
 
     if (softwareD) {
         selectedOptions.push('Software Development');
     }
 
     if (userE) {
         selectedOptions.push('User Experience');
     }
 
     if (graphicD) {
         selectedOptions.push('Graphic Design');
     }
 
     // Check if no options are selected
     if (selectedOptions.length === 0) {
         selectedOptions.push('None selected');
     }
 
     // Clear the existing content in formOptions
     formOptions.innerHTML = '';
 
     // Create and append elements for each selected option
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
 
 /* FUNCTIONS #3 */

 const thirdForm = document.getElementById('thirdForm').addEventListener('submit', function(event3){
     event3.preventDefault();
     footer.classList = 'transition-hide';
     nav.classList = 'transition-hide';
     function delayedDisplay(){
          footer.classList = 'display-none';
          nav.classList = 'display-none';
     }
     setTimeout(delayedDisplay, 560);
 });
