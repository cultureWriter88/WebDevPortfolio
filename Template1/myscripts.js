// SLIDESHOW ANIMATION   
// starting point
var i = 0;
var images = [];
var time = 3000;

// list of images
images[0]='images/image1.jpg';
images[1]='images/image2.jpg';
images[2]='images/image3.jpg';
images[3]='images/image4.jpg';

// the function that makes it move
function changeImg(){
    document.slide.src = images[i];

    if (i < images.length-1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()",time); // the timing

}
window.onload = changeImg; //start after page is loaded

///////////////////////////////////////////////////

//Slide-In Text Animation
function scrollAppear(){
var introText=document.querySelector('.intro-text');
var introPosition=introText.getBoundingClientRect().top;
var screenPosition=window.innerHeight/2;
if(introPosition<screenPosition){
    introText.classList.add('intro-appear');
} else {
document.getElementById("navbar").style.top = "-50px";
}
}
window.addEventListener('scroll',scrollAppear);

///////////////////////////////////////////////////

// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar//
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
document.getElementById("navbar").style.top = "0";
} else {
document.getElementById("navbar").style.top = "-50px";
}
prevScrollpos = currentScrollPos;
}

///////////////////////////////////////////////////














function validate(){
var name = document.getElementById("name").value;
var subject = document.getElementById("subject").value;
var phone = document.getElementById("phone").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;
var error_message = document.getElementById("error_message");

error_message.style.padding = "10px";

var text;
if(name.length < 5){
text = "Please Enter valid Name";
error_message.innerHTML = text;
return false;
}
if(subject.length < 10){
text = "Please Enter Correct Subject";
error_message.innerHTML = text;
return false;
}
if(isNaN(phone) || phone.length != 10){
text = "Please Enter valid Phone Number";
error_message.innerHTML = text;
return false;
}
if(email.indexOf("@") == -1 || email.length < 6){
text = "Please Enter valid Email";
error_message.innerHTML = text;
return false;
}
if(message.length <= 140){
text = "Please Enter More Than 140 Characters";
error_message.innerHTML = text;
return false;
}
alert("Form Submitted Successfully!");
return true;
}