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
function calculate(operation){
    const num1=parseInt(document.getElementById('num1').value);
    const num2=parseFloat(document.getElementById('num2').value);
    const result=document.getElementById('result');
    if(isNaN(num1)|| isNaN(num2)){
        result.textContent="Please enter valid numbers!";
        return;
    }
    let output;
    switch(operation){
        case 'add':
            output=num1+num2;
            break;
        case 'subtract':
            output=num1-num2;
            break;
        case 'multiply':
            output=num1*num2;
            break;
        case divide:
            output = num2 !== 0 ? num1 / num2 : "Cannot divide by zero!";
            break;
    }
    result.textContent = "Result: " + output;
}
