
let data = JSON.parse(localStorage.getItem("data"));
let quiz = document.getElementById("quiz");


function display() {
  for (let i = 0; i < data.length; i++) {
    quiz.innerHTML = `<h2 >Hello <span class="name">${data[i].name}</span> </h2>`;
  }
}
display();




let userscore = document.getElementById('score');
 

let score = localStorage.getItem('score');
userscore.innerHTML = `Your score is ${score} / 14`;

function restartQuiz() {
  
    localStorage.removeItem('useranswer');
    localStorage.removeItem('data');
  localStorage.removeItem('score');


  window.location.href = 'index.html';
}