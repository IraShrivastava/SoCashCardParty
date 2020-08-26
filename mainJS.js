//public variables for player 1
let aPlayerOneturns = [];
let copyOfPlayerOne = [];
let playerOnescore = 26;
var playerOnecard1;
var playerOnecard2;
var playerOnecard3;
var playerOnechar1;
var playerOnechar2;
var playerOnechar3;
var playerOnecardoutput;
let updatePlayer1 = false;

//public variables for player 2
let aPlayerTwoturns = [];
let copyOfPlayerTwo = [];
let playerTwoscore = 26;
var playerTwocard1;
var playerTwocard2;
var playerTwocard3;
var playerTwochar1;
var playerTwochar2;
var playerTwochar3;
var playerTwocardoutput;
let updatePlayer2 = false;

//public variables for player 3
let aPlayerThreeturns = [];
let copyOfPlayerThree = [];
let playerThreescore = 26;
var playerThreecard1;
var playerThreecard2;
var playerThreecard3;
var playerThreechar1;
var playerThreechar2;
var playerThreechar3;
var playerThreecardoutput;
let updatePlayer3 = false;

//public variables for player 4
let aPlayerFourturns = [];
let copyOfPlayerFour = [];
let playerFourscore = 26;
var playerFourcard1;
var playerFourcard2;
var playerFourcard3;
var playerFourchar1;
var playerFourchar2;
var playerFourchar3;
var playerFourcardoutput;
let updatePlayer4 = false;

var playerArr = []
var clickCounter = 0;
var winnerFound = false;
let playerWinStreak = [false, false, false, false]


