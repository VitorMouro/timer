// let button = document.getElementById("play");
// let pause = document.getElementById("pause");
// let timeLeft = document.getElementById("time");
// let viewport_width = window.innerWidth
// let viewport_height = window.innerHeight
// let portrait = false

// if (viewport_height > viewport_width)
//     portrait = true
// else
//     portrait = false

// if (portrait) {
//     button.style.width = viewport_width.toString() + "px"
//     button.style.height = viewport_width.toString() + "px"
// } else {
//     button.style.width = viewport_height.toString() + "px"
//     button.style.height = viewport_height.toString() + "px"
// }

// button.addEventListener("click", handleClick)
// pause.addEventListener("click", handlePause)

// function isPositiveInteger(str) {
//     str = str.trim();
//     if (!str) {
//         return false;
//     }
//     str = str.replace(/^0+/, "") || "0";
//     var n = Math.floor(Number(str));
//     return n !== Infinity && String(n) === str && n >= 0;
// }

// let pop = new Audio("https://www.vitormouro.dev/timer/audio/pop.mp3")
// let beeps = new Audio("https://www.vitormouro.dev/timer/audio/beeps.mp3")
// let time = prompt("Definir tempo do timer em segundos:");
// while(!isPositiveInteger(time)){
//     time = prompt("Precisa ser um inteiro positivo:");
// }

// timeLeft.innerHTML = '<span class="material-icons">play_arrow</span>';

// let i
// let actualTime;
// let playing = false;
// function handleClick(e) {
//     actualTime = time;
//     timeLeft.innerHTML = actualTime;
//     clearInterval(i)
//     i = setInterval(countSecond, 1000);
//     playing = true;
//     pop.play()
//     countSecond()
// }

// function countSecond() {
//     actualTime--;
//     if ((actualTime <= 5 && actualTime > 0) || actualTime == time / 2)
//         pop.play()
//     timeLeft.innerHTML = actualTime;
//     if (actualTime <= 0) {
//         clearInterval(i)
//         playing = false;
//         beeps.play()
//     }
// }

// function handlePause(e){
//     clearInterval(i);
//     playing = false;
//     if(playing)
//         pause.innerHTML = '<span class="material-icons">pause</span>'
//     else
//         pause.innerHTML = '<span class="material-icons">play_arrow</span>'
// }

let main_button = document.getElementById("main");
let control_button = document.getElementById("control")
let time_element = document.getElementById("time");
let icon_element = document.getElementById("icon");
let pop = new Audio("https://www.vitormouro.dev/timer/audio/pop.mp3")
let beeps = new Audio("https://www.vitormouro.dev/timer/audio/beeps.mp3")

main_button.addEventListener("click", handleMainClick);
control_button.addEventListener("click", handleControlClick);


let isPaused = true;
let isOver = false;
let interval_id;
let input_time = 60
let current_time = 60

$('#modal').modal()
$('#submit_time').click((e) => {
    input_time = $('#time_input').val()
    if (isInt(input_time))
        current_time = parseInt(input_time, 10);
    else
        current_time = 60;
    $('#modal').modal('hide')
})
$('#time_input').keyup((e) => {
    if(e.keyCode === 13){
        e.preventDefault()
        $('#submit_time').trigger('click');
    }
})

function isInt(value) {
    return !isNaN(value) &&
        parseInt(Number(value)) == value &&
        !isNaN(parseInt(value, 10));
}

function handleMainClick(e) {
    pop.play();
    if (isPaused && !isOver) {
        time_element.innerHTML = current_time;
        interval_id = setInterval(subtract, 1000);
        isPaused = false;
        icon_element.innerHTML = "pause";
    }
    else {
        current_time = input_time;
        time_element.innerHTML = current_time;
        clearInterval(interval_id)
        interval_id = setInterval(subtract, 1000);
        isPaused = false;
        isOver = false;
        icon_element.innerHTML = "pause";
    }
}

