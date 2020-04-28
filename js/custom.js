//========== circle ============

var config = {
  easing: 'easeOutElastic',
  delay: 3000,
  barColor: '#69c',
  trackColor: '#ace',
  scaleColor: false,
  lineWidth: 10,
  trackWidth:10,
  size: 60,
  lineCap: 'butt'
};
new EasyPieChart(document.querySelector('#cssld'),config);
new EasyPieChart(document.querySelector('#phpld'),config);
new EasyPieChart(document.querySelector('#jsld'),config);
new EasyPieChart(document.querySelector('#vueld'),config);
new EasyPieChart(document.querySelector('#ftld'),config);
new EasyPieChart(document.querySelector('#ccppld'),config);
new EasyPieChart(document.querySelector('#pyld'),config);
new EasyPieChart(document.querySelector('#psld'),config);
new EasyPieChart(document.querySelector('#htmlld'),config);



//==================side-bar==================

(function () {
	
	$(".button").on('click', function(){
		$(".button").toggleClass("active");
		$(".sidebar").toggleClass("sidebar-active");
		$(".sidebar-item").toggleClass("active")
	})
	
	
	$("svg").on('click',function(){
		$("svg").toggleClass("cross")
	});


}).call(this);

//==================type-text==================

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Student", "Programmer", "Designer","Developer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

//================================
function toggleText(){
  var btn = document.querySelector("#morebtn");
  var dot = document.querySelector("#dot");
  var more = document.querySelector("#more");
  if(more.style.display == 'none'){
    more.style.display = 'inline';
    btn.textContent = 'Read Less';
    dot.style.display = 'none';
  }
  else{
    more.style.display = 'none';
    btn.textContent = 'Read More';
    dot.style.display = 'inline';
  }
}
