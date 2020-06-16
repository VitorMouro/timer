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

console.log(button.style.width, button.style.height)



