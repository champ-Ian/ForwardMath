function closeNav(){
    document.querySelector(".main-menu").style.display = "none";
}
function openNav(){
    document.querySelector(".main-menu").style.display = "block";
}

//format: "question" : ['option', 'option', 'option', 'option', number representing correct option]
let questions = {
    "30+17+4": ["51", "61", "50", "52", 1],
    "751-365": ["213", "386", "433", "232", 2],
    "What is the area of a sqaure with side length of, 11": ["120", "100", "144", "121", 4],
    "8*10": ["80", "18", "81", "810", 1],
    "There are 75 kids in a school. 4 buses that can hold 21 kids show up. How many seats will be left over?": ["5", "6", "7", "8", 2],
    "1/5 + 3/5": ["3/4", "5/6", "4/5", "2/3", 3],
    "52.38 + 29.21": ["82.48", "27.93", "98.34", "81.59", 4],
    "1/3 of a pie is left. Billy and Jean want to share the piece. How much of the pie will Billy get?": ["1/3", "1/2", "1/4", "1/6", 4],
    "(4 2/3) / 7": ["2/3", "1/2", "2/5", "1/3", 1],
    "Solve x in the ratio, 3:4 = 75:x": ["90", "100", "120", "75", 2],
    "What is the slope in the eqation, y = 3x + 7": ["3", "7", "1/3", "-3", 1],
    "What is the supplementary angele to and angle with, 45 degrees": ["35", "45", "135", "125", 3],
    "The mass of a ant is, 10^-4. There are 4*10^4 ants in a hive. What is total mass of the ants?": ["4", "40", "0.4", "0.04", 1],
    "The sum of 5 consecutive odd numbers is 145. What is the third number in the sequence?": ["28", "27", "23", "29", 4],
}

let questionAmount = Object.keys(questions).length;
let currentQuestion = 0;
let currentAnswer = null;
let score = 0

function questionAnswered(answerNum){
    currentQuestion+=1;
    if (answerNum == currentAnswer){
        score+=1;
    }
    if (currentQuestion==questionAmount){
        endQuiz()
        return
    }
    loadQuestion()
}
function loadQuestion(){
    questionText = Object.keys(questions)[currentQuestion]
    firstOption = Object.values(questions)[currentQuestion][0]
    secondOption = Object.values(questions)[currentQuestion][1]
    thirdOption = Object.values(questions)[currentQuestion][2]
    fourthOption = Object.values(questions)[currentQuestion][3]
    currentAnswer = Object.values(questions)[currentQuestion][4]

    questionTextElem = document.querySelector('.question')
    firstOptionElem = document.querySelector('.first-answer')
    secondOptionElem = document.querySelector('.second-answer')
    thirdOptionElem = document.querySelector('.third-answer')
    fourthOptionElem = document.querySelector('.fourth-answer')
    progressElem = document.querySelector('.progress')

    questionTextElem.innerHTML = questionText
    firstOptionElem.innerHTML = firstOption
    secondOptionElem.innerHTML = secondOption
    thirdOptionElem.innerHTML = thirdOption
    fourthOptionElem.innerHTML= fourthOption
    progressElem.innerHTML = 'Progress: ' + (currentQuestion+1) + '/' + questionAmount

}
function endQuiz(){
    let percent =  Math.round((score*100)/questionAmount)
    let message = null
    if (score>13){
        message='Wow your grade level is high school or above!'
    } else if (score > 11){
        message='You are a seventh grade level!'
    } else if (score > 9){
        message='You are a sixth grade level!'
    } else if (score > 7){
        message='You are a fifth grade level!'
    } else if (score > 5){
        message='You are a fourth grade level.'
    } else if (score > 3){
        message='You are a third grade level.'
    } else {
        message='You are below a second grade level, try again next time.'
    }


    document.querySelector('.percentage').innerHTML = 'Percent: ' + percent + '%'
    document.querySelector('.score').innerHTML = 'Score: ' + score
    document.querySelector('.end-screen').style.display = 'flex'
    document.querySelector('.message').innerHTML = message
}