var selectEl = document.getElementById("animations");
var box1El = document.getElementById("box1");
var box2El = document.getElementById("box2");
var box3El = document.getElementById("box3");
var box4El = document.getElementById("box4");
var box5El = document.getElementById("box5");
var box6El = document.getElementById("box6");
var box7El = document.getElementById("box7");
var box8El = document.getElementById("box8");
var box9El = document.getElementById("box9");
var boxEl = document.getElementById("boxes");
var statusEl = document.getElementById("status-animation");

selectEl.addEventListener("click", function(event){
    event.preventDefault();
    var user_selected = selectEl.options[selectEl.selectedIndex].value;
    console.log(user_selected);
   
    switch(user_selected) {
        case "rotate": rotationElement();
                        break;
        case "translate":translationElement();
                        break;
        case "scale":scaleElement();
                        break;
        case "color": backgroundElement();
                        break;
        case "skew": skewElement();
                        break;
        case "bt": translateBackground();
                        break;
        case "tr": translateRotation();
                        break;
        case "st": scaleTranslate();
                        break;
        case "wt": skewTranslate();
                        break;
        default:    break;
    }
})

function rotationElement (){
    displayBlock();
    box2El.style.margin="0 auto";
    box2El.style.display="block";
    statusEl.innerHTML = "<h2>Rotation Animation</h2>";
    box2El.style.animation = "rotate-animation 4s infinite";
    return;
}

function translationElement (){
    displayBlock();
    box3El.style.display="block";
    statusEl.innerHTML = "<h2>Translation Animation</h2>";
    // box3El.textContent = "Translation Animation";
    box3El.style.borderRadius ="50%";
    box3El.style.animation = "translate-animation 4s infinite";
    return;
}

function scaleElement (){
    displayBlock();
    box4El.style.margin="0 auto";
    box4El.style.display="block";
    // box4El.textContent = "Scale Animation";
    statusEl.innerHTML = "<h2>Scale Animation</h2>";
    box4El.style.animation = "scale-animation 4s infinite";
    return;
}

function backgroundElement (){
    displayBlock();
    box1El.style.display="block";
    // box1El.textContent = "Background Animation";
    statusEl.innerHTML = "<h2>Background Animation</h2>";
    box1El.style.animation = "background-animation 4s infinite";
    return;
}

function skewElement (){
    displayBlock();
    box5El.style.display="block";
    // box5El.textContent = "Skew Animation";
    statusEl.innerHTML = "<h2>Skew Animation</h2>";
    box5El.style.margin="0 auto";
    box5El.style.animation = "skew-animation 4s infinite";
    return;
}

function translateBackground (){
    displayBlock();
    box6El.style.display="block";
    box6El.style.margin="0";
    statusEl.innerHTML = "<h2>Translation and Background</h2>";
    // box6El.textContent = "Translation and Background";
    box6El.style.animation = "translate-background 4s infinite";
    return;
}

function translateRotation () {
    displayBlock();
    box7El.style.display="block";
    // box7El.style.margin="0";
    // box7El.textContent = "Translation and Rotation";
    statusEl.innerHTML = "<h2>Translation and Rotation</h2>";
    box7El.style.animation = "translate-rotation 4s infinite";
    return;
}

function scaleTranslate() {
    displayBlock();
    box8El.style.display="block";
    // box8El.textContent = "Scale and Translation";
    statusEl.innerHTML = "<h2>Scale and Translation</h2>";
    box8El.style.animation = "translate-scale 4s infinite";
    return;
}

function skewTranslate() {
    displayBlock();
    box9El.style.margin="0 auto";
    box9El.style.display="block";
    // box9El.textContent = "Skew and Translation";
    statusEl.innerHTML = "<h2>Skew and Translation</h2>";
    box9El.style.animation = "skew-translate 4s infinite";
    return;
}




function displayBlock (){
    box1El.style.display="none";
    box2El.style.display="none";
    box3El.style.display="none";
    box4El.style.display="none";
    box5El.style.display="none";
    box6El.style.display="none";
    box7El.style.display="none";
    box8El.style.display="none";
    box9El.style.display="none";
}