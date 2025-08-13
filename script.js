const body = document.querySelector("body")
const swipHero=document.querySelector(".swip-hero")

const heroBtn=document.querySelector(".hero-btn")
const selectBtn=document.querySelector(".select")

const fightHero=document.querySelector(".hero")
const villainCard=document.querySelector(".villains")
const allOptions=document.querySelector(".all-options")
const heroOption=document.querySelector(".option-image")
const villainOption=document.querySelector(".option-image-villain")

const villainTwo=document.querySelector(".villain-two")
const villainThree=document.querySelector(".villain-three")
const heroCount=document.querySelector(".hero-count")
const villainCount=document.querySelector(".villain-count")
const villainOne=document.querySelector(".villain-one")
const villainTwoImage=document.querySelector(".villain-two-img")
const villainSrc=document.querySelector(".villain-src")
const levelShow=document.querySelector(" .level")

const villainOneText=document.querySelector(".villain-one-img")
const villainTwoText=document.querySelector(".villain-two-img")
const villainThreeText=document.querySelector(".villain-three-img")

const resetBtn=document.querySelector(".reset")
const resultMsg=document.querySelector(".result-msg")
const heroSrc=document.querySelector(".hero")
const headerLevel=document.querySelector(".header-level")

const villainDefeatOne=document.querySelector('.defeat-count-first')
const villainDefeatTwo=document.querySelector('.defeat-count-second')
const villainDefeatThree=document.querySelector('.defeat-count-third')


const winCount=document.querySelector(".win-percent")
const lossesCount=document.querySelector(".losses-count")

const totalGame=document.querySelector(".win-count ")
const winningRate=document.querySelector(".winn-rate")

const statsBtn=document.querySelector(".stats-btn")
const closeBtn=document.querySelector(".close-tab")


/** hero win Quote */
let heroWinQuote=[
  "Justice never loses. You did it, Hero! Get ready for the next battle!",


 "Your alien powers are unmatched! Get ready for the next battle!",


 "Another villain bites the dust. You're unstoppable! Get ready for the next battle!",


 "The Omnitrix chose you for a reason. Keep going! Get ready for the next battle!",


 "Heroic moves! The universe is safer because of you. Get ready for the next battle!",


 "One step closer to saving the world. You're on fire! Get ready for the next battle!",


 "That villain never stood a chance. You’re a true hero! Get ready for the next battle!",


 "Well played! Ben would be proud. Get ready for the next battle!",


 "From Earth to the galaxy — your name echoes as a hero! Get ready for the next battle!",


 "Level up, Hero! You've proven your strength again. Get ready for the next battle!",
]

/** villain win Quotes*/

let villainWinQuotes=[
  "Haha! Even Ben 10 couldn't save you. You have to play again!",
  
  "Your powers are laughable. You have to play again!",
  
  "Villains always win. Didn’t you know? You have to play again!",
  
   "Another L for the hero! You have to play again!",
   
   "You're not hero enough for me. Try again!",
   
   "That was too easy. You have to play again!",
   
   "The universe doesn’t need weak heroes. You have to play again!",

  "Even your Omnitrix gave up! You have to play again!",
  
  "Come back when you're stronger. You have to play again!"
]


let aliens=[
  "ben-10-heros-collection/hero-2.png",
 "ben-10-heros-collection/hero-3.png",
"ben-10-heros-collection/hero-4.png",
"ben-10-heros-collection/hero-5.png",
"ben-10-heros-collection/hero-1.png",
"ben-10-heros-collection/hero-6.png",
"ben-10-heros-collection/hero-7.png",
"ben-10-heros-collection/hero-8.png"

]
let aliensBoxCount=0;

let heroWin=0;
let villainWin=0
let gameLevels=1

/** villain-defeat-count (Leaderboard) */
let villainDefeatCountOne=0
let villainDefeatCountTwo=0
let villainDefeatCountThree=0

/** win-losses count (game stats) */
let gameWin=0
let gameLose=0

/** total game you played + winning-rate (game stats) */
let totalGameCount=0
let winningRateCount=0

