const audioEl = document.getElementById("audio");
const containAudio = document.getElementById("boo");

let isPlaying = false;
let times = 2000;

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
// function to play audio
function playAudio() {
    if (!isPlaying) {
        audioEl.play();
        console.log("tets")
        isPlaying = true;
        delay(times).then(() => alert("Haha kaget ya !!"));
        times += 1000;
    }
}

// function to pause audio
function pauseAudio() {
    if (isPlaying) {
        audioEl.pause();
        isPlaying = false;
    }
}
containAudio.addEventListener("mouseenter", playAudio);
// containAudio.addEventListener("mouseleave", pauseAudio);

// interval animasi
let pos = [100,-110];
let box = document.getElementById("sword");
box.style.left = pos[1]+"px";
//fl4g
function move() {
    if (pos[1] >= 370){
        pos[1] = -100;
    }
    pos[1] += 1;
    box.style.left = pos[1]+"px";
}

setInterval(move,50);