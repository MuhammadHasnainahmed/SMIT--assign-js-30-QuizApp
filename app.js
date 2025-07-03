// const { use } = require("react");

let user_name = document.getElementById('name');
let user_rollnumber = document.getElementById('number');
// let data = JSON.parse(localStorage.getItem('data')) || []

let data = [];
function getData(event) {
    event.preventDefault(); 

    let userdata = {
        name : user_name.value,
        rollnumber : user_rollnumber.value,
    }
    
    

        
        if (userdata.name == '' || userdata.rollnumber == '') {
            alert('Please fill all the fields');
            
        }else{

            
        data.push(userdata)
    
        localStorage.setItem('data', JSON.stringify(data));

            window.location.href = 'quiz.html';
        }


    
    
    
    console.log(data);


    user_name.value = '';
    user_rollnumber.value = '';
}