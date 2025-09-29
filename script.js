var timer = 60;
var score = 0;
var hitnum = 0;
var timerval;
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

    timerval=setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerval);
            document.querySelector(".end").innerHTML=
             `<div id="gameover">
               <h1>GAME OVER</h1>
               <h2>Your Score: ${score}</h2>
               <button id="retryBtn">Retry</button>
               <button id="home"> Menu </button>
            </div>`
            document.querySelector("#panel").style.display="none"
            document.querySelector("#gameover").style.display="block"


            document.querySelector("#home").addEventListener("click" , homepage);
            document.querySelector("#retryBtn").addEventListener("click", resetGame);

        }

    }, 1000)
}
function resetGame() {
    score = 0;
    timer = 60;
    
    document.querySelector("#scoreval").innerHTML = score;
    document.querySelector("#timerval").innerHTML = timer;
     document.querySelector("#gameover").style.display="none"
    document.querySelector("#panel").style.display="block"

    makeBubble();
    workTimer();
    runTimer();

}

function homepage(){
   
    document.querySelector("#gameover").style.display="none"
     document.querySelector("#menu").style.display="block"
     document.querySelector("#startBtn").addEventListener("click" , ()=>{
        timer = 60 ;
        document.querySelector("#timerval").innerHTML=timer ;
        workTimer();
     } );
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
