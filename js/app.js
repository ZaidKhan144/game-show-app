const qwertyDiv = document.getElementById('qwerty');
const phraseDiv = document.getElementById('phrase');
const startGameBtn = document.querySelector('.btn__reset');
const ul = document.querySelector('ul');
var missed = 0;

var phrases = ['ass aa dd','ass aa dd','ass aa dd','ass aa dd','a'];

$("div button").mouseenter(function(){
	$("<audio></audio>").attr({ 
		'src':'audio/blop2.mp3', 
		'volume':0.4,
		'autoplay':'autoplay'
	}).appendTo("body");
});


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
        
        
        listItem.innerHTML = arr[i];
        ul.appendChild(listItem);
        if(listItem.textContent === ' '){
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
            // button.style.backgroundColor = 'black';
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
    const h3 = document.querySelector('.result');
    const phraseDiv = document.getElementById('phrase');
    if(show.length === letter.length){
        overlay.className = 'win'; 
        h3.textContent = 'You Won, Nice One!';
        startGameBtn.textContent = 'One More Now';
        overlay.style.display = 'flex';
        phraseDiv.style.display = 'none';
    }
    if(missed >= 5){
        overlay.className = 'lose';
        h3.textContent = 'LOL You Lost!';
        startGameBtn.textContent = 'No, I got this.';
        overlay.style.display = 'flex';
        phraseDiv.style.display = 'none';
    }

        reset();
}

const reset = () => {
    startGameBtn.addEventListener('click', ()=>{
        overlay.className = 'start';
        missed = 0;

        ul.textContent = '';
        phraseDiv.style.display = '';

        const liveHeart = document.querySelectorAll('.tries img');
        
        for(let i =0; i< liveHeart.length;i++){
           
            liveHeart[i].src = 'images/liveHeart.png';
        }

        let removeChosen = document.querySelectorAll('.chosen');
        for(let i =0;i<removeChosen.length;i++){
            removeChosen[i].classList.remove('chosen');
            removeChosen[i].disabled = false;
        }
        

        const phraseArray = getRandomPhraseAsArray(phrases);
        addPhraseToDisplay(phraseArray);
    });
}