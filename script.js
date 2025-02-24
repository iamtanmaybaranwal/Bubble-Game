var timer=60;
var score=0;
var hitrn = 0;

function makeBubble(){
    var clutter = "";
for(var i=1; i<=147; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){ 
        timer--;
        document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = "<h1>Game Over</h1>" + "<h1><p>and your Score is: " + score + "</p></h1>";


        }
    },1000)
}

function getNewScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener("click", function(delt){
    var selectednumber = (Number(delt.target.textContent));
    if(selectednumber == hitrn){
        getNewScore();
        getNewHit();
        makeBubble();
    }
})


runTimer();
makeBubble();
getNewHit();