//dealcards
function lotocards() {
    //increase number of clicks on deal button
    clickCounter++
    //if clicked after first time go for tie breaker
    if (clickCounter > 1) {
        tieBreaker();
    }
    //if clicked first time deal cards to player to determine the winner
    if (winnerFound === false) {
        //disable the deal button
        disableBtn();
        //deal cards to player
        playerOneCards();
        playerTwoCards();
        playerThreeCards();
        playerFourCards();
        //create a copy of player cards
        copyOfPlayerOne = aPlayerOneturns;
        copyOfPlayerTwo = aPlayerTwoturns;
        copyOfPlayerThree = aPlayerThreeturns;
        copyOfPlayerFour = aPlayerFourturns;
        //sort the array containing player cards
        aPlayerOneturns = copyOfPlayerOne.slice().sort(function (a, b) { return b - a });
        aPlayerTwoturns = copyOfPlayerTwo.slice().sort(function (a, b) { return b - a });
        aPlayerThreeturns = copyOfPlayerThree.slice().sort(function (a, b) { return b - a });
        aPlayerFourturns = copyOfPlayerFour.slice().sort(function (a, b) { return b - a });
        //check winner from condition1() which is if any player have a trail
        condition1();
    }
    if (winnerFound === false) {
        //check winner from condition2() which is if any player have a sequence
        condition2();
    }
    if (winnerFound === false) {
        //check winner from condition3() which is if any player have a pair of cards
        condition3();
    }
    if (winnerFound === false) {
        //check winner from condition4() which is if any player have a high value card 
        condition4();
    }
}
//deal cards to player 1
function playerOneCards() {   
    /*Player 1*/
    //deal a new card to player1 for tie breaker
    if (updatePlayer1 === true) {
        //pushing back cards to create place for new card
        var copyCardOutput = ""
        if (copyOfPlayerOne[1] === 11) {
            copyCardOutput = "J"
        } else if (copyOfPlayerOne[1] === 12) {
            copyCardOutput = "Q";
        } else if (copyOfPlayerOne[1] === 13) {
            copyCardOutput = "K";
        } else if (copyOfPlayerOne[1] === 14) {
            copyCardOutput = "A";
        } else {
            copyCardOutput = copyOfPlayerOne[1];
        }
        //pushing back middle card
        copyOfPlayerOne[0] = copyOfPlayerOne[1]
        document.getElementById("playerOnecardnum1").innerHTML = copyCardOutput;
        document.getElementById("playerOnechar1").innerHTML = playerOnechar2;
        document.getElementById("playerOnechar1").style.color = document.getElementById("playerOnechar2").style.color
        var copyCardOutput = ""
        if (copyOfPlayerOne[2] === 11) {
            copyCardOutput = "J"
        } else if (copyOfPlayerOne[2] === 12) {
            copyCardOutput = "Q";
        } else if (copyOfPlayerOne[2] === 13) {
            copyCardOutput = "K";
        } else if (copyOfPlayerOne[2] === 14) {
            copyCardOutput = "A";
        } else {
            copyCardOutput = copyOfPlayerOne[2];
        }
        //pushing back front card
        copyOfPlayerOne[1] = copyOfPlayerOne[2]
        document.getElementById("playerOnecardnum2").innerHTML = copyCardOutput;
        document.getElementById("playerOnechar2").innerHTML = playerOnechar3;
        document.getElementById("playerOnechar2").style.color = document.getElementById("playerOnechar3").style.color
        //new card number
        copyOfPlayerOne[2] = Math.floor(Math.random() * 13 + 2);
        copyCardOutput = "";
        if (copyOfPlayerOne[2] === 11) {
            copyCardOutput = "J"
        } else if (copyOfPlayerOne[2] === 12) {
            copyCardOutput = "Q";
        } else if (copyOfPlayerOne[2] === 13) {
            copyCardOutput = "K";
        } else if (copyOfPlayerOne[2] === 14) {
            copyCardOutput = "A";
        } else {
            copyCardOutput = copyOfPlayerOne[2];
        }
        document.getElementById("playerOnecardnum3").innerHTML = copyCardOutput;
        //new card character
        playerOnechar3 = Math.floor(Math.random() * 4 + 1);
        switch (playerOnechar3) {
            case 1:
                playerOnechar3 = "&hearts;";
                document.getElementById("playerOnechar3").style.color = "red";
                document.getElementById("playerOnebigchar").style.color = "red";
                break;
            case 2:
                playerOnechar3 = "&spades;";
                document.getElementById("playerOnechar3").style.color = "black";
                document.getElementById("playerOnebigchar").style.color = "black";
                break;
            case 3:
                playerOnechar3 = "&diams;";
                document.getElementById("playerOnechar3").style.color = "red";
                document.getElementById("playerOnebigchar").style.color = "red";
                break;
            case 4:
                playerOnechar3 = "&clubs;";
                document.getElementById("playerOnechar3").style.color = "black";
                document.getElementById("playerOnebigchar").style.color = "black";
                break;
        }
        document.getElementById("playerOnechar3").innerHTML = playerOnechar3;
        document.getElementById("playerOnebigchar").innerHTML = playerOnechar3;
    }
    else {
        //deal cards for first time
        //randomly generate card number
        playerOnecard1 = Math.floor(Math.random() * 13 + 2);
        playerOnecard2 = Math.floor(Math.random() * 13 + 2);
        playerOnecard3 = Math.floor(Math.random() * 13 + 2);
        //push the numbers in array
        aPlayerOneturns.push(playerOnecard1);
        aPlayerOneturns.push(playerOnecard2);
        aPlayerOneturns.push(playerOnecard3);
        //player1 cards number  
        playerOnecardoutput = "";
        if (playerOnecard1 === 11) {
            playerOnecardoutput = "J"
        } else if (playerOnecard1 === 12) {
            playerOnecardoutput = "Q";
        } else if (playerOnecard1 === 13) {
            playerOnecardoutput = "K";
        } else if (playerOnecard1 === 14) {
            playerOnecardoutput = "A";
        } else {
            playerOnecardoutput = playerOnecard1;
        }
        document.getElementById("playerOnecardnum1").innerHTML = playerOnecardoutput;
        playerOnecardoutput = "";
        if (playerOnecard2 === 11) {
            playerOnecardoutput = "J"
        } else if (playerOnecard2 === 12) {
            playerOnecardoutput = "Q";
        } else if (playerOnecard2 === 13) {
            playerOnecardoutput = "K";
        } else if (playerOnecard2 === 14) {
            playerOnecardoutput = "A";
        } else {
            playerOnecardoutput = playerOnecard2;
        }
        document.getElementById("playerOnecardnum2").innerHTML = playerOnecardoutput;
        playerOnecardoutput = "";
        if (playerOnecard3 === 11) {
            playerOnecardoutput = "J"
        } else if (playerOnecard3 === 12) {
            playerOnecardoutput = "Q";
        } else if (playerOnecard3 === 13) {
            playerOnecardoutput = "K";
        } else if (playerOnecard3 === 14) {
            playerOnecardoutput = "A";
        } else {
            playerOnecardoutput = playerOnecard3;
        }
        document.getElementById("playerOnecardnum3").innerHTML = playerOnecardoutput;
        // player1 card character;
        playerOnechar1 = Math.floor(Math.random() * 4 + 1);
        playerOnechar2 = Math.floor(Math.random() * 4 + 1);
        playerOnechar3 = Math.floor(Math.random() * 4 + 1);
        switch (playerOnechar1) {
            case 1:
                playerOnechar1 = "&hearts;";
                document.getElementById("playerOnechar1").style.color = "red";
                document.getElementById("playerOnebigchar").style.color = "red";
                break;
            case 2:
                playerOnechar1 = "&spades;";
                document.getElementById("playerOnechar1").style.color = "black";
                document.getElementById("playerOnebigchar").style.color = "black";
                break;
            case 3:
                playerOnechar1 = "&diams;";
                document.getElementById("playerOnechar1").style.color = "red";
                document.getElementById("playerOnebigchar").style.color = "red";
                break;
            case 4:
                playerOnechar1 = "&clubs;";
                document.getElementById("playerOnechar1").style.color = "black";
                document.getElementById("playerOnebigchar").style.color = "black";
                break;
        }
        document.getElementById("playerOnechar1").innerHTML = playerOnechar1;
        document.getElementById("playerOnebigchar").innerHTML = playerOnechar1;
        switch (playerOnechar2) {
            case 1:
                playerOnechar2 = "&hearts;";
                document.getElementById("playerOnechar2").style.color = "red";
                document.getElementById("playerOnebigchar").style.color = "red";
                break;
            case 2:
                playerOnechar2 = "&spades;";
                document.getElementById("playerOnechar2").style.color = "black";
                document.getElementById("playerOnebigchar").style.color = "black";
                break;
            case 3:
                playerOnechar2 = "&diams;";
                document.getElementById("playerOnechar2").style.color = "red";
                document.getElementById("playerOnebigchar").style.color = "red";
                break;
            case 4:
                playerOnechar2 = "&clubs;";
                document.getElementById("playerOnechar2").style.color = "black";
                document.getElementById("playerOnebigchar").style.color = "black";
                break;
        }
        document.getElementById("playerOnechar2").innerHTML = playerOnechar2;
        document.getElementById("playerOnebigchar").innerHTML = playerOnechar2;
        switch (playerOnechar3) {
            case 1:
                playerOnechar3 = "&hearts;";
                document.getElementById("playerOnechar3").style.color = "red";
                document.getElementById("playerOnebigchar").style.color = "red";
                break;
            case 2:
                playerOnechar3 = "&spades;";
                document.getElementById("playerOnechar3").style.color = "black";
                document.getElementById("playerOnebigchar").style.color = "black";
                break;
            case 3:
                playerOnechar3 = "&diams;";
                document.getElementById("playerOnechar3").style.color = "red";
                document.getElementById("playerOnebigchar").style.color = "red";
                break;
            case 4:
                playerOnechar3 = "&clubs;";
                document.getElementById("playerOnechar3").style.color = "black";
                document.getElementById("playerOnebigchar").style.color = "black";
                break;
        }
        document.getElementById("playerOnechar3").innerHTML = playerOnechar3;
        document.getElementById("playerOnebigchar").innerHTML = playerOnechar3;
        /*end Player 1*/
    }
}

