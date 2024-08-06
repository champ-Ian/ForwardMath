function closeNav(){
    document.querySelector(".main-menu").style.display = "none";
}
function openNav(){
    document.querySelector(".main-menu").style.display = "block";
}

let score = 0;
let speed = 0;
let sessionStart = false;
let questionAnswer = null;
let startTime = null
let gamePaused = false;

const questions = {
    "0" : ["1", "-", "1"],
    "1" : ["2", "-", "1"],
    "2" : ["3", "-", "1"],
    "3" : ["4", "-", "1"],
    "4" : ["5", "-", "1"],
    "5" : ["6", "-", "1"],
    "6" : ["7", "-", "1"],
    "7" : ["8", "-", "1"],
    "8" : ["9", "-", "1"],
    "9" : ["10", "-", "1"],
    "10" : ["11", "-", "1"],
    "11" : ["12", "-", "1"],
    "0" : ["2", "-", "2"],
    "1" : ["3", "-", "2"],
    "2" : ["4", "-", "2"],
    "3" : ["5", "-", "2"],
    "4" : ["6", "-", "2"],
    "5" : ["7", "-", "2"],
    "6" : ["8", "-", "2"],
    "7" : ["9", "-", "2"],
    "8" : ["10", "-", "2"],
    "9" : ["11", "-", "2"],
    "10" : ["12", "-", "2"],
    "0" : ["3", "-", "3"],
    "1" : ["4", "-", "3"],
    "2" : ["5", "-", "3"],
    "3" : ["6", "-", "3"],
    "4" : ["7", "-", "3"],
    "5" : ["8", "-", "3"],
    "6" : ["9", "-", "3"],
    "7" : ["10", "-", "3"],
    "8" : ["11", "-", "3"],
    "9" : ["12", "-", "3"],
    "0" : ["4", "-", "4"],
    "1" : ["5", "-", "4"],
    "2" : ["6", "-", "4"],
    "3" : ["7", "-", "4"],
    "4" : ["8", "-", "4"],
    "5" : ["9", "-", "4"],
    "6" : ["10", "-", "4"],
    "7" : ["11", "-", "4"],
    "8" : ["12", "-", "4"],
    "0" : ["5", "-", "5"],
    "1" : ["6", "-", "5"],
    "2" : ["7", "-", "5"],
    "3" : ["8", "-", "5"],
    "4" : ["9", "-", "5"],
    "5" : ["10", "-", "5"],
    "6" : ["11", "-", "5"],
    "7" : ["12", "-", "5"],
    "0" : ["6", "-", "6"],
    "1" : ["7", "-", "6"],
    "2" : ["8", "-", "6"],
    "3" : ["9", "-", "6"],
    "4" : ["10", "-", "6"],
    "5" : ["11", "-", "6"],
    "6" : ["12", "-", "6"],
    "0" : ["7", "-", "7"],
    "1" : ["8", "-", "7"],
    "2" : ["9", "-", "7"],
    "3" : ["10", "-", "7"],
    "4" : ["11", "-", "7"],
    "5" : ["12", "-", "7"],
    "0" : ["8", "-", "8"],
    "1" : ["9", "-", "8"],
    "2" : ["10", "-", "8"],
    "3" : ["11", "-", "8"],
    "4" : ["12", "-", "8"],
    "0" : ["9", "-", "9"],
    "1" : ["10", "-", "9"],
    "2" : ["11", "-", "9"],
    "3" : ["12", "-", "9"],
    "0" : ["10", "-", "10"],
    "1" : ["11", "-", "10"],
    "2" : ["12", "-", "10"],
    "0" : ["11", "-", "11"],
    "1" : ["12", "-", "11"],
    "0" : ["12", "-", "12"]
};

function typing(){
    if (document.querySelector(".input-form").value == questionAnswer){
        setup()
        document.querySelector(".input-form").value = "";

        score+=1;
        document.querySelector(".curScore").innerHTML = "Score: " + score;
    }
};

function clear(){
    scoreElem = document.querySelector(".curScore");

    endQuiz()
    sessionStart = false;
    questionAnswer= null;
    document.querySelector(".start").innerHTML = "Start";
    const operationLine = document.querySelector('.operation-line');
    const inputForm = document.querySelector('.input-form');
    operationLine.style.display = "none";
    inputForm.style.display = "none";
    const firstValue = document.querySelector(".first-value");
    const secondValue = document.querySelector(".second-value");
    const operation = document.querySelector(".operation");
    firstValue.innerHTML = "";
    operation.innerHTML = "";
    secondValue.innerHTML = "";
    scoreElem.innerHTML = "Score: 0";
    score=0;
    document.querySelector(".clock").innerHTML = "Time: 00:30"
    document.querySelector(".speed").innerHTML = "Speed: N/A"
}

function start(){
    if (sessionStart == true){
        return
    }

    setup()
    sessionStart = true;
    startTimer()
}

function setup(){
    const operationLine = document.querySelector('.operation-line');
    const inputForm = document.querySelector('.input-form');
    operationLine.style.display = "block";
    inputForm.style.display = "block";
    let randomQuestion = Math.floor(Math.random() * Object.keys(questions).length);
    const firstValue = document.querySelector(".first-value");
    const secondValue = document.querySelector(".second-value");
    const operation = document.querySelector(".operation");
    questionAnswer = Object.keys(questions)[randomQuestion];
    firstValue.innerHTML = Object.values(questions)[randomQuestion][0];
    operation.innerHTML = Object.values(questions)[randomQuestion][1];
    secondValue.innerHTML = Object.values(questions)[randomQuestion][2];
}

function startTimer(){
    var sec = 30;
    timer = setInterval(()=>{
        speedElem = document.querySelector('.speed');
        speedRate = Math.round(score*(60/(90-sec)));
        speedElem.innerHTML = "Speed: " + speedRate;

        if (sec >= 70){
            document.querySelector('.clock').innerHTML = 'Time: 01:' + (sec-60);
        } else if (sec >= 60){
            document.querySelector('.clock').innerHTML = 'Time: 01:0' + (sec-60);
        } else if (sec >= 10){
            document.querySelector('.clock').innerHTML = 'Time: 00:' + (sec);
        } else{
            document.querySelector('.clock').innerHTML = 'Time: 00:0' + (sec);
        }
        sec --;
        if (sec < 0){
            clearInterval(timer);
            clear();
        }
    }, 1000)
}

function endQuiz() {
    let message = null
    if (score>40){
        message='Unbelievable! Are you even human?'
    } else if (score > 35){
        message='Amazing, your subtractions are quick and snappy!'
    } else if (score > 30){
        message='Great job, you are pretty fast.'
    } else if (score > 25){
        message='Pretty good, almost to the next level!'
    } else if (score > 20){
        message='Not bad, you can do better though.'
    } else if (score > 15){
        message='Keep working it, your subtractions need to get better.'
    } else {
        message='Umm, your subtracting is pretty bad.'
    }

    document.querySelector('.score').innerHTML = 'Score: ' + score
    document.querySelector('.end-screen').style.display = 'flex'
    document.querySelector('.message').innerHTML = message
}