heroSrc.src="ben-10-heros-collection/ben-pic.png"
/** disabled elements**/

resetBtn.style.pointerEvents="none"
resetBtn.style.filter="grayscale(100%)"

allOptions.style.pointerEvents="none";
  allOptions.style.filter="grayscale(100%)"
  
  villainCard.style.pointerEvents="none"
  villainCard.style.filter="grayscale(100%)"
  
  
  heroOption.src=""
  villainOption.src=""
  
  villainTwo.style.pointerEvents="none"
  villainTwo.style.filter="grayscale(100%)"
  
  villainThree.style.pointerEvents="none"
  villainThree.style.filter="grayscale(100%)"
  
  selectBtn.style.pointerEvents="none"
  selectBtn.style.filter="grayscale(100%)"
  

/** show leaderboard(stats)-button */
statsBtn.addEventListener("click",()=>{
  body.classList.add("active")
})

/** close leaderboard */
closeBtn.addEventListener("click",()=>{
  body.classList.remove("active")
})


/** character-swip-and-change functions & eventlistner**/

heroBtn.addEventListener("click",()=>{
  
  resultMsg.innerText=""
  
  swipHero.src=changeAliens();

  selectBtn.style.pointerEvents="auto"
  selectBtn.style.filter="grayscale(0%)"
  
allOptions.style.pointerEvents = "none";
allOptions.style.filter = "grayscale(100%)"
  
})

selectBtn.addEventListener("click",()=>{
  

fightHero.src=swipHero.src

heroBtn.style.pointerEvents="none";
heroBtn.style.filter="grayscale(100%)"

selectBtn.style.pointerEvents="none"
selectBtn.style.filter="grayscale(100%)"


setTimeout (()=>{
  
allOptions.style.pointerEvents="auto"
allOptions.style.filter = "grayscale(0%)"

villainCard.style.pointerEvents="auto"
villainCard.style.filter = "grayscale(0%)"

}, 2000)

if(fightHero.src===swipHero.src){
  swipHero.src=""
swipHero.style.backgroundColor="black"


}

totalGamePlayed()
})
function changeAliens(){
  let changeIndex=Math.floor(Math.random()*8)
  
  let changedAliens=aliens[changeIndex]
  
 return  changedAliens
 
}

//


/*stone-paper-secissor game*/

const userBtn=document.querySelectorAll("#game")
console.log(userBtn)


let computer=["stone","paper","secissor"]


    
    
userBtn.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    let heroChoice=btn.className
  
  if(heroChoice==="stone"){
    heroOption.src="Stone-paper-secissor/stone.jpg"
  }else if(heroChoice==="paper"){
    heroOption.src="Stone-paper-secissor/paper.jpg"
  }else if(heroChoice==="secissor"){
    heroOption.src="Stone-paper-secissor/secissor.jpg"
  };
  
  levelCounting(heroChoice,villainChoice);
  ifHeroWin(heroQuote);
  ifVillainWin(villainQuote);
   calcWinningRate();
  })
})

/*villain choice*/
let villainGenerte=[]
function villainChoice(){

   let randomIndex=Math.floor(Math.random()*3);
  
   villainGenerte= computer[randomIndex]
  
  
  if(villainGenerte==="stone"){
    villainOption.src="Stone-paper-secissor/stone.jpg"
  }else if(villainGenerte==="paper"){
    villainOption.src="Stone-paper-secissor/paper.jpg"
  }else if(villainGenerte==="secissor"){
    villainOption.src="Stone-paper-secissor/secissor.jpg"
  }
  return villainGenerte
}

/** level-counting**/
let villainSelect
function levelCounting(heroChoice){
 villainSelect=villainChoice()
  
  if((heroChoice==="stone" && villainSelect==="secissor")||(heroChoice==="secissor" && villainSelect==="paper")||(heroChoice==="paper"&&villainSelect==="stone")){
     heroWin++
     heroCount.innerText=heroWin
     if(villainCount.innerText<1){
       villainCount.innerText=villainWin=0
     }else{
       villainWin--
       villainCount.innerText=villainWin
     }
  }else if((villainSelect==="stone" && heroChoice==="secissor") ||(villainSelect==="secissor" && heroChoice==="paper")||(villainSelect==="paper" &&heroChoice==="stone")){
    villainWin++
    villainCount.innerText=villainWin
    
    if(heroCount.innerText<1){
       heroCount.innerText=0
     }else{
       heroWin--
       heroCount.innerText=heroWin
     }
  }else if(villainSelect===heroChoice){
    heroWin=0
    heroCount.innerText=heroWin;
    villainWin=0;
    villainCount.innerText=villainWin;
  }
 
}


/** hero quote*/

function heroQuote(){
  let quoteRandom=Math.floor(Math.random()*10)
  
  let quoteGenerator= heroWinQuote[quoteRandom]
  
  return quoteGenerator;
}


/** If-hero-win**/

function ifHeroWin(){
  
  let heroQuotess=heroQuote()
  
  if(heroWin===2 && levelShow.innerText==="1" && villainWin<=1){
   gameWin++
   winCount.innerText=gameWin

     villainDefeatCountOne++
      villainDefeatOne.innerText= villainDefeatCountOne

    resultMsg.innerText=heroQuotess
    resultMsg.style.color="green"
    
    levelShow.innerText="2"
    
    
    allOptions.style.pointerEvents = "none";
allOptions.style.filter="grayscale(100%)"

villainOne.style.pointerEvents="none"
villainOne.style.filter="grayscale(100%)"
villainOneText.innerText="Completed"


setTimeout(()=>{
  heroSrc.src="ben-10-heros-collection/ben-pic-2.png"
  heroBtn.style.pointerEvents="auto"
heroBtn.style.filter = "grayscale(0%)"
heroWin=0;
    heroCount.innerText=heroWin
    villainWin=0;
    villainCount.innerText=villainWin

villainTwo.style.pointerEvents="auto"
villainTwo.style.filter="grayscale(0%)"

    villainSrc.src="ben10-villain-collection/villain-2.png"
}, 3000)

  }else if(heroWin===2 && levelShow.innerText==="2" && villainWin<=2){
      gameWin++
   winCount.innerText=gameWin

    villainDefeatCountTwo++
      villainDefeatTwo.innerText= villainDefeatCountTwo
      
    
    resultMsg.innerText=heroQuotess
    resultMsg.style.color="green"
    
    levelShow.innerText="3"
    heroBtn.style.pointerEvents="auto"


heroBtn.style.filter = "grayscale(0%)"
    
    villainTwo.style.pointerEvents="none"
villainTwo.style.filter="grayscale(100%)"
    villainTwoText.innerText="completed"
    
    allOptions.style.pointerEvents = "none";
allOptions.style.filter = "grayscale(100%)"
    
    
    setTimeout(()=>{
      
      heroSrc.src="ben-10-heros-collection/ben-pic-2.png"

heroWin=0;
    heroCount.innerText=heroWin
    villainWin=0;
    villainCount.innerText=villainWin

 villainThree.style.pointerEvents="auto"
villainThree.style.filter="grayscale(0%)"

    villainSrc.src="ben10-villain-collection/villain-3.png"
    
}, 3000)

  }else if(heroWin===2 && levelShow.innerText==="3"&& villainWin<=3){
    
      gameWin++
   winCount.innerText=gameWin

    villainDefeatCountThree++
      villainDefeatThree.innerText= villainDefeatCountThree
      

heroSrc.src="ben-10-heros-collection/ben-pic-2.png"
    
resultMsg.innerText="congratulation camp! you win the final battle, Click (Reset button) to start again"
resultMsg.style.color="green"

    
    heroWin=0;
    heroCount.innerText=heroWin
    villainWin=0;
    villainCount.innerText=villainWin

 villainThree.style.pointerEvents="none"
villainThree.style.filter="grayscale(100%)"

villainThreeText.innerText="completed"

allOptions.style.pointerEvents = "none";
allOptions.style.filter = "grayscale(100%)"
villainCard.style.pointerEvents="none"
villainCard.style.filter="grayscale(100%)"

resetBtn.style.pointerEvents="auto"
resetBtn.style.filter="grayscale(0%)"

headerLevel.innerText="CONGRATULATION!"
headerLevel.style.backgroundColor="black"
headerLevel.style.color="green"
headerLevel.style.border="3px solid green"
levelShow.innerText=""
  }
}

/** reset-button */

resetBtn.addEventListener("click",()=>{
location.reload()
heroSrc.src="ben-10-heros-collection/ben-pic.png"
 villainDefeatOne.innerText=villainDefeatCountOne
 villainDefeatTwo.innerText=villainDefeatCountTwo
 villainDefeatThree.innerText=villainDefeatCountThree
 
})


/** villain-quote-function */

function villainQuote(){
  let quoteRandom=Math.floor(Math.random()*9)
  
  let quoteGenerator= villainWinQuotes[quoteRandom]
  
  return quoteGenerator;
}

/** if villain-win**/

resultMsg.innerText=""
function ifVillainWin(){
  let randomQuote=villainQuote();
  
  
  if(villainWin===2&& levelShow.innerText==="1"&& heroWin<=1
  ){

    gameLose++
    lossesCount.innerText=gameLose

    resultMsg.innerText=randomQuote
    resultMsg.style.color="red"
    
    
    allOptions.style.pointerEvents="none";
      allOptions.style.filter="grayscale(100%)";
      
      heroWin=0;
    heroCount.innerText=heroWin
    villainWin=0;
    villainCount.innerText=villainWin
  
      
    
    setTimeout(()=>{
      
      heroBtn.style.pointerEvents="auto"
      heroBtn.style.filter="grayscale(0%)"
      
  
      heroSrc.src="ben-10-heros-collection/ben-pic.png";
    }, 3000);
  }else if(villainWin===3&& levelShow.innerText==="2"&& heroWin<=2){
     gameLose++
    lossesCount.innerText=gameLose

    resultMsg.innerText=randomQuote
    resultMsg.style.color="red"
    
    allOptions.style.pointerEvents="none";
      allOptions.style.filter="grayscale(100%)";
      
      heroWin=0;
    heroCount.innerText=heroWin
    villainWin=0;
    villainCount.innerText=villainWin
  
      
    
    setTimeout(()=>{
      
      heroBtn.style.pointerEvents="auto"
      heroBtn.style.filter="grayscale(0%)"
      
  
      heroSrc.src="ben-10-heros-collection/ben-pic.png";
    }, 3000);
  }else if(villainWin===4&& levelShow.innerText==="3"&& heroWin<=3){
     gameLose++
    lossesCount.innerText=gameLose

    resultMsg.innerText=randomQuote
    resultMsg.style.color="red"
    
    allOptions.style.pointerEvents="none";
      allOptions.style.filter="grayscale(100%)";
      
      heroWin=0;
    heroCount.innerText=heroWin
    villainWin=0;
    villainCount.innerText=villainWin
  
      
    
    setTimeout(()=>{
      
      heroBtn.style.pointerEvents="auto"
      heroBtn.style.filter="grayscale(0%)"
      
  
      heroSrc.src="ben-10-heros-collection/ben-pic.png";
    }, 3000);
  }
}


function totalGamePlayed(){
  if(levelShow.innerText==="1"){
    totalGameCount++
    totalGame.innerText=totalGameCount
  }else if(levelShow.innerText==="2"){
    totalGameCount++
    totalGame.innerText=totalGameCount
  }else if(levelShow.innerText==="3"){
    totalGameCount++
    totalGame.innerText=totalGameCount
  }
  
}
/** calc winning-rate */
function calcWinningRate(){
 if( gameWin>0 || gameLose>0){
   winningRateCount=(gameWin/(gameWin+gameLose))*100
    winningRate.innerText=winningRateCount
 }else {
   winningRate.innerText="0"
 }
}