function playerTwoCards() {
    /*Player 2*/
    //deal a new card to player2 for tie breaker
    if (updatePlayer2 === true) {
        //pushing back cards to create place for new card
        var copyCardOutput = ""
        if (copyOfPlayerTwo[1] === 11) {
            copyCardOutput = "J"
        } else if (copyOfPlayerTwo[1] === 12) {
            copyCardOutput = "Q";
        } else if (copyOfPlayerTwo[1] === 13) {
            copyCardOutput = "K";
        } else if (copyOfPlayerTwo[1] === 14) {
            copyCardOutput = "A";
        } else {
            copyCardOutput = copyOfPlayerTwo[1];
        }
        //pushing back middle card
        copyOfPlayerTwo[0] = copyOfPlayerTwo[1]
        document.getElementById("playerTwocardnum1").innerHTML = copyCardOutput;
        document.getElementById("playerTwochar1").innerHTML = playerTwochar2;
        document.getElementById("playerTwochar1").style.color = document.getElementById("playerTwochar2").style.color
        var copyCardOutput = ""
        if (copyOfPlayerTwo[2] === 11) {
            copyCardOutput = "J"
        } else if (copyOfPlayerTwo[2] === 12) {
            copyCardOutput = "Q";
        } else if (copyOfPlayerTwo[2] === 13) {
            copyCardOutput = "K";
        } else if (copyOfPlayerTwo[2] === 14) {
            copyCardOutput = "A";
        } else {
            copyCardOutput = copyOfPlayerTwo[2];
        }
        //pushing back front card
        copyOfPlayerTwo[1] = copyOfPlayerTwo[2]
        document.getElementById("playerTwocardnum2").innerHTML = copyCardOutput;
        document.getElementById("playerTwochar2").innerHTML = playerTwochar3;
        document.getElementById("playerTwochar2").style.color = document.getElementById("playerTwochar3").style.color
        //new card number
        copyOfPlayerTwo[2] = Math.floor(Math.random() * 13 + 2);
        copyCardOutput = "";
        if (copyOfPlayerTwo[2] === 11) {
            copyCardOutput = "J"
        } else if (copyOfPlayerTwo[2] === 12) {
            copyCardOutput = "Q";
        } else if (copyOfPlayerTwo[2] === 13) {
            copyCardOutput = "K";
        } else if (copyOfPlayerTwo[2] === 14) {
            copyCardOutput = "A";
        } else {
            copyCardOutput = copyOfPlayerTwo[2];
        }
        document.getElementById("playerTwocardnum3").innerHTML = copyCardOutput;
        //new card character
        playerTwochar3 = Math.floor(Math.random() * 4 + 1);
        switch (playerTwochar3) {
            case 1:
                playerTwochar3 = "&hearts;";
                document.getElementById("playerTwochar3").style.color = "red";
                document.getElementById("playerTwobigchar").style.color = "red";
                break;
            case 2:
                playerTwochar3 = "&spades;";
                document.getElementById("playerTwochar3").style.color = "black";
                document.getElementById("playerTwobigchar").style.color = "black";
                break;
            case 3:
                playerTwochar3 = "&diams;";
                document.getElementById("playerTwochar3").style.color = "red";
                document.getElementById("playerTwobigchar").style.color = "red";
                break;
            case 4:
                playerTwochar3 = "&clubs;";
                document.getElementById("playerTwochar3").style.color = "black";
                document.getElementById("playerTwobigchar").style.color = "black";
                break;
        }
        document.getElementById("playerTwochar3").innerHTML = playerTwochar3;
        document.getElementById("playerTwobigchar").innerHTML = playerTwochar3;
    }
    else {
        //deal cards for first time
        //randomly generate card number
        playerTwocard1 = Math.floor(Math.random() * 13 + 2);
        playerTwocard2 = Math.floor(Math.random() * 13 + 2);
        playerTwocard3 = Math.floor(Math.random() * 13 + 2);
        //push the numbers in array
        aPlayerTwoturns.push(playerTwocard1);
        aPlayerTwoturns.push(playerTwocard2);
        aPlayerTwoturns.push(playerTwocard3);
        //player 2 card number
        playerTwocardoutput = "";
        if (playerTwocard1 === 11) {
            playerTwocardoutput = "J"
        } else if (playerTwocard1 === 12) {
            playerTwocardoutput = "Q";
        } else if (playerTwocard1 === 13) {
            playerTwocardoutput = "K";
        } else if (playerTwocard1 === 14) {
            playerTwocardoutput = "A";
        } else {
            playerTwocardoutput = playerTwocard1;
        }
        document.getElementById("playerTwocardnum1").innerHTML = playerTwocardoutput;
        playerTwocardoutput = "";
        if (playerTwocard2 === 11) {
            playerTwocardoutput = "J"
        } else if (playerTwocard2 === 12) {
            playerTwocardoutput = "Q";
        } else if (playerTwocard2 === 13) {
            playerTwocardoutput = "K";
        } else if (playerTwocard2 === 14) {
            playerTwocardoutput = "A";
        } else {
            playerTwocardoutput = playerTwocard2;
        }
        document.getElementById("playerTwocardnum2").innerHTML = playerTwocardoutput;
        playerTwocardoutput = "";
        if (playerTwocard3 === 11) {
            playerTwocardoutput = "J"
        } else if (playerTwocard3 === 12) {
            playerTwocardoutput = "Q";
        } else if (playerTwocard3 === 13) {
            playerTwocardoutput = "K";
        } else if (playerTwocard3 === 14) {
            playerTwocardoutput = "A";
        } else {
            playerTwocardoutput = playerTwocard3;
        }
        document.getElementById("playerTwocardnum3").innerHTML = playerTwocardoutput;
        //player 2 card character
        playerTwochar1 = Math.floor(Math.random() * 4 + 1);
        playerTwochar2 = Math.floor(Math.random() * 4 + 1);
        playerTwochar3 = Math.floor(Math.random() * 4 + 1);
        switch (playerTwochar1) {
            case 1:
                playerTwochar1 = "&hearts;";
                document.getElementById("playerTwochar1").style.color = "red";
                document.getElementById("playerTwobigchar").style.color = "red";
                break;
            case 2:
                playerTwochar1 = "&spades;";
                document.getElementById("playerTwochar1").style.color = "black";
                document.getElementById("playerTwobigchar").style.color = "black";
                break;
            case 3:
                playerTwochar1 = "&diams;";
                document.getElementById("playerTwochar1").style.color = "red";
                document.getElementById("playerTwobigchar").style.color = "red";
                break;
            case 4:
                playerTwochar1 = "&clubs;";
                document.getElementById("playerTwochar1").style.color = "black";
                document.getElementById("playerTwobigchar").style.color = "black";
                break;
        }
        document.getElementById("playerTwochar1").innerHTML = playerTwochar1;
        document.getElementById("playerTwobigchar").innerHTML = playerTwochar1;
        switch (playerTwochar2) {
            case 1:
                playerTwochar2 = "&hearts;";
                document.getElementById("playerTwochar2").style.color = "red";
                document.getElementById("playerTwobigchar").style.color = "red";
                break;
            case 2:
                playerTwochar2 = "&spades;";
                document.getElementById("playerTwochar2").style.color = "black";
                document.getElementById("playerTwobigchar").style.color = "black";
                break;
            case 3:
                playerTwochar2 = "&diams;";
                document.getElementById("playerTwochar2").style.color = "red";
                document.getElementById("playerTwobigchar").style.color = "red";
                break;
            case 4:
                playerTwochar2 = "&clubs;";
                document.getElementById("playerTwochar2").style.color = "black";
                document.getElementById("playerTwobigchar").style.color = "black";
                break;
        }
        document.getElementById("playerTwochar2").innerHTML = playerTwochar2;
        document.getElementById("playerTwobigchar").innerHTML = playerTwochar2;
        switch (playerTwochar3) {
            case 1:
                playerTwochar3 = "&hearts;";
                document.getElementById("playerTwochar3").style.color = "red";
                document.getElementById("playerTwobigchar").style.color = "red";
                break;
            case 2:
                playerTwochar3 = "&spades;";
                document.getElementById("playerTwochar3").style.color = "black";
                document.getElementById("playerTwobigchar").style.color = "black";
                break;
            case 3:
                playerTwochar3 = "&diams;";
                document.getElementById("playerTwochar3").style.color = "red";
                document.getElementById("playerTwobigchar").style.color = "red";
                break;
            case 4:
                playerTwochar3 = "&clubs;";
                document.getElementById("playerTwochar3").style.color = "black";
                document.getElementById("playerTwobigchar").style.color = "black";
                break;
        }
        document.getElementById("playerTwochar3").innerHTML = playerTwochar3;
        document.getElementById("playerTwobigchar").innerHTML = playerTwochar3;
        /*end Player 2*/
    }
}

