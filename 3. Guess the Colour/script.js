var heading = document.getElementById("colourValue");
var buttons = document.getElementsByClassName("colourButton");
var answerButton = Math.round(Math.random() * (buttons.length - 1));
var answerMessage = document.getElementById('answer');

// Make element show
// heading.innerHTML = "Hello world!";

function setButtonColour(button, red, green, blue) {
  button.setAttribute(
    "style",
    "background-color: rgb(" + red + "," + green + "," + blue + ");"
  );
}

function makeColourValue() {
  return Math.round(Math.random() * 255);
}

for (let i = 0; i < buttons.length; i++) {
  var red = makeColourValue();
  var green = makeColourValue();
  var blue = makeColourValue();

  setButtonColour(buttons[i], red, green, blue);

  if (i === answerButton){
      heading.innerHTML = `(${red}, ${green}, ${blue})`;
  }
}

