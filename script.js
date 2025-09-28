var timer = 60;
var score = 0;
var hitnum = 0;
var timerint;
function scorechanger() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function runTimer() {
    hitnum = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitnum;
}



function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 168; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += ` <div class="bubble">${rn}</div>`
    }

    document.querySelector("#lower").innerHTML = clutter;
}


function workTimer() {
    timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#lower").innerHTML = `
      <div id="gameover">
               <h1>GAME OVER</h1>
               <h2>Your Score: ${score}</h2>
               <button id="retryBtn">Retry</button>
            </div>
         `;

            document.querySelector("#retryBtn").addEventListener("click", resetGame);

        }

    }, 1000)
}
function resetGame() {
    score = 0;
    timer = 60;

    document.querySelector("#scoreval").innerHTML = score;
    document.querySelector("#timerval").innerHTML = timer;

    makeBubble();
    workTimer();
    runTimer();

}


document.querySelector("#lower").addEventListener("click", function (details) {
    var num = Number(details.target.textContent);
    if (num === hitnum) {
        scorechanger();
        makeBubble();
        runTimer();
    }

});

document.querySelector("#startBtn").addEventListener("click",function(){
    document.querySelector("#menu").style.display="none"
    document.querySelector("#panel").style.display="block"
})



makeBubble();
workTimer();
runTimer();