function playerThreeCards() {
    /*Player 3 */
    //deal a new card to player3 for tie breaker
    if (updatePlayer3 === true) {
        //pushing back cards to create place for new card
        var copyCardOutput = ""
        if (copyOfPlayerThree[1] === 11) {
            copyCardOutput = "J"
        } else if (copyOfPlayerThree[1] === 12) {
            copyCardOutput = "Q";
        } else if (copyOfPlayerThree[1] === 13) {
            copyCardOutput = "K";
        } else if (copyOfPlayerThree[1] === 14) {
            copyCardOutput = "A";
        } else {
            copyCardOutput = copyOfPlayerThree[1];
        }
        //pushing back middle card
        copyOfPlayerThree[0] = copyOfPlayerThree[1]
        document.getElementById("playerThreecardnum1").innerHTML = copyCardOutput;
        document.getElementById("playerThreechar1").innerHTML = playerThreechar2;
        document.getElementById("playerThreechar1").style.color = document.getElementById("playerThreechar2").style.color
        var copyCardOutput = ""
        if (copyOfPlayerThree[2] === 11) {
            copyCardOutput = "J"
        } else if (copyOfPlayerThree[2] === 12) {
            copyCardOutput = "Q";
        } else if (copyOfPlayerThree[2] === 13) {
            copyCardOutput = "K";
        } else if (copyOfPlayerThree[2] === 14) {
            copyCardOutput = "A";
        } else {
            copyCardOutput = copyOfPlayerThree[2];
        }
        //pushing back front card
        copyOfPlayerThree[1] = copyOfPlayerThree[2]
        document.getElementById("playerThreecardnum2").innerHTML = copyCardOutput;
        document.getElementById("playerThreechar2").innerHTML = playerThreechar3;
        document.getElementById("playerThreechar2").style.color = document.getElementById("playerThreechar3").style.color
        //new card number
        copyOfPlayerThree[2] = Math.floor(Math.random() * 13 + 2);
        copyCardOutput = "";
        if (copyOfPlayerThree[2] === 11) {
            copyCardOutput = "J"
        } else if (copyOfPlayerThree[2] === 12) {
            copyCardOutput = "Q";
        } else if (copyOfPlayerThree[2] === 13) {
            copyCardOutput = "K";
        } else if (copyOfPlayerThree[2] === 14) {
            copyCardOutput = "A";
        } else {
            copyCardOutput = copyOfPlayerThree[2];
        }
        document.getElementById("playerThreecardnum3").innerHTML = copyCardOutput;
        //new card character
        playerThreechar3 = Math.floor(Math.random() * 4 + 1);
        switch (playerThreechar3) {
            case 1:
                playerThreechar3 = "&hearts;";
                document.getElementById("playerThreechar3").style.color = "red";
                document.getElementById("playerThreebigchar").style.color = "red";
                break;
            case 2:
                playerThreechar3 = "&spades;";
                document.getElementById("playerThreechar3").style.color = "black";
                document.getElementById("playerThreebigchar").style.color = "black";
                break;
            case 3:
                playerThreechar3 = "&diams;";
                document.getElementById("playerThreechar3").style.color = "red";
                document.getElementById("playerThreebigchar").style.color = "red";
                break;
            case 4:
                playerThreechar3 = "&clubs;";
                document.getElementById("playerThreechar3").style.color = "black";
                document.getElementById("playerThreebigchar").style.color = "black";
                break;
        }
        document.getElementById("playerThreechar3").innerHTML = playerThreechar3;
        document.getElementById("playerThreebigchar").innerHTML = playerThreechar3;
    }
    else {
        //deal cards for first time
        //randomly generate card number
        playerThreecard1 = Math.floor(Math.random() * 13 + 2);
        playerThreecard2 = Math.floor(Math.random() * 13 + 2);
        playerThreecard3 = Math.floor(Math.random() * 13 + 2);
        //push the numbers in array
        aPlayerThreeturns.push(playerThreecard1);
        aPlayerThreeturns.push(playerThreecard2);
        aPlayerThreeturns.push(playerThreecard3);
        //player 3 card number
        playerThreecardoutput = "";
        if (playerThreecard1 === 11) {
            playerThreecardoutput = "J"
        } else if (playerThreecard1 === 12) {
            playerThreecardoutput = "Q";
        } else if (playerThreecard1 === 13) {
            playerThreecardoutput = "K";
        } else if (playerThreecard1 === 14) {
            playerThreecardoutput = "A";
        } else {
            playerThreecardoutput = playerThreecard1;
        }
        document.getElementById("playerThreecardnum1").innerHTML = playerThreecardoutput;

        playerThreecardoutput = "";
        if (playerThreecard2 === 11) {
            playerThreecardoutput = "J"
        } else if (playerThreecard2 === 12) {
            playerThreecardoutput = "Q";
        } else if (playerThreecard2 === 13) {
            playerThreecardoutput = "K";
        } else if (playerThreecard2 === 14) {
            playerThreecardoutput = "A";
        } else {
            playerThreecardoutput = playerThreecard2;
        }
        document.getElementById("playerThreecardnum2").innerHTML = playerThreecardoutput;

        playerThreecardoutput = "";
        if (playerThreecard3 === 11) {
            playerThreecardoutput = "J"
        } else if (playerThreecard3 === 12) {
            playerThreecardoutput = "Q";
        } else if (playerThreecard3 === 13) {
            playerThreecardoutput = "K";
        } else if (playerThreecard3 === 14) {
            playerThreecardoutput = "A";
        } else {
            playerThreecardoutput = playerThreecard3;
        }
        document.getElementById("playerThreecardnum3").innerHTML = playerThreecardoutput;

        // player 3 card character
        playerThreechar1 = Math.floor(Math.random() * 4 + 1);
        playerThreechar2 = Math.floor(Math.random() * 4 + 1);
        playerThreechar3 = Math.floor(Math.random() * 4 + 1);

        switch (playerThreechar1) {
            case 1:
                playerThreechar1 = "&hearts;";
                document.getElementById("playerThreechar1").style.color = "red";
                document.getElementById("playerThreebigchar").style.color = "red";
                break;
            case 2:
                playerThreechar1 = "&spades;";
                document.getElementById("playerThreechar1").style.color = "black";
                document.getElementById("playerThreebigchar").style.color = "black";
                break;
            case 3:
                playerThreechar1 = "&diams;";
                document.getElementById("playerThreechar1").style.color = "red";
                document.getElementById("playerThreebigchar").style.color = "red";
                break;
            case 4:
                playerThreechar1 = "&clubs;";
                document.getElementById("playerThreechar1").style.color = "black";
                document.getElementById("playerThreebigchar").style.color = "black";
                break;
        }
        document.getElementById("playerThreechar1").innerHTML = playerThreechar1;
        document.getElementById("playerThreebigchar").innerHTML = playerThreechar1;

        switch (playerThreechar2) {
            case 1:
                playerThreechar2 = "&hearts;";
                document.getElementById("playerThreechar2").style.color = "red";
                document.getElementById("playerThreebigchar").style.color = "red";
                break;
            case 2:
                playerThreechar2 = "&spades;";
                document.getElementById("playerThreechar2").style.color = "black";
                document.getElementById("playerThreebigchar").style.color = "black";
                break;
            case 3:
                playerThreechar2 = "&diams;";
                document.getElementById("playerThreechar2").style.color = "red";
                document.getElementById("playerThreebigchar").style.color = "red";
                break;
            case 4:
                playerThreechar2 = "&clubs;";
                document.getElementById("playerThreechar2").style.color = "black";
                document.getElementById("playerThreebigchar").style.color = "black";
                break;
        }
        document.getElementById("playerThreechar2").innerHTML = playerThreechar2;
        document.getElementById("playerThreebigchar").innerHTML = playerThreechar2;

        switch (playerThreechar3) {
            case 1:
                playerThreechar3 = "&hearts;";
                document.getElementById("playerThreechar3").style.color = "red";
                document.getElementById("playerThreebigchar").style.color = "red";
                break;
            case 2:
                playerThreechar3 = "&spades;";
                document.getElementById("playerThreechar3").style.color = "black";
                document.getElementById("playerThreebigchar").style.color = "black";
                break;
            case 3:
                playerThreechar3 = "&diams;";
                document.getElementById("playerThreechar3").style.color = "red";
                document.getElementById("playerThreebigchar").style.color = "red";
                break;
            case 4:
                playerThreechar3 = "&clubs;";
                document.getElementById("playerThreechar3").style.color = "black";
                document.getElementById("playerThreebigchar").style.color = "black";
                break;
        }
        document.getElementById("playerThreechar3").innerHTML = playerThreechar3;
        document.getElementById("playerThreebigchar").innerHTML = playerThreechar3;
        /*end Player 3*/
    }
}

