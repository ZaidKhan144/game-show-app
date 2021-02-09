var phrases = ['alaska','hawaii','new jersy','oregon','louisiana','tennessee','missouri','wyoming','arkansas'];

    // Audio
  /* $("div button").mouseenter(function(){
 	$("<audio></audio>").attr({ 
 		'src':'audio/blop.aac', 
 		'volume':0.1,
		'autoplay':'autoplay'
 	}).appendTo("body");
 }); */

startGameBtn.addEventListener('click', ()=>{
    setTimeout(function(){
        $('#scoreboard').fadeIn(500); //scoreboard
     }, 500);
    setTimeout(function(){
        $('.header').fadeIn(500); //header
     }, 500);
    setTimeout(function(){
        $('#phrase').fadeIn(500); //phrases
     }, 500);
    setTimeout(function(){
        $('.keyrow1').fadeIn(500); //keyrow1
     }, 500);
     setTimeout(function(){
        $('.keyrow2').fadeIn(1000); //keyrow2
     }, 500);
     setTimeout(function(){
        $('.keyrow3').fadeIn(1500); //keyrow3
     }, 500);

 });
 

startGameBtn.addEventListener('click', () => {
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
        howTo.style.display = 'none'
    }
    if(missed >= 5){
        overlay.className = 'lose';
        h3.textContent = 'Sorry, you lost :(';
        startGameBtn.textContent = 'No, I got this.';
        overlay.style.display = 'flex';
        phraseDiv.style.display = 'none';
        howTo.style.display = 'none'
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