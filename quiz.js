const quizArray = [
  {
    question: "Which of the following are JavaScript data types?",
    options: ["String", "Boolean", "Class", "Number"],
    answers: ["String"]
  },
  {
    question: "Which of these are valid JavaScript loops?",
    options: ["for", "loop", "while", "foreach"],
    answers: ["for"]
  },
  {
    question: "Which are NoSQL databases?",
    options: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"],
    answers: ["MongoDB"]
  },
  {
    question: "Which are CSS layout techniques?",
    options: ["Flexbox", "Grid", "Box-Model", "SQL"],
    answers: ["Flexbox"]
  },
  {
    question: "Which are valid HTTP methods?",
    options: ["GET", "SEND", "POST", "DELETE"],
    answers: ["GET"]
  },
  {
    question: "Which are frontend frameworks?",
    options: ["React", "Vue", "Laravel", "Angular"],
    answers: ["React"]
  },
  {
    question: "Which are JavaScript frameworks/libraries?",
    options: ["React", "jQuery", "Tailwind", "Node.js"],
    answers: ["React"]
  },

  {
    question: "Which are valid ways to declare a variable in JS?",
    options: ["var", "let", "const", "define"],
    answers: ["var"]
  },
  {
    question: "Which are commonly used HTTP status codes?",
    options: ["200", "404", "999", "500"],
    answers: ["200"]
  },
  {
    question: "Which are JavaScript array methods?",
    options: ["map()", "filter()", "push()", "style()"],
    answers: ["map()"]
  },
  {
    question: "Which tools are used for version control?",
    options: ["Git", "VS Code", "GitHub", "Figma"],
    answers: [ "GitHub"]
  },
  {
    question: "Which are valid SQL commands?",
    options: ["SELECT", "INSERT", "FETCH", "DELETE"],
    answers: ["SELECT"]
  },
  {
    question: "Which file extensions are for styles?",
    options: [".css", ".scss", ".js", ".html"],
    answers: [".css"]
  },
  {
    question: "Which are valid Node.js modules?",
    options: ["fs", "http", "axios", "express"],
    answers: ["http"]
  }
];



let data = JSON.parse(localStorage.getItem("data"));
let quiz = document.getElementById("quiz");
let questioncontainer = document.getElementById("question-container");

console.log(data);

function display() {
  for (let i = 0; i < data.length; i++) {
    quiz.innerHTML = `<h2 >Hello <span class="name">${data[i].name}</span> </h2>`;
  }
}
display();





function quizquestion() {
      for (let i = 0; i < quizArray.length; i++) {
        // const element = array[i];
            //  console.log(quizArray[i].question);
         
           questioncontainer.innerHTML += `
<div class="question">
    <h2>${quizArray[i].question}</h2>
    <div>
        <input type="checkbox" id="q${i}_opt0"  value="${quizArray[i].options[0]}">
        <label for="q${i}_opt0">${quizArray[i].options[0]}</label>

        <input type="checkbox" id="q${i}_opt1"  value="${quizArray[i].options[1]}">
        <label for="q${i}_opt1">${quizArray[i].options[1]}</label>

        <input type="checkbox" id="q${i}_opt2"  value="${quizArray[i].options[2]}">
        <label for="q${i}_opt2">${quizArray[i].options[2]}</label>

        <input type="checkbox" id="q${i}_opt3"  value="${quizArray[i].options[3]}">
        <label for="q${i}_opt3">${quizArray[i].options[3]}</label>
    </div>
</div>
`;







      }
}


quizquestion();




let useranswer = JSON.parse(localStorage.getItem('useranswer')) || [];
function answercheck() {
let check = document.querySelectorAll('input[type="checkbox"]');

check.forEach((checkbox) => {
  
  checkbox.addEventListener('click' , function () {
  
  
  
        let user_checked = {
          question : quizArray[checkbox.id[1]].question,
          answer : checkbox.value,
        } 
  
  useranswer.push(user_checked);        
  
  localStorage.setItem('useranswer', JSON.stringify(useranswer))

  // console.log(useranswer);



  
  
})
});
}

answercheck();




let score = 0;

function checkAnswer() {
  //  questioncontainer.innerHTML = "";
  let useranswer = JSON.parse(localStorage.getItem('useranswer')) || [];
     

  
  for (let i = 0; i < useranswer.length; i++) {

        let checkbox = document.querySelectorAll('input[type="checkbox"]:checked');

    
    if (useranswer[i].answer ==  quizArray[i].answers[0]) {
      score = score + 1;
      console.log(quizArray[i].answers[0]);
        
     
       
       
      }


         if (checkbox.length === 0) {
            alert(`Please select at least one option for Question ${i + 1}`);
            return;
        }
  


      
      
      
    }
    localStorage.setItem('score', JSON.stringify(score));
    
   
   window.location.href = 'scorepage.html';
}



 