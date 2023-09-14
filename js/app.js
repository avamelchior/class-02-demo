'use strict';
console.log('js is running!');

//Question 1:
let userName;

function getUserName() {
  userName = prompt('What is your name?');
  console.log('username', userName);
}

getUserName();

//Question 2:

let message;
function sendMessage() {
  message = 'Thank you for taking my quiz,';
  console.log(message);
  document.write(message + ' ' + userName + '!');
}

sendMessage();

let userPoints = 0;

const isXavierAlumni = confirm("Did I go to Xavier High School? Select 'OK' for yes or 'Cancel' for no.");

if (isXavierAlumni) {
  alert("Yippee! I went to Xavier High School.");
  userPoints++;
} else {
  alert("Darn! I did go to Xavier High School.");
}

const myJob = confirm('Do I work at Microsoft?');

if (myJob) {
  alert("No, not yet. Maybe someday!");
} else {
  alert("You're right. Maybe someday, though!");
  userPoints++;
}

const piano = confirm('Have I ever taught piano?');

if (piano) {
  alert("Bingo! Piano's my favorite instrument.");
  userPoints++;
} else {
  alert("Erm, actually, I have taught piano.");
}

const myGoal = confirm('Do I plan to make a lasting impact on technology?');

if (myGoal) {
  alert("Correct, duh! Isn't that why I'm doing this assignment?");
  userPoints++;
} else {
  alert("Wrong. I'm trying to go places, here!");
}

const theYear = confirm('Did I start working at Stoney Point Meadows in 2012?');

if (myJob) {
  alert("Womp womp, that would've been illegal child labor.");
} else {
  alert("You're right, no child labor for Ava.");
  userPoints++;
}

const correctAnswer = 19;
let attempts = 4;

while (attempts > 0) {
  const userGuess = parseInt(prompt("How old am I? Guess a number between 1 and 100:"));

  if (userGuess === correctAnswer) {
    alert("Congratulations! You guessed it correctly.");
    userPoints++;
    break;
  } else if (userGuess < correctAnswer) {
    alert("Too low! Try again.");
  } else {
    alert("Too high! Try again.");
  }

  attempts--;

  if (attempts === 0) {
    alert(`Sorry, you've used all your attempts. The correct answer was ${correctAnswer}.`);
  }
}

const favoriteMusicals = [
  "godspell",
  "jesus christ superstar",
  "newsies",
  "fiddler on the roof",
  "the sound of music",
  "les mis",
  "white christmas",
  "singin' in the rain",
  "west side story",
  "spamalot"
];

let attempts2 = 6;

while (attempts2 > 0) {
  const userGuess = prompt(
    "What is one of my favorite musicals? You have 6 attempts. Enter your guess:"
  ).toLowerCase();

  if (favoriteMusicals.includes(userGuess)) {
    alert("Congratulations! That's one of my favorite musicals.");
    userPoints++;
    break;
  } else {
    alert("Sorry, that's not one of my favorite musicals. Please try again.");
  }

  attempts2--;

  if (attempts2 === 0) {
    alert("Sorry, you've used all your attempts. My favorite musicals are: " + favoriteMusicals.join(", "));
  }
}

alert(`Quiz completed! Your final score is: ${userPoints}/7`);
