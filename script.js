const noBtn = document.getElementById("noBtn");

const yesBtn = document.getElementById("yesBtn");

const result = document.getElementById("result");

let count = 0;

const messages = [

"🥺 Are you sure?",

"😭 Think Again!",

"🥹 Pleaseee...",

"💔 Don't Break My Heart",

"😭 I'll Cry",

"🥺 Really??",

"❤️ Click YES",

"😌 YES is Better",

"😂 I Won't Give Up"

];

noBtn.addEventListener("mouseover",function(){

noBtn.innerHTML = messages[count % messages.length];

count++;

let x=Math.random()*300-150;

let y=Math.random()*300-150;

noBtn.style.transform=`translate(${x}px,${y}px)`;

yesBtn.style.transform=`scale(${1+(count*0.05)})`;

});

function yesClicked(){

result.innerHTML="🎉 YAYYYY!! ❤️<br>I knew you'd say YES 🥰💕";

}
