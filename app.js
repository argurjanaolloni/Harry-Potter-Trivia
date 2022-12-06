const scoreDisplay = document.getElementById('ourScoreDisplay')
const totalQDisplay = document.getElementById('totalQuestionsDisplay')
const questionDisplay = document.getElementById('showQuestions')

//the user must go through each question

const ourCategories = [
        {
            question: "What food was served at Sir Nicks death day party in Harry Potter and the Sorcers Stone?",
            multipleChoices: ["Rotten food","Shepherd's pie","Butterbeer","Chocolate frog"],
            answer: "Rotten food",
        },
        {
            question: "What house does the sorting hat want to place Harry in?",
            multipleChoices: ["Gryffindor","Ravenclaw","Slytherin", "Hufflepuff"] ,
            answer: "Slytherin",
        },
        {
            question: "What does Hermione use to take extra classes in Harry Potter and the Prizoner of Azkaban?",
            multipleChoices: ["Deluminator","Howler", "Time turner", "Watcher"] ,
            answer: "Time turner",
        },
        {
            question: "What position does Harry play?",
            multipleChoices: ["Seeker","Keeper","Beater","Chaser"] ,
            answer: "Seeker",
        },
        {
            question: "What kind of pet does Harry have?",
            multipleChoices: ["Owl named Hedwig","Cat named Crookshanks","Owl named Luna", "Rat named Scabbers"] ,
            answer: "Owl named Hedwig",
        },
        {
            question: "What is the password to get to Hogsmeade? ",
            multipleChoices: ["Wingardium Levios", "Dissendium", "Lumos","Obliviate"],
            answer: "Dissendium",
        },
        {
            question: "Who is the first to comfort Harry after Sirius Black dies?",
            multipleChoices: ["Ron", "Neville", "Ginny", "Lupin"],
            answer: "Lupin",
        },
        {
            question: "How does Ron open the chamber of secrets during the final battle at Hogwarts?",
            multipleChoices: ["He learned by hearing Harry speak parsletounge in his sleep","He and Hermione found another way in", "Harry opens it for them", "Harry taught him how to say a phrase"],
            answer: "He learned by hearing Harry speak parsletounge in his sleep",
        },
        {
            question: "Who is Prongs?",
            multipleChoices: ["Mad Eye Moody", "Dumbledore", "James Potter", "Harry Potter"],
            answer: "James Potter",
        }
    ];

let totalQ = 0;
let ourScore = 0;
totalQDisplay.textContent = totalQ;
scoreDisplay.textContent = ourScore;
    
function createBoard () {
    // this first loop will create a div for each question in my object ourCategories
    for (let i = 0; i < ourCategories.length; i++) {
        const questionBox = document.createElement('div')
        questionBox.classList.add('questionBox')
            
        // this will create a p element that contains the question
        const ourQ = document.createElement('p')
        ourQ.textContent = (ourCategories[i].question);
        questionBox.append(ourQ);
            
            
        //this will create a new div to carry all of our buttons
        const questionButtons = document.createElement('div');
        questionButtons.classList.add('buttons');
        questionBox.append(questionButtons);

        //for loop to go through each index in ourCategories[i].multipleChoice it creates a button for each of my multiple choice options
        for (let j = 0; j < ourCategories[i].multipleChoices.length; j++) {
            const qButton = document.createElement('button');
            qButton.classList.add('questionButton');
            qButton.textContent = (ourCategories[i].multipleChoices[j]);
            qButton.dataset.group = i
            //my event listener    
            qButton.addEventListener('click', () => 
                checkAnswer(qButton, i))
                questionButtons.append(qButton)
            }
            
        //creates new div to display answer with classlist showAnswer
        const answerDisplay = document.createElement('div')
        answerDisplay.classList.add('showAnswer');

        //append everything
        questionBox.append(answerDisplay)
        questionDisplay.append(questionBox);
    }
}

//call on function to createBoard
createBoard();

// this is my checkAnswer function
function checkAnswer(qButton, index) {
    let theAnswer;
    if (index < ourCategories.length) {
        theAnswer = ourCategories[index].answer;
        if (theAnswer === qButton.innerHTML) {
                totalQ ++;
                ourScore ++;
                totalQDisplay.innerHTML = totalQ;
                scoreDisplay.innerHTML = ourScore;
                qButton.style.background = "green";
                } 
            else {
                totalQ ++;
                totalQDisplay.innerHTML = totalQ;
                scoreDisplay.innerHTML = ourScore;
                qButton.style.background = "red";
                }
            }

        document.querySelectorAll(`[data-group="${index}"]`).forEach(btn => {
            btn.disabled = true;
        })
            
    }