

//Calculating the balance deposit




/* Step -1:adding the eventListener with the button of deposit */
document.getElementById('btn-deposit').addEventListener('click',function(){
    /* Step-2:setting up the deposit field and accessing the value; */
     const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const newDepositAmount =parseFloat(depositAmountString);

    const previousDeposit = document.getElementById('previous-deposit');
    const previousDepositElementString = previousDeposit.innerText;
    const previousDepositElement = parseFloat(previousDepositElementString);

    /* Step-3: Calculating the total deposit  */
    const totalDepositAmount = newDepositAmount + previousDepositElement;
    previousDeposit.innerText=totalDepositAmount
 
    /* Step-4:getting the previous balance field and accessing the innerText */
   const previousBalance = document.getElementById('previous-balance');
   const previousBalanceString =previousBalance.innerText;
   const previousBalanceAmount = parseFloat(previousBalanceString);
   /*Step-5: Calculating the current balance total */
   const currentBalanceTotal = previousBalanceAmount + newDepositAmount;
   /* Step-6:setting up the current balance in the position of previous balance */
   previousBalance.innerText = currentBalanceTotal;
   /* Step-7: Making the input deposit field clear */
   depositField.value='';
    
    })


    