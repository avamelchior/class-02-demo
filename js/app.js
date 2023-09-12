'use strict';
console.log('js is running!');

let userName = prompt('What is your name?');
console.log('username', userName);

let message;
message = 'Thank you for taking my quiz,';
console.log(message);
document.write(message + ' ' + userName + '!');

const isXavierAlumni = confirm("Did I go to Xavier High School? Select 'OK' for yes or 'Cancel' for no.");

if (isXavierAlumni) {
   alert("Yippee! I went to Xavier High School.");
 } else {
   alert("Darn! I did go to Xavier High School.");
 }

 const myJob = confirm('Do I work at Microsoft?');

if (myJob) {
   alert("No, not yet. Maybe someday!");
 } else {
   alert("You're right. Maybe someday, though!");
 }

 const piano = confirm('Have I ever taught piano?');

 if (piano) {
    alert("Bingo! Piano's my favorite instrument.");
  } else {
    alert("Erm, actually, I have taught piano.");
  }

  const myGoal = confirm('Do I plan to make a lasting impact on technology?');

  if (myGoal) {
     alert("Correct, duh! Isn't that why I'm doing this assignment?");
   } else {
     alert("Wrong. I'm trying to go places, here!");
   }

   const theYear = confirm('Did I start working at Stoney Point Meadows in 2012?');

   if (myJob) {
      alert("Womp womp, that would've been illegal child labor.");
    } else {
      alert("You're right, no child labor for Ava.");
    }