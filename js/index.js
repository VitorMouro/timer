const button = document.getElementById("button");
let viewport_width = window.innerWidth
let viewport_height= window.innerHeight
let portrait = false

if(viewport_height > viewport_width)
    portrait = true
else
    portrait = false

if(portrait){
    button.style.width = viewport_width.toString() + "px"
    button.style.height = viewport_width.toString() + "px"
}else{
    button.style.width = viewport_height.toString() + "px"
    button.style.height = viewport_height.toString() + "px"
}

button.addEventListener("click", handleClick)

let pop = new Audio("https://www.vitormouro.dev/timer/audio/pop.mp3")
let beeps = new Audio("https://www.vitormouro.dev/timer/audio/beeps.mp3")
let time = prompt("Definir tempo do timer em segundos:");
let i 
button.innerHTML = "START";

function handleClick(e){
    let actualTime = time;
    button.innerHTML = actualTime;
    clearInterval(i)
    i = setInterval(countSecond, 1000);
    pop.play()
    
    function countSecond(){
        actualTime--;
        if(actualTime < 5 || actualTime == time/2)
            pop.play()
        button.innerHTML = actualTime;
        if(actualTime <= 0){
            clearInterval(i)
            beeps.play()
        }
    }
}




