var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    var options = ["rock","paper","scissors"];
    var pickOption = Math.floor(Math.random()*3);
    console.log(pickOption);
    return options[pickOption];
    
}

// This function picks the winner
function pickWinner(userValue, aiValue) {
    if (userValue == aiValue)
        return "draw";
    if ( userValue == "rock" &&  aiValue == "paper")
    return "ai";
    if ( userValue == "rock" &&  aiValue == "scissors")
    return "user";
    if ( userValue == "paper" &&  aiValue == "rock")
    return "user";
    if ( userValue == "paper" &&  aiValue == "scissors")
    return "ai";
    if ( userValue == "scissors" && aiValue == "paper")
    return "user";
    if ( userValue == "scissors" && aiValue == "rock")
    return "ai";
}  

// This function sets the scoreboard with the correct points
function setScore() {
$("#userPoint").text(userPoint);
$("#aiPoint").text(aiPoint);

}

//This function captures the click and picks the winner

function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        userPoint++;
        $('#message').delay(50).text('You have won!, Click a box to play again');
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
        aiPoint++;
    }

    setScore()
}

// This function runs on page load
$(document).ready(function(){
    $(".token").click(function(evt){
        evaluate(evt);
    });
});
//////////WORK ON KEEPING THE SCORE/////////////
