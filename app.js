let password = document.getElementById("password");

document.querySelector("img").addEventListener("click", generateRandomPassword);

function generateRandomPassword() {
    
    let letterArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","w","x","y","z"];
    let characterArray = ["!","@","#","$","%","/","&","*","?"];
    
    // Characters 1 2 3
    let randomLetter = Math.floor(Math.random() * 27);
    let randomNumber = Math.floor(Math.random() * 10);
    let randomCharacter = Math.floor(Math.random() * 8);
    
    // Characters 4 5 6
    let randomLetter2 = Math.floor(Math.random() * 27);
    let randomNumber2 = Math.floor(Math.random() * 10);
    let randomCharacter2 = Math.floor(Math.random() * 8);

    // Characters 7 8 9
    let randomLetter3 = Math.floor(Math.random() * 27);
    let randomNumber3 = Math.floor(Math.random() * 10);
    let randomCharacter3 = Math.floor(Math.random() * 8);
    
    password.innerHTML = letterArray[randomLetter] + randomNumber + characterArray[randomCharacter]
                        + letterArray[randomLetter2] + randomNumber2 + characterArray[randomCharacter2]
                        + letterArray[randomLetter3] + randomNumber3 + characterArray[randomCharacter3];

}
generateRandomPassword();