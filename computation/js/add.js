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
    "2" : ["1", "+", "1"],
    "3" : ["2", "+", "1"],
    "4" : ["3", "+", "1"],
    "5" : ["4", "+", "1"],
    "6" : ["5", "+", "1"],
    "7" : ["6", "+", "1"],
    "8" : ["7", "+", "1"],
    "9" : ["8", "+", "1"],
    "10" : ["9", "+", "1"],
    "11" : ["10", "+", "1"],
    "12" : ["11", "+", "1"],
    "13" : ["12", "+", "1"],
    "4" : ["2", "+", "2"],
    "5" : ["3", "+", "2"],
    "6" : ["4", "+", "2"],
    "7" : ["5", "+", "2"],
    "8" : ["6", "+", "2"],
    "9" : ["7", "+", "2"],
    "10" : ["8", "+", "2"],
    "11" : ["9", "+", "2"],
    "12" : ["10", "+", "2"],
    "13" : ["11", "+", "2"],
    "14" : ["12", "+", "2"],
    "6" : ["3", "+", "3"],
    "7" : ["4", "+", "3"],
    "8" : ["5", "+", "3"],
    "9" : ["6", "+", "3"],
    "10" : ["7", "+", "3"],
    "11" : ["8", "+", "3"],
    "12" : ["9", "+", "3"],
    "13" : ["10", "+", "3"],
    "14" : ["11", "+", "3"],
    "15" : ["12", "+", "3"],
    "8" : ["4", "+", "4"],
    "9" : ["5", "+", "4"],
    "10" : ["6", "+", "4"],
    "11" : ["7", "+", "4"],
    "12" : ["8", "+", "4"],
    "13" : ["9", "+", "4"],
    "14" : ["10", "+", "4"],
    "15" : ["11", "+", "4"],
    "16" : ["12", "+", "4"],
    "10" : ["5", "+", "5"],
    "11" : ["6", "+", "5"],
    "12" : ["7", "+", "5"],
    "13" : ["8", "+", "5"],
    "14" : ["9", "+", "5"],
    "15" : ["10", "+", "5"],
    "16" : ["11", "+", "5"],
    "17" : ["12", "+", "5"],
    "12" : ["6", "+", "6"],
    "13" : ["7", "+", "6"],
    "14" : ["8", "+", "6"],
    "15" : ["9", "+", "6"],
    "16" : ["10", "+", "6"],
    "17" : ["11", "+", "6"],
    "18" : ["12", "+", "6"],
    "14" : ["7", "+", "7"],
    "15" : ["8", "+", "7"],
    "16" : ["9", "+", "7"],
    "17" : ["10", "+", "7"],
    "18" : ["11", "+", "7"],
    "19" : ["12", "+", "7"],
    "16" : ["8", "+", "8"],
    "17" : ["9", "+", "8"],
    "18" : ["10", "+", "8"],
    "19" : ["11", "+", "8"],
    "20" : ["12", "+", "8"],
    "18" : ["9", "+", "9"],
    "19" : ["10", "+", "9"],
    "20" : ["11", "+", "9"],
    "21" : ["12", "+", "9"],
    "20" : ["10", "+", "10"],
    "21" : ["11", "+", "10"],
    "22" : ["12", "+", "10"],
    "22" : ["11", "+", "11"],
    "23" : ["12", "+", "11"],
    "24" : ["12", "+", "12"],
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
        message='Amazing, your additions are quick and snappy!'
    } else if (score > 30){
        message='Great job, you are pretty fast.'
    } else if (score > 25){
        message='Pretty good, almost to the next level!'
    } else if (score > 20){
        message='Not bad, you can do better though.'
    } else if (score > 15){
        message='Keep working it, your additions need to get better.'
    } else {
        message='Umm, your adding is pretty bad.'
    }

    document.querySelector('.score').innerHTML = 'Score: ' + score
    document.querySelector('.end-screen').style.display = 'flex'
    document.querySelector('.message').innerHTML = message
}