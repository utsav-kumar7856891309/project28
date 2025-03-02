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
// function calculate(){
//     const weight =parseFloat(document.getElementById('weight').value);
//     const height =parseFloat(document.getElementById('height').value);
//     const result=document.getElementById('result');
//     if(isNaN(weight)|| isNaN(height)){
//         result.textContent="Please enter valid numbers";
//         return ;
//     }
//     const bmi=(weight/(height*height)).toFixed(2);
//     result.textContent=`Your BMI: ${bmi}`;
// }
let expenses = [];
const expenseList = document.getElementById('expenseList');
const totalAmount = document.getElementById('totalAmount');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', addExpense);

function addExpense() {
    const name = document.getElementById('expenseName').value.trim();
    const amount = parseFloat(document.getElementById('expenseAmount').value.trim());

    if (name === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid expense name and amount.');
        return;
    }

    const expense = { id: Date.now(), name, amount };
    expenses.push(expense);
    updateUI();
    clearInputs();
}

function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    updateUI();
}

function updateUI() {
    expenseList.innerHTML = '';
    let total = 0;

    expenses.forEach(expense => {
        total += expense.amount;
        const li = document.createElement('li');
        li.innerHTML = `${expense.name}: ₹${expense.amount} 
            <button class="delete-btn" onclick="deleteExpense(${expense.id})">Delete</button>`;
        expenseList.appendChild(li);
    });

    totalAmount.textContent = total;
}

function clearInputs() {
    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';
}








