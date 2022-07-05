const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    var ans = prompt("Choose one of the following: Rock Paper Scissors");
    var opNum = Math.floor(Math.random() * (4 - 1) + 1);
    var opAns;
    if (opNum === 1) {
        opAns = "Rock";
    } else {
        if (opNum === 2) {
            opAns = "Paper";
        } else {
            if (opNum === 3) {
                opAns = "Scissors";
            }
        }
    }
    var ans = ans.toLowerCase();
    var opAns = opAns.toLowerCase();
    if (ans === "rock" && opAns === "rock") {
        alert("Draw, rock vs rock");
    } else {
        if (ans === "rock" && opAns === "paper") {
            alert("Opponent Wins, rock vs paper");
        } else {
            if (ans === "rock" && opAns === "scissors") {
                alert("player wins, rock vs scissors");
            } else {
                if (ans === "paper" && opAns === "rock") {
                    alert("player wins, paper vs rock");
                } else {
                    if (ans === "paper" && opAns === "paper") {
                        alert("draw, paper vs paper");
                    } else {
                        if (ans === "paper" && opAns === "scissors") {
                            alert("opponent wins, paper vs scissors");
                        } else {
                            if (ans === "scissors" && opAns === "rock") {
                                alert("Opponent Wins, scissors vs rock");
                            } else {
                                if (ans === "scissors" && opAns === "paper") {
                                    alert("player wins, scissors vs paper");
                                } else {
                                    if (ans === "scissors" && opAns === "scissors") {
                                        alert("draw, scissors vs scissors");
                                    } else {
                                        alert(ans, " is an invalid answer");
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});