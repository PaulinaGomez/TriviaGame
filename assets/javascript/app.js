$(document).ready(function () {
    var triviaQuestions = [
        { Question: "¿In Aladdin, what is the name of Jasmine’s pet tiger?", Answer: ["Bongo", "Lady", "Rajah", "Pooh"], Correct: 2 },
        { Question: "When does Mary Poppins say she will leave the Banks’ house?", Answer: ["By train", "When the Wind Changes", "Tomorrow", "Next Month"], Correct: 1 },
        { Question: "In the Lion King, where does Mufasa and his family live?", Answer: ["Africa", "The Savannah", "Rock Kingdom", "Pride Rock"], Correct: 3 },
        { Question: "In Dumbo, where is Mrs. Jumbo when the stork delivers her baby?", Answer: ["Circus Ring", "In a Cage", "Circus Train", "In a Circus Show"], Correct: 2 },
        { Question: "In Beauty and the Beast, how many eggs does Gaston eat for breakfast?", Answer: ["1 Dozen", " 5 Dozen", "12 eggs", "6 Dozen"], Correct: 1 },
        { Question: "In Toy Story, what game does the slinky play?", Answer: ["Poker", "Domino", "Puzzle", "Checkers"], Correct: 3 },
        { Question: "In Lady & the Tramp, by what name did Tony call Tramp?", Answer: ["Butch", "Lucky", "Tramp", "Chuck"], Correct: 0 },
        { Question: "Which Disney movie was the first to be nominated for an Oscar? ", Answer: ["The Little Mermaid", "Alice in Wonderland", "Beauty and the Beast", "The Jungle Book"], Correct: 3 }
    ];

    var triviaQuestionsText = document.getElementsByClassName("question-container")[0];
    var currentQuestionIndex = 0;
    var userWins = 0;
    var userLoose = 0;
    var questionSeconds = 10;
    var questionTimer = null;

    $(".start-game-btn").on("click", function () {
        setupCurrentQuestion();
        $(this).hide();
    });

    function resetGame() {
        currentQuestionIndex = 0;

        $(".question-container").empty();
        $(".answers-container").empty();

        $(".start-game-btn").show();
    }

    function setupCurrentQuestion() {
        triviaQuestionsText.innerText = triviaQuestions[currentQuestionIndex].Question;
        generateAnswerButtons(triviaQuestions[currentQuestionIndex]);
        setupTimer();
    }

    function setupTimer() {
        questionSeconds = 10;
        questionTimer = setInterval(run, 1000);
    }

    function run() {
        $(".timer").text(questionSeconds);
        questionSeconds--;
        if (questionSeconds == 0) {
            goToNextQuestion();
        }
    }

    function generateAnswerButtons(currentQuestion) {
        $(".answers-container").empty();

        var answersForCurrentQuestion = currentQuestion.Answer;

        for (var i = 0; i < answersForCurrentQuestion.length; i++) {
            var answerButton = $("<button>");
            answerButton.addClass("btn-answers");
            answerButton.attr("data-answer", i);
            answerButton.text(answersForCurrentQuestion[i]);
            answerButton.on("click", checkAnswer);

            $(".answers-container").append(answerButton);
        }
    }

    function checkAnswer() {
        var userChoice = $(this).attr("data-answer");
        var correctAnswer = triviaQuestions[currentQuestionIndex].Correct;
        var currentQuestionText = triviaQuestions[currentQuestionIndex].Answer[correctAnswer];

        if (userChoice == correctAnswer) {
            userWins++;
            alert("That's right you got it!");
        }
        else {
            userLoose++;
            alert("That's not it, the right answer was " + currentQuestionText);
        }

        goToNextQuestion();
    }


    function goToNextQuestion() {
        currentQuestionIndex++;
        clearInterval(questionTimer);
        if (triviaQuestions.length === currentQuestionIndex) {
            $(".user-stats").html("Wins: " + userWins + "<br>" + "Looses: " + userLoose);
            resetGame();
        } else {
            setupCurrentQuestion();
        }
    }

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
