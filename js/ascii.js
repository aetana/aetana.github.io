window.onload = eventHandler;

function eventHandler(){
    document.getElementById("start").onclick = start;
    document.getElementById("stop").onclick = stop;
    document.getElementById("fontsize").onchange = font;
    document.getElementById("turbo").onclick = speed;
    speed();
}


let action;
let animation;
let i = 0;
function start(){
    document.getElementById("start").disabled=true;
    document.getElementById("stop").disabled=false;
    let animType = document.getElementById("animation").value;
    animation = ANIMATIONS[animType].split("=====\n");
    console.log(animation);
    console.log(animType);

    // let i = 0;
    // action = setInterval(function(){
    //     (i === animation.length - 1) ? i = 0  : i+=1;
    //     document.getElementById("text-area").innerHTML = animation[i];
    //     speed();
    // }, animSpeed);
    startAnimation();
}

function startAnimation(){
    
    (i === animation.length - 1) ? i = 0  : i++;
    document.getElementById("text-area").innerHTML = animation[i];
    speed();

    console.log(i);
    action = setTimeout(startAnimation, animSpeed);
}

function stop(){
    document.getElementById("start").disabled=false;
    document.getElementById("stop").disabled=true;

    document.getElementById("text-area").innerHTML = animation[0];
    clearTimeout(action);

}

function font(){
    let size = document.getElementById("fontsize").value;
    document.getElementById("text-area").style.fontSize = size;
}

var animSpeed = 250;

function speed(){
    if(document.getElementById("turbo").checked){
        animSpeed = 50;
    }else{
        animSpeed = 250;
    }
}
