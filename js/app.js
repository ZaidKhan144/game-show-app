const qwertyDiv = document.getElementById('qwerty');
const phraseDiv = document.getElementById('phrase');
const startGameBtn = document.querySelector('.btn__reset');
var missed = 0;

var phrases = ['cat','bird','fish','lion','snake'];

startGameBtn.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});


const getRandomPhraseAsArray = arr =>{
    var randomNum = Math.floor(Math.random() * phrases.length);
    var randomPhrases = phrases[randomNum].split('');
    return randomPhrases;
}

const addPhraseToDisplay = arr => {
    
    for(let i =0 ; i<arr.length;i++){
        var listItem = document.createElement('li');
        const ul = document.querySelector('ul');
        
        listItem.innerHTML = arr[i];
        ul.appendChild(listItem);
        if(listItem === ' '){
            listItem.className = 'space';
        }else{
            listItem.className = 'letter';
        }
    }
    
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);


const checkLetter = button => {

    const checkLetter = document.querySelectorAll('li');
    var found = null;

    for(let i =0; i<checkLetter.length;i++){

        if(button.textContent === checkLetter[i].textContent){
            checkLetter[i].classList.add('show');
            found = button;
        }
    }
    return found;
}

qwertyDiv.addEventListener('click', (e) =>{
    
    if(e.target.tagName === 'BUTTON'){
       const buttonPressed = e.target;
        buttonPressed.className = 'chosen';
        
        if(buttonPressed.className === 'chosen'){
            buttonPressed.disabled = true;
        }
        const letterFound = checkLetter(buttonPressed);
        const tries = document.querySelectorAll('.tries img');
        
        if(letterFound === null){
            tries[missed].src = 'images/lostHeart.png';
            missed++;
        }
    }
    checkWin();
});

const checkWin = () => {

    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    const title = document.querySelector('.title');
    if(show.length === letter.length){
        overlay.className = 'win';
        
        title.textContent= 'You Won'; 
        overlay.style.display = 'flex';
    }
    if(missed >= 5){
        overlay.className = 'lose';
        title.textContent= 'You lost'; 
        overlay.style.display = 'flex';
    }
}