function handleControlClick(e) {
    pop.play();
    if (isOver) {
        current_time = input_time;
        time_element.innerHTML = current_time;
        clearInterval(interval_id)
        interval_id = setInterval(subtract, 1000);
        isPaused = false;
        isOver = false;
        icon_element.innerHTML = "pause";
    }
    else if (isPaused) {
        time_element.innerHTML = current_time;
        interval_id = setInterval(subtract, 1000);
        isPaused = false;
        icon_element.innerHTML = "pause";
    } else {
        clearInterval(interval_id);
        isPaused = true;
        icon_element.innerHTML = "play_arrow";
    }
}

function subtract() {
    current_time--;
    if (current_time == 0) {
        beeps.play()
        clearInterval(interval_id)
        isPaused = true;
        icon_element.innerHTML = "replay";
        isOver = true;
    }
    if (current_time == input_time / 2 || current_time == (input_time / 2) - 0.5)
        pop.play();
    else if (current_time <= 5 && current_time > 0)
        pop.play();
    time_element.innerHTML = current_time;
}

$('#red_button').click(() => { 
    $('#main').css({"background-color": "red", "color": "white"});  
})
$('#blue_button').click(() => { 
    $('#main').css({"background-color": "lightskyblue", "color": "white"}); 
})
$('#green_button').click(() => { 
    $('#main').css({"background-color": "green", "color": "white"}); 
})
$('#black_button').click(() => { 
    $('#main').css({"background-color": "black", "color": "white"}); 
})
$('#yellow_button').click(() => { 
    $('#main').css({"background-color": "gold", "color": "white"}); 
})
$('#pink_button').click(() => { 
    $('#main').css({"background-color": "pink", "color": "white"}); 
})
$('#white_button').click(() => { 
    $('#main').css({"background-color": "white", "color": "black"}); 
})
$('#orange_button').click(() => { 
    $('#main').css({"background-color": "orange", "color": "white"});  
})

$('#red_background').click(() => { 
    $('#container').css({"background-color": "red"});  
})
$('#blue_background').click(() => { 
    $('#container').css({"background-color": "lightskyblue"}); 
})
$('#green_background').click(() => { 
    $('#container').css({"background-color": "green"}); 
})
$('#black_background').click(() => { 
    $('#container').css({"background-color": "black"}); 
})
$('#yellow_background').click(() => { 
    $('#container').css({"background-color": "gold"}); 
})
$('#pink_background').click(() => { 
    $('#container').css({"background-color": "pink"}); 
})
$('#white_background').click(() => { 
    $('#container').css({"background-color": "white"}); 
})
$('#orange_background').click(() => { 
    $('#container').css({"background-color": "orange"});  
})

$('#red_time').click(() => { 
    $('#main').css({"color": "red"});  
})
$('#blue_time').click(() => { 
    $('#main').css({"color": "lightskyblue"}); 
})
$('#green_time').click(() => { 
    $('#main').css({"color": "green"}); 
})
$('#black_time').click(() => { 
    $('#main').css({"color": "black"}); 
})
$('#yellow_time').click(() => { 
    $('#main').css({"color": "gold"}); 
})
$('#pink_time').click(() => { 
    $('#main').css({"color": "pink"}); 
})
$('#white_time').click(() => { 
    $('#main').css({"color": "white"}); 
})
$('#orange_time').click(() => { 
    $('#main').css({"color": "orange"});  
})

$('#red_control').click(() => { 
    $('#control').css({"color": "red"});  
})
$('#blue_control').click(() => { 
    $('#control').css({"color": "lightskyblue"}); 
})
$('#green_control').click(() => { 
    $('#control').css({"color": "green"}); 
})
$('#black_control').click(() => { 
    $('#control').css({"color": "black"}); 
})
$('#yellow_control').click(() => { 
    $('#control').css({"color": "gold"}); 
})
$('#pink_control').click(() => { 
    $('#control').css({"color": "pink"}); 
})
$('#white_control').click(() => { 
    $('#control').css({"color": "white"}); 
})
$('#orange_control').click(() => { 
    $('#control').css({"color": "orange"});  
})









