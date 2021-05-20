let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/code.png') {
      myImage.setAttribute('src','images/HTML.png');
    } else {
      myImage.setAttribute('src','images/code.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Dont be dumb like, ' + myName;
  }
}
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Dont be dumb like, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }