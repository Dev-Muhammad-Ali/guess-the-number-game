function getRandomInt(min , max){
        return Math.floor(Math.random() * (max - min +1)) + min;
}
var i = 0;
function counter(){
    i++;
}
let NUMBER = getRandomInt(1 , 100);
function checkNumber(){
    let x = document.querySelector('#num');
    let userNum = document.querySelector('#num').value;
    userNum = parseInt(userNum);
    console.log(typeof userNum);
    if(userNum < NUMBER){
        let listItemS = document.createElement("li");
        listItemS.innerHTML = userNum + " is smaller than actual number." ;
        let parentS = document.querySelector("ul");
        parentS.appendChild(listItemS);
        parentS.scrollTo(100,1000);
    }
    else if(userNum > NUMBER){
        let listItemL = document.createElement("li")
        listItemL.innerHTML = userNum + " is greater than actual number."
        let parentL = document.querySelector("ul");
        parentL.appendChild(listItemL);
        parentL.scrollTo(100,1000);
    }
    else{
       if(userNum == NUMBER){
            let resultContainer = document.querySelector('.result-container');
            resultContainer.style.display = 'flex';
            let LISt = document.querySelector('#result');
            LISt.style.display = 'block';
            let TEXT = document.createElement("p")
            TEXT.innerHTML = "Congrats! You guessed the correct number in " + (i +1) + " attempts and your score is " + (100 - i);
            LISt.appendChild(TEXT);
            parentE.scrollTo(100,1000);
            userNum.value = "";
       }
    }
    
    counter();
    x.value= "";
}

document.addEventListener('keydown',event =>{
    if(event.keyCode ===13){
        checkNumber();
    }
})

function clearResult(){
    let resultContaineR = document.querySelector('.result-container');
    window.location.reload();
}
