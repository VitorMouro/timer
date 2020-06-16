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

let pop = new Audio("../audio/pop.mp3")
let time = 60;
let i 
button.innerHTML = time;

function handleClick(e){
    let actualTime = time;
    button.innerHTML = actualTime;
    clearInterval(i)
    i = setInterval(countSecond, 200);
    pop.play()
    
    function countSecond(){
        actualTime--;
        if(actualTime < 10 || actualTime == 30)
            pop.play()
        button.innerHTML = actualTime;
        if(actualTime == 0)
            clearInterval(i)
    }
}




