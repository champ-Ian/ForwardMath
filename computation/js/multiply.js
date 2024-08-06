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
    "1" : ["1", "x", "1"],
    "2" : ["2", "x", "1"],
    "3" : ["3", "x", "1"],
    "4" : ["4", "x", "1"],
    "5" : ["5", "x", "1"],
    "6" : ["6", "x", "1"],
    "7" : ["7", "x", "1"],
    "8" : ["8", "x", "1"],
    "9" : ["9", "x", "1"],
    "10" : ["10", "x", "1"],
    "11" : ["11", "x", "1"],
    "12" : ["12", "x", "1"],
    "4" : ["2", "x", "2"],
    "6" : ["3", "x", "2"],
    "8" : ["4", "x", "2"],
    "10" : ["5", "x", "2"],
    "12" : ["6", "x", "2"],
    "14" : ["7", "x", "2"],
    "16" : ["8", "x", "2"],
    "18" : ["9", "x", "2"],
    "20" : ["10", "x", "2"],
    "22" : ["11", "x", "2"],
    "24" : ["12", "x", "2"],
    "9" : ["3", "x", "3"],
    "12" : ["4", "x", "3"],
    "15" : ["5", "x", "3"],
    "18" : ["6", "x", "3"],
    "21" : ["7", "x", "3"],
    "24" : ["8", "x", "3"],
    "27" : ["9", "x", "3"],
    "30" : ["10", "x", "3"],
    "33" : ["11", "x", "3"],
    "36" : ["12", "x", "3"],
    "16" : ["4", "x", "4"],
    "20" : ["5", "x", "4"],
    "24" : ["6", "x", "4"],
    "28" : ["7", "x", "4"],
    "32" : ["8", "x", "4"],
    "36" : ["9", "x", "4"],
    "40" : ["10", "x", "4"],
    "44" : ["11", "x", "4"],
    "48" : ["12", "x", "4"],
    "25" : ["5", "x", "5"],
    "30" : ["6", "x", "5"],
    "35" : ["7", "x", "5"],
    "40" : ["8", "x", "5"],
    "45" : ["9", "x", "5"],
    "50" : ["10", "x", "5"],
    "55" : ["11", "x", "5"],
    "60" : ["12", "x", "5"],
    "36" : ["6", "x", "6"],
    "42" : ["7", "x", "6"],
    "48" : ["8", "x", "6"],
    "54" : ["9", "x", "6"],
    "60" : ["10", "x", "6"],
    "66" : ["11", "x", "6"],
    "72" : ["12", "x", "6"],
    "49" : ["7", "x", "7"],
    "56" : ["8", "x", "7"],
    "63" : ["9", "x", "7"],
    "70" : ["10", "x", "7"],
    "77" : ["11", "x", "7"],
    "84" : ["12", "x", "7"],
    "64" : ["8", "x", "8"],
    "72" : ["9", "x", "8"],
    "80" : ["10", "x", "8"],
    "88" : ["11", "x", "8"],
    "96" : ["12", "x", "8"],
    "81" : ["9", "x", "9"],
    "90" : ["10", "x", "9"],
    "99" : ["11", "x", "9"],
    "108" : ["12", "x", "9"],
    "100" : ["10", "x", "10"],
    "110" : ["11", "x", "10"],
    "120" : ["12", "x", "10"],
    "121" : ["11", "x", "11"],
    "132" : ["12", "x", "11"],
    "144" : ["12", "x", "12"],
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
        message='Amazing, your multiplications are quick and snappy!'
    } else if (score > 30){
        message='Great job, you are pretty fast.'
    } else if (score > 25){
        message='Pretty good, almost to the next level!'
    } else if (score > 20){
        message='Not bad, you can do better though.'
    } else if (score > 15){
        message='Keep working it, your multiplications need to get better.'
    } else {
        message='Umm, your multiplying is not pretty bad.'
    }

    document.querySelector('.score').innerHTML = 'Score: ' + score
    document.querySelector('.end-screen').style.display = 'flex'
    document.querySelector('.message').innerHTML = message
}