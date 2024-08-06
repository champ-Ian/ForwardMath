function closeNav(){
    document.querySelector(".main-menu").style.display = "none";
}
function openNav(){
    document.querySelector(".main-menu").style.display = "block";
}

//format: "question" : ['option', 'option', 'option', 'option', number representing correct option]
let questions = {
    "Known as the Human Computer, had amazing mental math abilities, and set a guiness world record." : ['OPTION 1', "Shakuntala Devi", "OPTION 3", "OPTION 4", 2],
    "Made the Pythagorean Theorem, helped with understanding of triangular relationships, and founded a school in Croton." : ["", "", "", "Pythagoras", 4],
    "Known as the Father of Modern Computing, made the turing machine, and helped the allies win world war 2." : ["", "", "Alan Turing", "", 3],
    "Was in ancient Alexandria, made textbook, 'Elements', and helped unify and expand theories of geometry." : ["", "", "Euclid", "", 3],
    "Persian scholar, worked in feild of algebra, and influnced many modern day algebra." : ["Al-Khwarizmi", "", "", "", 1],
    "Developed laws of gravity and motion, studied alchemy, and made contributions to calculus and astronomy." : ["", "Isaac Newton", "", "", 2],
    "Only woman to win a Fields Medal, worked in Riemann surfaces, and contributed to hyperbolic geometry." : ["", "", "", "Maryan Mirzkhani", 4],
    "Faced adversity for being female, contributed in number theory and elasticity theory, and taught herself with her father's textbooks." : ["", "", "Sophie Germain", "", 3],
    "Is a russion mathematician, solved the Poincare conjecture, and after solving the conjecture he declined to take the prize money." : ["", "Grigori Perelman", "", "", 2],
    "Known as the Prince of Mathematicians, made contributions to statistics, differential equations, and number thoery, and very gifted from young age." : ["Carl Friedrich Gauss", "", "", "", 1],
    "No formal education, contributed to number theory, analysis, and continued fractions, and is an indian mathematician." : ["", "", "", "Srinivassa Ramanujan", 4],
    "Contributed in theoretical physics and abstract algebra, is a german mathematician, and made Noether's theroem." : ["", "", "Emmy Noether", "", 3],
    "Contributed to theoretical physics  but also mathematical physics, discovered the theory of relativity, and didn't learn to speak until he was three." : ["", "", "Albert Einstein", "", 3],
    "Pushed passed adversity from her black color, worked at NASA and helped for the success of many missions, and movie, 'Hidden Figures' made after her." : ["", "Katherine Johnson", "", "", 2],
    "Won a gold medal in the International Math Olympiad, awarded the Fields Medal, and made breakthroughs in representation theory, harmonic analysis, and more." : ["Terence Tao", "", "", "", 1],
    "Lived in Alexandria, first female mathematician to be recorded well, and helped with math, astronomy, and philosophy." : ["", "Hypatia", "", "", 2],
    "Made the fibonacci sequence, introduced the Hindu-Arabic numeral system to Europe, and also known as Leonardo of Pisa." : ["", "", "", "Fibonacci", 4],
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
    if (percent>90){
        message='Wow, you really know your mathmatecians!'
    } else if (percent > 75){
        message='Not bad! Almost but not quite, try again to get the best score.'
    } else if (percent > 55){
        message='Hmmm, try again a couple times to increase your score.'
    } else {
        message='Oof, work on your mathmatecians, you can do better!'
    }


    document.querySelector('.percentage').innerHTML = 'Percent: ' + percent + '%'
    document.querySelector('.score').innerHTML = 'Score: ' + score
    document.querySelector('.end-screen').style.display = 'flex'
    document.querySelector('.message').innerHTML = message
}