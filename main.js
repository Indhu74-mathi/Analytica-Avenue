// jQuery(document).ready(function($) {

//     //Count nr. of square classes
//     var countSquare = $('.square').length;
  
//     //For each Square found add BG image
//     for (i = 0; i < countSquare; i++) {
//       var firstImage = $('.square').eq([i]);
//       var secondImage = $('.square2').eq([i]);
  
//       var getImage = firstImage.attr('data-image');
//       var getImage2 = secondImage.attr('data-image');
  
//       firstImage.css('background-image', 'url(' + getImage + ')');
//       secondImage.css('background-image', 'url(' + getImage2 + ')');
//     }
  
//   });

function toggleMenu() {
    const navOverlay = document.querySelector('.nav-overlay');
    navOverlay.classList.toggle('show');
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbzOE0qPmZGBMOjCckcYQfLVRaQkoaW_kps-ps6yONMcUEQfYXEVr2G9Bb6OTKAbv7VH/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => {
            if (response.ok) {
                window.location.href = 'thankpage.html';
            } else {
                alert("Error! Form submission failed.");
            }
        })
        .catch((error) => {
            console.error('Error!', error.message);
            alert("Error! Unable to submit the form.");
        });
});
  

// ---------------------------------------------------------------
// function toggleMenu() {
//     const navLinks = document.querySelector('.nav-links');
//     navLinks.classList.toggle('show');
// }





