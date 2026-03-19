function showIntro(){
document.getElementById("startContainer").style.display = "none";
document.getElementById("introContainer").style.display = "block";
}

function goToMain(){
document.getElementById("introContainer").style.display = "none";
document.getElementById("choiceContainer").style.display = "block";
}

// 영상 재생
function playVideo(id){
document.getElementById("choiceContainer").style.display = "none";

const player = document.getElementById("ytPlayer");
player.src = "https://www.youtube.com/embed/" + id + "?autoplay=1";

document.getElementById("videoScreen").style.display = "block";
}

// 디스코드
function joinDiscord(){
window.open("https://discord.gg/GtXZMKSAaf","_blank");
}

// 뒤로가기
function goBack(){
document.getElementById("videoScreen").style.display = "none";
document.getElementById("choiceContainer").style.display = "block";
document.getElementById("ytPlayer").src = "";
}
