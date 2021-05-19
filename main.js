let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/code.png') {
      myImage.setAttribute('src','images/HTML.png');
    } else {
      myImage.setAttribute('src','images/code.png');
    }
}