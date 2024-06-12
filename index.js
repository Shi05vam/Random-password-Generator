
let loweralpahbet = "abcdefghijklmnopqrstuwxyz";
let uppercaseAlphabet  = "ABCDEFGHIJKLMNOPOQRSTUWXYZ";
let number = "0123456789";
let Symbols = "!@#$%^&*";
let completeArray = [loweralpahbet,uppercaseAlphabet,number,Symbols];
// Now write a function to generate password of 8 character
let passwordArray =[];
function generatePassword(){
    for(let i=0;i<10;i++){
       let chooseElement =  completeArray[Math.floor(Math.random()*completeArray.length)];
       let passwordElement = chooseElement[Math.floor(Math.random()*chooseElement.length)];
       passwordArray.push(passwordElement);
}
toString();
//Write a code to delete the element of the password array! or simply refresh the page
window.location.reload();

}
//function to make array into string;
function toString(){
    let string = "";
    for(let i =0;i<passwordArray.length;i++){
         string = passwordArray[i] + string;
    }
    window.alert("Your random password is : " + string);

    
}

document.querySelector("button").addEventListener("click",generatePassword);