function playerFourCards() {
    /*Player 4*/
    //deal a new card to player2 for tie breaker
    if (updatePlayer4 === true) {
        //pushing back cards to create place for new card
        var copyCardOutput = ""
        if (copyOfPlayerFour[1] === 11) {
            copyCardOutput = "J"
        } else if (copyOfPlayerFour[1] === 12) {
            copyCardOutput = "Q";
        } else if (copyOfPlayerFour[1] === 13) {
            copyCardOutput = "K";
        } else if (copyOfPlayerFour[1] === 14) {
            copyCardOutput = "A";
        } else {
            copyCardOutput = copyOfPlayerFour[1];
        }
        //pushing back middle card
        copyOfPlayerFour[0] = copyOfPlayerFour[1]
        document.getElementById("playerFourcardnum1").innerHTML = copyCardOutput;
        document.getElementById("playerFourchar1").innerHTML = playerFourchar2;
        document.getElementById("playerFourchar1").style.color = document.getElementById("playerFourchar2").style.color
        var copyCardOutput = ""
        if (copyOfPlayerFour[2] === 11) {
            copyCardOutput = "J"
        } else if (copyOfPlayerFour[2] === 12) {
            copyCardOutput = "Q";
        } else if (copyOfPlayerFour[2] === 13) {
            copyCardOutput = "K";
        } else if (copyOfPlayerFour[2] === 14) {
            copyCardOutput = "A";
        } else {
            copyCardOutput = copyOfPlayerFour[2];
        }
        //pushing back front card
        copyOfPlayerFour[1] = copyOfPlayerFour[2]
        document.getElementById("playerFourcardnum2").innerHTML = copyCardOutput;
        document.getElementById("playerFourchar2").innerHTML = playerFourchar3;
        document.getElementById("playerFourchar2").style.color = document.getElementById("playerFourchar3").style.color
        //new card number
        copyOfPlayerFour[2] = Math.floor(Math.random() * 13 + 2);
        copyCardOutput = "";
        if (copyOfPlayerFour[2] === 11) {
            copyCardOutput = "J"
        } else if (copyOfPlayerFour[2] === 12) {
            copyCardOutput = "Q";
        } else if (copyOfPlayerFour[2] === 13) {
            copyCardOutput = "K";
        } else if (copyOfPlayerFour[2] === 14) {
            copyCardOutput = "A";
        } else {
            copyCardOutput = copyOfPlayerFour[2];
        }
        document.getElementById("playerFourcardnum3").innerHTML = copyCardOutput;
        //new card character
        playerFourchar3 = Math.floor(Math.random() * 4 + 1);
        switch (playerFourchar3) {
            case 1:
                playerFourchar3 = "&hearts;";
                document.getElementById("playerFourchar3").style.color = "red";
                document.getElementById("playerFourbigchar").style.color = "red";
                break;
            case 2:
                playerFourchar3 = "&spades;";
                document.getElementById("playerFourchar3").style.color = "black";
                document.getElementById("playerFourbigchar").style.color = "black";
                break;
            case 3:
                playerFourchar3 = "&diams;";
                document.getElementById("playerFourchar3").style.color = "red";
                document.getElementById("playerFourbigchar").style.color = "red";
                break;
            case 4:
                playerFourchar3 = "&clubs;";
                document.getElementById("playerFourchar3").style.color = "black";
                document.getElementById("playerFourbigchar").style.color = "black";
                break;
        }
        document.getElementById("playerFourchar3").innerHTML = playerFourchar3;
        document.getElementById("playerFourbigchar").innerHTML = playerFourchar3;
    }
    else {
        //deal cards for first time
        //randomly generate card number
        playerFourcard1 = Math.floor(Math.random() * 13 + 2);
        playerFourcard2 = Math.floor(Math.random() * 13 + 2);
        playerFourcard3 = Math.floor(Math.random() * 13 + 2);
        //push the numbers in array
        aPlayerFourturns.push(playerFourcard1);
        aPlayerFourturns.push(playerFourcard2);
        aPlayerFourturns.push(playerFourcard3);
        //player 4 card number
        playerFourcardoutput = "";
        if (playerFourcard1 === 11) {
            playerFourcardoutput = "J"
        } else if (playerFourcard1 === 12) {
            playerFourcardoutput = "Q";
        } else if (playerFourcard1 === 13) {
            playerFourcardoutput = "K";
        } else if (playerFourcard1 === 14) {
            playerFourcardoutput = "A";
        } else {
            playerFourcardoutput = playerFourcard1;
        }
        document.getElementById("playerFourcardnum1").innerHTML = playerFourcardoutput;

        playerFourcardoutput = "";
        if (playerFourcard2 === 11) {
            playerFourcardoutput = "J"
        } else if (playerFourcard2 === 12) {
            playerFourcardoutput = "Q";
        } else if (playerFourcard2 === 13) {
            playerFourcardoutput = "K";
        } else if (playerFourcard2 === 14) {
            playerFourcardoutput = "A";
        } else {
            playerFourcardoutput = playerFourcard2;
        }
        document.getElementById("playerFourcardnum2").innerHTML = playerFourcardoutput;

        playerFourcardoutput = "";
        if (playerFourcard3 === 11) {
            playerFourcardoutput = "J"
        } else if (playerFourcard3 === 12) {
            playerFourcardoutput = "Q";
        } else if (playerFourcard3 === 13) {
            playerFourcardoutput = "K";
        } else if (playerFourcard3 === 14) {
            playerFourcardoutput = "A";
        } else {
            playerFourcardoutput = playerFourcard3;
        }
        document.getElementById("playerFourcardnum3").innerHTML = playerFourcardoutput;

        // player 4 card characte
        playerFourchar1 = Math.floor(Math.random() * 4 + 1);
        playerFourchar2 = Math.floor(Math.random() * 4 + 1);
        playerFourchar3 = Math.floor(Math.random() * 4 + 1);

        switch (playerFourchar1) {
            case 1:
                playerFourchar1 = "&hearts;";
                document.getElementById("playerFourchar1").style.color = "red";
                document.getElementById("playerFourbigchar").style.color = "red";
                break;
            case 2:
                playerFourchar1 = "&spades;";
                document.getElementById("playerFourchar1").style.color = "black";
                document.getElementById("playerFourbigchar").style.color = "black";
                break;
            case 3:
                playerFourchar1 = "&diams;";
                document.getElementById("playerFourchar1").style.color = "red";
                document.getElementById("playerFourbigchar").style.color = "red";
                break;
            case 4:
                playerFourchar1 = "&clubs;";
                document.getElementById("playerFourchar1").style.color = "black";
                document.getElementById("playerFourbigchar").style.color = "black";
                break;
        }
        document.getElementById("playerFourchar1").innerHTML = playerFourchar1;
        document.getElementById("playerFourbigchar").innerHTML = playerFourchar1;

        switch (playerFourchar2) {
            case 1:
                playerFourchar2 = "&hearts;";
                document.getElementById("playerFourchar2").style.color = "red";
                document.getElementById("playerFourbigchar").style.color = "red";
                break;
            case 2:
                playerFourchar2 = "&spades;";
                document.getElementById("playerFourchar2").style.color = "black";
                document.getElementById("playerFourbigchar").style.color = "black";
                break;
            case 3:
                playerFourchar2 = "&diams;";
                document.getElementById("playerFourchar2").style.color = "red";
                document.getElementById("playerFourbigchar").style.color = "red";
                break;
            case 4:
                playerFourchar2 = "&clubs;";
                document.getElementById("playerFourchar2").style.color = "black";
                document.getElementById("playerFourbigchar").style.color = "black";
                break;
        }
        document.getElementById("playerFourchar2").innerHTML = playerFourchar2;
        document.getElementById("playerFourbigchar").innerHTML = playerFourchar2;

        switch (playerFourchar3) {
            case 1:
                playerFourchar3 = "&hearts;";
                document.getElementById("playerFourchar3").style.color = "red";
                document.getElementById("playerFourbigchar").style.color = "red";
                break;
            case 2:
                playerFourchar3 = "&spades;";
                document.getElementById("playerFourchar3").style.color = "black";
                document.getElementById("playerFourbigchar").style.color = "black";
                break;
            case 3:
                playerFourchar3 = "&diams;";
                document.getElementById("playerFourchar3").style.color = "red";
                document.getElementById("playerFourbigchar").style.color = "red";
                break;
            case 4:
                playerFourchar3 = "&clubs;";
                document.getElementById("playerFourchar3").style.color = "black";
                document.getElementById("playerFourbigchar").style.color = "black";
                break;
        }
        document.getElementById("playerFourchar3").innerHTML = playerFourchar3;
        document.getElementById("playerFourbigchar").innerHTML = playerFourchar3;
        /*end Player 4*/
    }
}

