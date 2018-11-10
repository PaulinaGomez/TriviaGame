$(document).ready(function () {
   
    var triviaQuestions = [{Question:"¿In Aladdin, what is the name of Jasmine’s pet tiger?", Answer: "Bongo", Answer:"Lady", Answer:"Rajah", Answer: "Pooh", Correct: 3 },
    {Question:"When does Mary Poppins say she will leave the Banks’ house?", Answer:"By train", Answer:"When the Wind Changes", Answer:"Tomorrow", Answer:"Next Month", Correct: 2 },
    {Question:"In the Lion King, where does Mufasa and his family live?", Answer:"Africa", Answer:"The Savannah", Answer:"Rock Kingdom", Answer:"Pride Rock",Correct: 4 },
    {Question:"In Dumbo, where is Mrs. Jumbo when the stork delivers her baby?", Answer:"Circus Ring", Answer:"In a Cage", Answer:"Circus Train", Answer:"In a Circus Show", Correct: 3 },
    {Question:"In Beauty and the Beast, how many eggs does Gaston eat for breakfast?", Answer:"1 Dozen", Answer:" 5 Dozen", Answer:"12 eggs", Answer:"6 Dozen", Correct: 2 },
    {Question:"In Toy Story, what game does the slinky play?", Answer:"Poker", Answer:"Domino", Answer:"Puzzle", Answer:"Checkers", Correct: 4 },
    {Question:"In Lady & the Tramp, by what name did Tony call Tramp?", Answer:"Butch", Answer:"Lucky", Answer:"Tramp", Answer:"Chuck", Correct: 1 },
    {Question:"Which Disney movie was the first to be nominated for an Oscar? ", Answer:"The Little Mermaid", Answer:"Alice in Wonderland", Answer:"Beauty and the Beast", Answer:"The Jungle Book", Correct: 3  }];


    var userScore = 0;
    var userLooses = 0;
    var userNoAnswer = 0;
    var currentQuestion = 1;
    var triviaQuestionsText = document.getElementsByClassName("quest")[0];
    var triviaAnswerText = document.getElementsByClassName("answer")[0];
    

/*
    var userHasPickedCharacter = false; //<----- numero de clicks movimiento de imagenes
    var user = $("<div id=userName></div>"); //<------- div for Text User when player is choosed
    var oponent = $("<div id=opponentName></div>");//<------- div for Text Oponent when player is choosed
    var dataHpUser = 0;
    var dataHpOponent = 0;
    var dataUserAttackCounter = 1;
    var dataAttackOponent = 0;

    var btnattack;
    var btnreset;
*/

    //createbtnattack();
    //createbtnreset();
    
    
    getReady();
    

    function getReady () {
    var startBtn = $("<button type='button'>");
    startBtn.addClass("btn btn-primary btn-lg btn-block");
    startBtn.text("Start Game!>>");
    $(".jumbotron").append(startBtn);
    
    $(".display").text("Disney Trivia Game!");
    }

    

    
    $(".btn.btn-primary.btn-lg.btn-block").on("click",function() {
    debugger;
    for (var i = 0; i < triviaQuestions.length; i++) {
        triviaQuestionsText.innerText = triviaQuestions[i].Question;
        console.log (triviaQuestionsText);

        var correctAnswer = triviaQuestions[i].Correct;
        console.log (triviaQuestions[i].Correct);

        textAnswer (correctAnswer);
        // (triviaQuestions[0].AnswerW).append(triviaAnswerText);
        // (triviaQuestions[0].AnswerC).append(triviaAnswerText);

        //triviaAnswerText.innerText = triviaQuestions[0].AnswerW;
        // triviaAnswerText.innerText = triviaQuestions[0].AnswerC;
        //console.log (triviaAnswerText);       
        }

        checkAnswer(correctAnswer);
           
    });

function textAnswer (correctAnswer) {
    debugger;
    var btnAnswer = $("<button>");
    btnAnswer.attr("id", correctAnswer);
    btnAnswer.text(triviaQuestions[i].Answer);
    $(".answer").append(btnAnswer);

   /* triviaAnswerText.innerText = triviaQuestions[0].AnswerW;
    (triviaAnswerText).append($(".answer"));
    triviaAnswerText.innerText = triviaQuestions[0].AnswerC;
    (triviaAnswerText).append($(".answer"));*/
}

function checkAnswer () {
var userChoice = event.onclick
if (userChoice === correctAnswer) {
    alert("That's right you got it!");
    userScore++;
    }

else {
    alert("That's not it, the right answer was");
    userLooses++;
    }

question.innerText = questions[currentQuestion].Question;
currentQuestion++;

if (currentQuestion === triviaQuestions.length) {
    alert(userScore)
    }

}
  


/*    $(".btn.btn-primary.btn-lg").on("click", function () {
        if (contador == 0) {
            comInstructions.innerHTML = "<h3>Choose your Character</h3>";
            contador++;
        }

        else if (contador == 1) {
            comInstructions.innerHTML = "<h3>Battle to Death, choose an enemy!</h3>";
        }
    }); */
/*
    $(".card.character").on("click", function () { //<---- click on character img
        if (!userHasPickedCharacter) { //<---- first click 
            pickUserCharacter(this);
        }
        else {
            pickEnemyCharacter(this);
        }
    });

    function pickUserCharacter(characterImagePicked) {
        //Modify the HTML of the character we picked
        player = $(characterImagePicked).addClass("user"); //<---- add attribute data-user to card character clicked 
        user.text("User Character");    //<---- add text "User Caracter" to user variable "new div"   
        $(characterImagePicked).prepend(user); //<---- append div user with new text to ".col-md-3 first"
        $(".col-md-3.first").append($(characterImagePicked)); //<---- click on ".card character" to ".col-md-3 first"
        $(".row:last").append($(".card.character:not(.user)"));

        //Grab the stats of the character we picked
        dataHpUser = parseInt($(".user").attr("data.hp"));
        dataAttackUser = parseInt($(".user").attr("data.attack"));

        userHasPickedCharacter = true;
    }

    function pickEnemyCharacter(characterImagePicked) {
        var isUserCharacter = $(characterImagePicked).hasClass("user");
        if ($(".enemy").length === 0 && !isUserCharacter) {
            //Modify the HTML of the enemy we picked
            comEnemy = $(characterImagePicked).addClass("enemy");
            oponent.text("Oponent");  //<---- add text "Oponent" to oponent variable "new div" 
            $(characterImagePicked).prepend(oponent);
            $(".col-md-3.fourth").append($(characterImagePicked));

            //Grab the stats of the enemy we picked
            dataHpOponent = parseInt($(".enemy").attr("data.hp"));
            dataAttackOponent = parseInt($(".enemy").attr("data.attack"));

            //Display the button for attacking, as we now have a target
            btnattack.show();
        }
    }

    function createbtnattack() { //<---- btn attack function
        btnattack = $("<button>");
        btnattack.addClass("btn-attack");
        btnattack.text("Attack");
        $(".col-md-3.second").append(btnattack);
        btnattack.hide();
        $(btnattack).on("click", fight);
    }

    function createbtnreset() { //<---- btn reset function
        btnreset = $("<button>");
        btnreset.addClass("btn-reset");
        btnreset.text("Reset");
        $(".col-md-3.third").append(btnreset);
        btnreset.hide();
        $(btnreset).on("click", function () {
            window.location.reload();
        });
    }

    function fight() { //<---- hp / attack level
        dataHpUser -= dataAttackOponent;
        dataHpOponent -= dataAttackUser * dataUserAttackCounter;
        dataUserAttackCounter++;

        $(".user #hp").text(dataHpUser);
        $(".enemy #hp").text(dataHpOponent);

        if (dataHpUser <= 0) {
            alert("You loose. . .but try again");
            btnattack.hide();
            btnreset.show();
        }
        else if (dataHpOponent <= 0) {
            alert("You win. . . pick another oponnent");
            btnattack.hide();
            $(".enemy").remove();
        }
    }
}); */

/* Pseudo code
1. click start -----> start game function
    1.1 timer starts to count down from 30 seg for each question 
    1.2 question and 4 possible answers are displayed
        1.1.1 on click on any posible answer states correct or incorrect answer and shows image related for 4 sec
        1.1.2 else counter = 0 shows correct answer 4sec and goes to next question 
    1.3 after las question stats are displayed:
        correct/incorrect/unanswered question
        try again button ----> resets game
        */ 
       
});
