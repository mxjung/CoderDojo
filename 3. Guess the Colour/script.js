var heading = document.getElementById("colourValue");
var buttons = document.getElementsByClassName("colourButton");
var answerMessage = document.getElementById("answer");

// Make element show
// heading.innerHTML = "Hello world!";

function setButtonColour(buttons, red, green, blue) {
  buttons.setAttribute(
    "style",
    "background-color: rgb(" + red + "," + green + "," + blue + ");"
  );
}

function makeColourValue() {
  return Math.round(Math.random() * 255);
}

function startGame() {
  // Erase any existing header element
  answerMessage.innerHTML = "";

  var answerButton = Math.round(Math.random() * (buttons.length - 1));

  for (let i = 0; i < buttons.length; i++) {
    var red = makeColourValue();
    var green = makeColourValue();
    var blue = makeColourValue();

    setButtonColour(buttons[i], red, green, blue);

    if (i === answerButton) {
      heading.innerHTML = `(${red}, ${green}, ${blue})`;
    }

    // Event Listener for Each Color Button
    buttons[i].addEventListener("click", function() {
      if (this === buttons[answerButton]) {
        answerMessage.innerHTML = "Correct!";
      } else {
        answerMessage.innerHTML = "Wrong answer! Guess again!";
      }
    });
  }
}

startGame();

// Event Listener to re-start game when reset button is clicked on
document.getElementById("resetButton").addEventListener("click", startGame);