function condition1() {
    //victory condition 1 trail
    //function to check if all cards number are equal
    console.log("condition 1")
    const allEqual = arr => arr.every(val => val === arr[0]);
    //return true or false if cards are equal or not respectively
    const result1 = allEqual(aPlayerOneturns)
    const result2 = allEqual(aPlayerTwoturns)
    const result3 = allEqual(aPlayerThreeturns)
    const result4 = allEqual(aPlayerFourturns)
    //storing the results in array
    const resultArr = [result1, result2, result3, result4]
    //storing the highest card number of each player in the array
    playerArr = [aPlayerOneturns[0], aPlayerTwoturns[0], aPlayerThreeturns[0], aPlayerFourturns[0]]
    //store the highest trail
    var highestTrail = 0;
    //for every element in resultArr check if it is true & if it is true check if the highest card number is greater than highest trail
    for (let counterCondition1 = 0; counterCondition1 <= 3; counterCondition1++) {
        if (resultArr[counterCondition1] === true) {
            if (playerArr[counterCondition1] > highestTrail) {
                highestTrail = playerArr[counterCondition1]
                winnerFound = true;
            }
        }
    }
    //declare the winner
    if (highestTrail === aPlayerOneturns[0] && allEqual(aPlayerOneturns))
        document.getElementById("winnername").innerHTML = "Player 1";
    if (highestTrail === aPlayerTwoturns[0] && allEqual(aPlayerTwoturns))
        document.getElementById("winnername").innerHTML = "Player 2";
    if (highestTrail === aPlayerThreeturns[0] && allEqual(aPlayerThreeturns))
        document.getElementById("winnername").innerHTML = "Player 3";
    if (highestTrail === aPlayerFourturns[0] && allEqual(aPlayerFourturns))
        document.getElementById("winnername").innerHTML = "Player 4";
}

