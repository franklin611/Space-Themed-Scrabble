const WordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshButton = document.querySelector(".refresh-word"),
checkButton = document.querySelector(".check-word");

let correctWord,timer;

const initTimer = maxTime =>{
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0){
            maxTime--;
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert("Out of Time! The correct word was" + userWord);
        initGame();

    }, 1000);
}

const initGame = () =>{
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)]; //getting random objects from words
    let wordArray = randomObj.word.split(""); //splitting each letter of the word
    for (let i = wordArray.length - 1; i > 0; i --){
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    WordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value="";
    inputField.setAttribute("maxlength", correctWord.length); //Setting input to the length of teh word
    console.log (randomObj);
}

initGame();


const checkWord = () => {
     
    let userWord = inputField.value.toLocaleLowerCase();
    if(!userWord) return alert ('Please enter a word to be checked');
    if(userWord !== correctWord) return alert('Incorrect! Try Again.');
    alert('Correct!');
    initGame();
}

refreshButton.addEventListener("click", initGame);

checkButton.addEventListener("click", checkWord);