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
    "1" : ["1", "÷", "1"],
    "2" : ["2", "÷", "1"],
    "3" : ["3", "÷", "1"],
    "4" : ["4", "÷", "1"],
    "5" : ["5", "÷", "1"],
    "6" : ["6", "÷", "1"],
    "7" : ["7", "÷", "1"],
    "8" : ["8", "÷", "1"],
    "9" : ["9", "÷", "1"],
    "10" : ["10", "÷", "1"],
    "11" : ["11", "÷", "1"],
    "12" : ["12", "÷", "1"],
    "2" : ["4", "÷", "2"],
    "3" : ["6", "÷", "2"],
    "4" : ["8", "÷", "2"],
    "5" : ["10", "÷", "2"],
    "6" : ["12", "÷", "2"],
    "7" : ["14", "÷", "2"],
    "8" : ["16", "÷", "2"],
    "9" : ["18", "÷", "2"],
    "10" : ["20", "÷", "2"],
    "11" : ["22", "÷", "2"],
    "12" : ["24", "÷", "2"],
    "3" : ["9", "÷", "3"],
    "4" : ["12", "÷", "3"],
    "5" : ["15", "÷", "3"],
    "6" : ["18", "÷", "3"],
    "7" : ["21", "÷", "3"],
    "8" : ["24", "÷", "3"],
    "9" : ["27", "÷", "3"],
    "10" : ["30", "÷", "3"],
    "11" : ["33", "÷", "3"],
    "12" : ["36", "÷", "3"],
    "4" : ["16", "÷", "4"],
    "5" : ["20", "÷", "4"],
    "6" : ["24", "÷", "4"],
    "7" : ["28", "÷", "4"],
    "8" : ["32", "÷", "4"],
    "9" : ["36", "÷", "4"],
    "10" : ["40", "÷", "4"],
    "11" : ["44", "÷", "4"],
    "12" : ["48", "÷", "4"],
    "5" : ["25", "÷", "5"],
    "6" : ["30", "÷", "5"],
    "7" : ["35", "÷", "5"],
    "8" : ["40", "÷", "5"],
    "9" : ["45", "÷", "5"],
    "10" : ["50", "÷", "5"],
    "11" : ["55", "÷", "5"],
    "12" : ["60", "÷", "5"],
    "6" : ["36", "÷", "6"],
    "7" : ["42", "÷", "6"],
    "8" : ["48", "÷", "6"],
    "9" : ["54", "÷", "6"],
    "10" : ["60", "÷", "6"],
    "11" : ["66", "÷", "6"],
    "12" : ["72", "÷", "6"],
    "7" : ["49", "÷", "7"],
    "8" : ["56", "÷", "7"],
    "9" : ["63", "÷", "7"],
    "10" : ["70", "÷", "7"],
    "11" : ["77", "÷", "7"],
    "12" : ["84", "÷", "7"],
    "8" : ["64", "÷", "8"],
    "9" : ["72", "÷", "8"],
    "10" : ["80", "÷", "8"],
    "11" : ["88", "÷", "8"],
    "12" : ["96", "÷", "8"],
    "9" : ["81", "÷", "9"],
    "10" : ["90", "÷", "9"],
    "11" : ["99", "÷", "9"],
    "12" : ["108", "÷", "9"],
    "10" : ["100", "÷", "10"],
    "11" : ["110", "÷", "10"],
    "12" : ["120", "÷", "10"],
    "11" : ["121", "÷", "11"],
    "12" : ["132", "÷", "11"],
    "12" : ["144", "÷", "12"],
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
        message='Amazing, your divisions are quick and snappy!'
    } else if (score > 30){
        message='Great job, you are pretty fast.'
    } else if (score > 25){
        message='Pretty good, almost to the next level!'
    } else if (score > 20){
        message='Not bad, you can do better though.'
    } else if (score > 15){
        message='Keep working it, your divisions need to get better.'
    } else {
        message='Umm, your dividing is pretty bad.'
    }

    document.querySelector('.score').innerHTML = 'Score: ' + score
    document.querySelector('.end-screen').style.display = 'flex'
    document.querySelector('.message').innerHTML = message
}