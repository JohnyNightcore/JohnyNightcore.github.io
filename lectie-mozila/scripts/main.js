
let myimage = document.querySelector('#img1');
myimage.onclick = function() {
	let mysrc = myimage.getAttribute('src');
	if (mysrc === 'images/Kindred chibi.jpg'){
		myimage.setAttribute ('src','images/chibi 20.jpg');
	}else {
		myimage.setAttribute ('src','images/Kindred chibi.jpg');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else{
  localStorage.setItem('nume', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}
if(!localStorage.getItem('nume')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nume');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}