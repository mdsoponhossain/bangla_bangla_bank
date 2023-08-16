 /* Withdraw calculating */
 
 /* Step-1:setting up a event handler with the withdraw button */
 document.getElementById('btn-withdraw').addEventListener('click',function(){
    /* Step -2:getting up the withdraw field and getting the value from withdraw field */
    const withdrawField =document.getElementById('withdraw-field');
    const withdrawfieldElementString = withdrawField.value;
    const withdrawfieldElement =parseFloat(withdrawfieldElementString);

    /* validation for entering the numbers */
    if(isNaN( withdrawfieldElement)){
        alert('Please enter a valid number');
        withdrawField.value ='';
        return;
    }
    



    /* Step-3:getting up the previous withdrawtotal and accessing the innerText */
    const previousWithdraw = document.getElementById('previous-withdraw');
    const previousWithdrawElementString = previousWithdraw.innerText;
    const previousWithdrawAmount =parseFloat(previousWithdrawElementString);
    /* Step-4:Current total calculation */
    
    

    /* Step -5:accessing the balance and getting the innerText */
    const previousBalance = document.getElementById('previous-balance');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceString);

    /* validation of withdraw more than balance */
     if(withdrawfieldElement > previousBalanceAmount ){
        alert('Your balance is  not sufficient');
        withdrawField.value='';
        return ;
    }
    const currentTotalWithdraw = previousWithdrawAmount + withdrawfieldElement;
    previousWithdraw.innerText = currentTotalWithdraw;


    currentBalanceTotal = previousBalanceAmount -withdrawfieldElement;
    previousBalance.innerText=currentBalanceTotal;
    withdrawField.value ='';
    
    
   

})
