// const quotes = [
//     "Believe in yourself!",
//     "Stay focused and never give up.",
//     "Dream big, work hard.",
//     "Success is no accident.",
//     "Be the change you wish to see."
// ];

// function generateQuote() {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     document.getElementById('quote').textContent = quotes[randomIndex];
// }
// function calculate(operation){
//     const num1=parseInt(document.getElementById('num1').value);
//     const num2=parseFloat(document.getElementById('num2').value);
//     const result=document.getElementById('result');
//     if(isNaN(num1)|| isNaN(num2)){
//         result.textContent="Please enter valid numbers!";
//         return;
//     }
//     let output;
//     switch(operation){
//         case 'add':
//             output=num1+num2;
//             break;
//         case 'subtract':
//             output=num1-num2;
//             break;
//         case 'multiply':
//             output=num1*num2;
//             break;
//         case divide:
//             output = num2 !== 0 ? num1 / num2 : "Cannot divide by zero!";
//             break;
//     }
//     result.textContent = "Result: " + output;
// }
// function updateclcok(){
//     const now= new Date();
//     const time=now.toLocaleTimeString();
//     document.getElementById('clock').textContent=time;
// }
// setInterval(updateclcok,1000);
// function addtask(){
//     const task=document.getElementById('task').value;
//     if(task.trim()==="") return;
//     const list=document.getElementById('tasklist');
//     const listItem=document.createElement('li');
//     listItem.textContent=task;
//     list.appendChild(listItem);
    
// }
// const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

// function gerneratepassword() {
//     let password = "";
//     for (let i = 0; i < 12; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         password += characters[randomIndex];
//     }
//     document.getElementById('password').textContent = password;
// }
function calculate(){
    const weight =parseFloat(document.getElementById('weight').value);
    const height =parseFloat(document.getElementById('height').value);
    const result=document.getElementById('result');
    if(isNaN(weight)|| isNaN(height)){
        result.textContent="Please enter valid numbers";
        return ;
    }
    const bmi=(weight/(height*height)).toFixed(2);
    result.textContent=`Your BMI: ${bmi}`;
}