function condition2() {
    //victory 2 condition highest sequence
    //store the highest sequence
    console.log("condition 2")
    let highestSequence = 0;
    let count1= 0;
    //variables to verify the winner
    //let player1 = player2 = player3 = player4 = false;
    //check if the difference between the cards dealt to player one is having difference 1
    if (aPlayerOneturns[0] - aPlayerOneturns[1] === 1) {
        if (aPlayerOneturns[1] - aPlayerOneturns[2] === 1) {
            winnerFound = true;
            if (aPlayerOneturns[0] > highestSequence)
                highestSequence = aPlayerOneturns[0];
           /* player1 = true;
            player2 = false;
            player3 = false;
            player4 = false;*/
            playerWinStreak[0]= true;
        }
    }
    //check if the difference between the cards dealt to player two is having difference 1
    if (aPlayerTwoturns[0] - aPlayerTwoturns[1] === 1) {
        if (aPlayerTwoturns[1] - aPlayerTwoturns[2] === 1) {
            winnerFound = true;
            if (aPlayerTwoturns[0] > highestSequence)
                highestSequence = aPlayerTwoturns[0];
            /*player1 = false;
            player2 = true;
            player3 = false;
            player4 = false;*/
            playerWinStreak[1] = true
        }
    }
    //check if the difference between the cards dealt to player three is having difference 1
    if (aPlayerThreeturns[0] - aPlayerThreeturns[1] === 1) {
        if (aPlayerThreeturns[1] - aPlayerThreeturns[2] === 1) {
            winnerFound = true;
            if (aPlayerThreeturns[0] > highestSequence)
                highestSequence = aPlayerThreeturns[0];
            /*player1 = false;
            player2 = false;
            player3 = true;
            player4 = false;*/
            playerWinStreak[2] = true;
        }
    }
    //check if the difference between the cards dealt to player four is having difference 1
    if (aPlayerFourturns[0] - aPlayerFourturns[1] === 1) {
        if (aPlayerFourturns[1] - aPlayerFourturns[2] === 1) {
            winnerFound = true;
            if (aPlayerFourturns[0] > highestSequence)
                highestSequence = aPlayerFourturns[0];
            /*player1 = false;
            player2 = false;
            player3 = false;
            player4 = true;*/
            playerWinStreak[3] = true;
        }
    }
    //find the number of winners
    for(let a=0;a<=3; a++)
    {
        if(playerWinStreak[a] === true)
            count1++
    }
    //if count = 1 then declare the winner else call tiebreaker()
    if(count1 === 1)
    {
        if (highestSequence === aPlayerOneturns[0] && playerWinStreak[0]=== true)
            document.getElementById("winnername").innerHTML = "Player 1";
        if (highestSequence === aPlayerTwoturns[0] && playerWinStreak[1] === true)
            document.getElementById("winnername").innerHTML = "Player 2";
        if (highestSequence === aPlayerThreeturns[0] && playerWinStreak[2] === true)
            document.getElementById("winnername").innerHTML = "Player 3";
        if (highestSequence === aPlayerFourturns[0] && playerWinStreak[3] === true)
            document.getElementById("winnername").innerHTML = "Player 4";
    }
    //if there are more than one winner call tie breaker
    if (count1 > 1) {
        document.getElementById("deal").innerHTML = "Deal Again For Tie Breaker";
        //enabling the deal button
        enableBtn();
    }
}

function condition3() {
    //victory condition 3
    //store the highest pair value
    console.log("condition 3")
    playerWinStreak = [false,false,false,false]
    let highestPair = 0;
    let count2 = 0;
    let counter = [0,0,0,0]
    //variables to verify the winner
    //check if the difference between the cards dealt to player one is having difference 0
    if (aPlayerOneturns[0] - aPlayerOneturns[1] === 0 || aPlayerOneturns[0] - aPlayerOneturns[2] === 0 || aPlayerOneturns[1] - aPlayerOneturns[2] === 0) {
        //check if card one is having a pair
        if (((aPlayerOneturns[0] === aPlayerOneturns[1]) || (aPlayerOneturns[0] === aPlayerOneturns[2])) && aPlayerOneturns[0] > highestPair) {
            highestPair = aPlayerOneturns[0];
           // playerWinStreak[0] = true;
        } 
        //check if card two is having a pair
        if ((aPlayerOneturns[1] === aPlayerOneturns[2]) && aPlayerOneturns[1] > highestPair) {
            highestPair = aPlayerOneturns[1];
           // playerWinStreak[0] = true;
        }
        
        winnerFound = true;
    }
    //check if the difference between the cards dealt to player two is having difference 0
    if (aPlayerTwoturns[0] - aPlayerTwoturns[1] === 0 || aPlayerTwoturns[0] - aPlayerTwoturns[2] === 0 || aPlayerTwoturns[1] - aPlayerTwoturns[2] === 0) {
        //check if card one is having a pair
        if (((aPlayerTwoturns[0] === aPlayerTwoturns[1]) || (aPlayerTwoturns[0] === aPlayerTwoturns[2])) && aPlayerTwoturns[0] > highestPair) {
            highestPair = aPlayerTwoturns[0];
            //playerWinStreak[1] = true;
        }
        //check if card two is having a pair
        if ((aPlayerTwoturns[1] === aPlayerTwoturns[2]) && aPlayerTwoturns[1] > highestPair) {
            highestPair = aPlayerTwoturns[1];
            //playerWinStreak[1] = true;
        }
        winnerFound = true;
    }
    //check if the difference between the cards dealt to player three is having difference 0
    if (aPlayerThreeturns[0] - aPlayerThreeturns[1] === 0 || aPlayerThreeturns[0] - aPlayerThreeturns[2] === 0 || aPlayerThreeturns[1] - aPlayerThreeturns[2] === 0) {
        //check if card one is having a pair
        if (((aPlayerThreeturns[0] === aPlayerThreeturns[1]) || (aPlayerThreeturns[0] === aPlayerThreeturns[2])) && aPlayerThreeturns[0] > highestPair) {
            highestPair = aPlayerThreeturns[0];
           // playerWinStreak[2] = true;
        }
        //check if card two is having a pair
        if ((aPlayerThreeturns[1] === aPlayerThreeturns[2]) && aPlayerThreeturns[1] > highestPair) {
            highestPair = aPlayerThreeturns[1];
            //playerWinStreak[2] = true;
        }
        winnerFound = true;
    }
    //check if the difference between the cards dealt to player one is having difference 0
    if (aPlayerFourturns[0] - aPlayerFourturns[1] === 0 || aPlayerFourturns[0] - aPlayerFourturns[2] === 0 || aPlayerFourturns[1] - aPlayerFourturns[2] === 0) {
        //check if card one is having a pair
        if (((aPlayerFourturns[0] === aPlayerFourturns[1]) || (aPlayerFourturns[0] === aPlayerFourturns[2])) && aPlayerFourturns[0] > highestPair) {
            highestPair = aPlayerFourturns[0];
           // playerWinStreak[3] = true;
        }
        //check if card two is having a pair
        if ((aPlayerFourturns[1] === aPlayerFourturns[2]) && aPlayerFourturns[1] > highestPair) {
            highestPair = aPlayerFourturns[1];
           // playerWinStreak[3] = true;
        }
        winnerFound = true;
    }
    //check if player one is having highest pair card
    for(let cp1=0; cp1<=2; cp1++)
    {
        if(highestPair === aPlayerOneturns[cp1])
            counter[0]++;
    }
    //check if player two is having highest pair card
    for(let cp2=0; cp2<=2; cp2++)
    {
        if(highestPair === aPlayerTwoturns[cp2])
            counter[1]++;
    }
    //check if player three is having highest pair card
    for(let cp3=0; cp3<=2; cp3++)
    {
        if(highestPair === aPlayerThreeturns[cp3])
            counter[2]++;
    }
    //check if player four is having highest pair card
    for(let cp4=0; cp4<=2; cp4++)
    {
        if(highestPair === aPlayerFourturns[cp4])
            counter[3]++;
    }
    //find the number of winners
    for(let c=0; c<=4;c++)
    {
        if(counter[c] === 2)
            count2++;
    }
    //update winning strike
    for(let z=0;z<=3;z++)
    {
        if(counter[z] === 2)
            playerWinStreak[z] = true
    }
    //if count = 1 then declare the winner else call tiebreaker()
    if(count2 === 1){
        if (playerWinStreak[0] === true)
            document.getElementById("winnername").innerHTML = "Player 1";
        if (playerWinStreak[1] === true)
            document.getElementById("winnername").innerHTML = "Player 2";
        if (playerWinStreak[2] === true)
            document.getElementById("winnername").innerHTML = "Player 3";
        if (playerWinStreak[3] === true)
            document.getElementById("winnername").innerHTML = "Player 4";
    }
    //if there are more than one winner call tie breaker
    if (count2 > 1) {
        document.getElementById("deal").innerHTML = "Deal Again For Tie Breaker";
        //enabling the deal button
        enableBtn();
    }

}

