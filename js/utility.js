function hideElementById(elementID){
    const element = document.getElementById(elementID);

    element.classList.add('hidden');
}

function showElementById(elementID){
    const element = document.getElementById(elementID);

    element.classList.remove('hidden');

}

function setBackgroundColor(elementID){
    const element = document.getElementById(elementID);
    element.classList.add('bg-orange-400');
}

function removeBackgroundClor(elementID){
    const element = document.getElementById(elementID);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementID){
    const element = document.getElementById(elementID);
    const elementValueText = parseInt(element.innerText);

    return elementValueText;
}

function setTextElementValueById(elementID, value){
   const element = document.getElementById(elementID);
   element.innerText = value;
}

function getElementText(elementID){
    const element = document.getElementById(elementID);

    const text = element.innerText;
    return text;
}

function getArandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'; 
    const alphabets = alphabetString.split('');

    //Get a random index between 0-25

    const randomNum = Math.random() * 25;
    const randomIndex = Math.round(randomNum);
    // console.log(randomIndex);

    const alphabet = alphabets[randomIndex];

    return alphabet;
}