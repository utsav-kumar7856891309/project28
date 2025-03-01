function calculateTip(){
    const bill=parseFloat(document.getElementById('bill').value);
    const tip=parseFloat(document.getElementById('tip').value);
    const result=document.getElementById('result');
    if(isNaN(bill)||isNaN(tip)){
        result.textContent='please enter valid numbers';
        return ;
    }
    const tipamount=(bill*tip)/100;
    result.textContent=`tip amount: $${tipamount.toFixed(2)}`;
}