var waldoImages = {
  'waldo1.jpg': {x: 179, y: 170},
  'waldo2.jpg': {x: 509, y: 283},
  'waldo3.jpg': {x: 1222, y: 61}
};

var respondToClick = function(image, x, y) {
  console.log(x, y);

  var waldoFile = image.getAttribute('value'); // TODO is this too complicated?
  //var waldoFile = 'waldo1.jpg'; // Don't forget to change this!

  var solutionX = waldoImages[waldoFile].x;
  var solutionY = waldoImages[waldoFile].y;

  var distance = getDistance(solutionX, solutionY, x, y);

  if (distance <= 30) {
  	alert("You found Waldo!");
  } else if (distance < 200) {
  	alert("That's not where he is, but you're pretty close!");
  } else {
  	alert("You are way off!");
  }
};

// Use the Pythagorean theorem!
// TODO: Ask Kerem what the Pythagorean theorem is called in Turkey.
var getDistance = function(firstX, firstY, secondX, secondY) {
  var a = firstX - secondX;
  var b = firstY - secondY;
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};

var addWaldoGame = function(divId) {
  var waldoImage = document.createElement('img');
  var waldoFilename = 'waldo1.jpg';
  waldoImage.src = waldoFilename;
  waldoImage.setAttribute('value', waldoFilename);

  document.getElementById(divId).appendChild(waldoImage);

  waldoImage.onclick = function(e) {
  	respondToClick(waldoImage, e.pageX - waldoImage.offsetLeft, e.pageY - waldoImage.offsetTop);
  }
};
