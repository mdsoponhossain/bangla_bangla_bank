/* Step -1:Setting the EvenListener with the Submit Button */
document.getElementById('btn-submit').addEventListener('click',function(){
    /*   Step-2:Setting Up the email field and password field ,then capturing the value from that field. */ 
    const emailField =document.getElementById('email-field');
    const email = emailField.value;
    const passwordField =document.getElementById('password-field');
    const password = passwordField.value;
   
    /* Step-3:If email and password is valid ,then giving the permission to the next page.So set up the condition for it */
   if(email === 'mdsoponhossain2388@gmail.com' && password ==='abcd'){
      alert('You are a valid user');
      window.location.href='index-balance.html';
   }

   else{
      alert('your are not valid user');
   }

  })
