let slideIndex = 1;
showSlides(slideIndex);

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};




// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function handleSubmit(e){
  e.preventDefault();
  // get the value of the input
  let fname = document.getElementById('fname').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let query = document.getElementById('query').value;
  // validate fname 
  if(fname.length < 3){
    alert('Please enter a valid first name');
    return;
  }
  // validate email
  if(validateEmail(email) === false){
    alert('Please enter a valid email');
    return;
  }
  // validate phone
  if(phone.length < 10){
    alert('Please enter a valid phone number');
    return;
  }
  // validate query
  if(query.length < 10){
    alert('Please enter a valid query');
    return;
  }

console.log(fname, email, phone, query);



// clear all inputs
  document.getElementById('fname').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('query').value = '';
  alert('Thank you for your query');

}


// get form 
let form = document.querySelector('form');
// add event listener
form.addEventListener('submit', handleSubmit);




function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}