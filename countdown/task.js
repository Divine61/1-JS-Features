const countdown = function() {
  const score = document.getElementById(`timer`);
  score.textContent -= 1;
  if (score.textContent <= 0) {
    clearInterval(intervalId);
    alert(`Вы победили в конкурсе!`);
  }
};
const intervalId = setInterval(countdown, 1000);


// const score = String(document.getElementById(`timer`));
// let scoreArray = score.split(':');
// const countdown = function() {
//   scoreArray[2] -= 1;
//   score.textContent = scoreArray.join(`:`);
//   if (scoreArray[2] === 0) {
//     scoreArray[1] -= 1;
//     if (scoreArray[1] === 0) {
//       scoreArray[0] -= 1;
//       if (scoreArray === `00:00:00`) {
//         clearInterval(intervalId);
//         alert(`Вы победили в конкурсе!`);
//       }
//     }
//   }
// };

// const intervalId = setInterval(countdown, 1000);