function condition4() {
    //victory condition 5
    //store the highest value card
    console.log("condition 4")
    playerWinStreak = [false,false,false,false]
    let highestValue = 0;
    //check if there is more than one winner
    let count3 = 0;
    //find the highest card among all the high cards of player
    highestValue = Math.max.apply(null, playerArr)
    for (let x = 0; x <= 3; x++) {
        if (playerArr[x] >= highestValue) {
            highestValue = playerArr[x];
            count3++;
            playerWinStreak[x] = true;
        }
    }
    //if count = 1 then declare the winner else call tiebreaker()
    if (count3 === 1) {
        winnerFound = true;
        if (highestValue === aPlayerOneturns[0])
            document.getElementById("winnername").innerHTML = "Player 1";
        if (highestValue === aPlayerTwoturns[0])
            document.getElementById("winnername").innerHTML = "Player 2";
        if (highestValue === aPlayerThreeturns[0])
            document.getElementById("winnername").innerHTML = "Player 3";
        if (highestValue === aPlayerFourturns[0])
            document.getElementById("winnername").innerHTML = "Player 4";
    }
    //if there are more than one winner call tie breaker
    if (count3 > 1) {
        document.getElementById("deal").innerHTML = "Deal Again For Tie Breaker";
        //enabling the deal button
        enableBtn();
    }
}

function tieBreaker() {
    console.log("tie breaker")
    //enable the deal button
    enableBtn();
    //diable the deal button
    disableBtn();
    //update the latest card of player having tie
    var checkArr = [0, 0, 0, 0]
    //check for players having tie update their cards
    for (let check = 0; check <= 3; check++) {
        if (playerWinStreak[check] === true) {
            if (check === 0) {
                updatePlayer1 = true;
                playerOneCards()
                checkArr[0] = copyOfPlayerOne[2]
            }
            if (check === 1) {
                updatePlayer2 = true;
                playerTwoCards();
                checkArr[1] = copyOfPlayerTwo[2];
            }
            if (check === 2) {
                updatePlayer3 = true;
                playerThreeCards();
                checkArr[2] = copyOfPlayerThree[2];
            }
            if (check === 3) {
                updatePlayer4 = true;
                playerFourCards();
                checkArr[3] = copyOfPlayerFour[2];
            }
        }
    }
    //store the maximum card value from the newly dealt cards
    let maxValue = Math.max.apply(null, checkArr)
    //count of winners
    let count = 0;
    //variables to verify winner
    let maxPlayer1 = false;
    let maxPlayer2 = false;
    let maxPlayer3 = false;
    let maxPlayer4 = false;
    //compare the newly dealt card with maximum value
    for (let i = 0; i <= 3; i++) {
        if (checkArr[i] === maxValue) {
            //count of winners
            count++;
            if (i === 0)
                maxPlayer1 = true;
            if (i === 1)
                maxPlayer2 = true;
            if (i === 2)
                maxPlayer3 = true;
            if (i === 3)
                maxPlayer4 = true;
        }
    }
    //if there is one winner
    if (count === 1) {
        document.getElementById("deal").innerHTML = "";
        winnerFound = true;
        //declare the winner
        if (maxPlayer1 === true)
            document.getElementById("winnername").innerHTML = "Player 1";
        if (maxPlayer2 === true)
            document.getElementById("winnername").innerHTML = "Player 2";
        if (maxPlayer3 === true)
            document.getElementById("winnername").innerHTML = "Player 3";
        if (maxPlayer4 === true)
            document.getElementById("winnername").innerHTML = "Player 4";

    }
    //if there is more than one winner again call tie breaker
    if (count > 1) {
        winnerFound = false;
        tieBreaker();
    }
}

function enableBtn() {
    /*function to enable the deal button*/
    document.getElementById("mainbtn").disabled = false;
}
function disableBtn() {
    /*function to disable the deal button*/
    document.getElementById("mainbtn").disabled = true;
}
