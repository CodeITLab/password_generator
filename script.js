let button = document.getElementById('btn');
     const password = document.querySelector('.password')

     const length = 30;

     

     button.onclick =function createPasword(){
        let randomPassword = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@_.,{"!?=*+-&%$#~'
    while(length > randomPassword.length){
         randomPassword+= characters.charAt(Math.floor(Math.random() * characters.length))
        
        }
        password.innerHTML = randomPassword;
            
        
      }