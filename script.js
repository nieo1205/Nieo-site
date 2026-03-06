const PASSWORD = "7586";

function login(){

const name = document.getElementById("name").value;
const password = document.getElementById("password").value;
const message = document.getElementById("message");

if(name === ""){
message.innerText = "이름을 입력하세요";
return;
}

if(password !== PASSWORD){
message.innerText = "비밀번호가 틀렸습니다";
return;
}

message.innerText = "";

document.getElementById("loginContainer").style.display = "none";
document.getElementById("choiceContainer").style.display = "block";

}


function playVideo(id){

document.getElementById("choiceContainer").style.display = "none";

const player = document.getElementById("ytPlayer");
player.src = "https://www.youtube.com/embed/" + id + "?autoplay=1";

document.getElementById("videoScreen").style.display = "block";

}


function joinDiscord(){

window.open("https://discord.gg/GtXZMKSAaf","_blank");

}


/* 뒤로가기 버튼 */

function goBack(){

document.getElementById("videoScreen").style.display = "none";
document.getElementById("choiceContainer").style.display = "block";

document.getElementById("ytPlayer").src = "";

}


/* 엔터키 로그인 */

document.getElementById("password").addEventListener("keydown", function(e){

if(e.key === "Enter"){
login();
}

});
