localStorage.clear()
var snakehand="./assets/snakehand.jpg"
var waterhand="./assets/waterhand.jpg"
var gunhand="./assets/gunhand.jpg"

var snakeicon=document.querySelector('#snake_icon')
var watericon=document.getElementById("water_icon")
var gunicon=document.getElementById("gun_icon")
var message=document.querySelector(".message")
var hand1=document.querySelector(".humanhand1")
var hand2=document.querySelector(".humanhand2")

var score1=0;
var score2=0;
var playerscore=""
var computerscore=""

snakeicon.onclick = () => {
    hand1.innerHTML=`<img src="${snakehand}" alt="" class="hands">`
    playerscore="snakehand"
    virtual()
}
watericon.addEventListener("click", ()=>{
    hand1.innerHTML=`<img src="${waterhand}" alt="" class="hands">`
    playerscore="waterhand"
    virtual()
})
gunicon.addEventListener("click", ()=>{
    hand1.innerHTML=`<img src="${gunhand}" alt="" class="hands">`
    playerscore="gunhand"
    virtual()
})

function virtual(){
    var random=Math.ceil((Math.random()*3))
    if(random==1){
        hand2.innerHTML=`<img src="${snakehand}" alt="" class="hands">`
        computerscore="snakehand"
        virtualscore()
    }
    else if(random==2){
        hand2.innerHTML=`<img src="${waterhand}" alt="" class="hands">`
        computerscore="waterhand"
        virtualscore()
    }
    else if(random==3){
        hand2.innerHTML=`<img src="${gunhand}" alt="" class="hands">`
        computerscore="gunhand"
        virtualscore()
    }
    
}

function virtualscore(){
    if(playerscore===computerscore){
        // it's a tie.
    }
    else if(playerscore==="snakehand" && computerscore==="waterhand"){
        score1+=1;
    }
    else if(playerscore==="waterhand" && computerscore==="snakehand"){
        score2+=1;
    }
    else if(playerscore==="waterhand" && computerscore==="gunhand"){
        score1+=1;
    }
    else if(playerscore==="gunhand" && computerscore==="waterhand"){
        score2+=1;
    }
    else if(playerscore==="snakehand" && computerscore==="gunhand"){
        score2+=1;
    }
    else if(playerscore==="gunhand" && computerscore==="snakehand"){
        score1+=1;
    }
    console.log(`playerscore: ${playerscore}, computerscore: ${computerscore}`);
    
    gameover();
}


var title=document.getElementById("head3")
var mouth=document.getElementById("mouth")
var hands=document.querySelector(".hands")
var playagain=document.querySelector(".playagain")
var returnbutton =document.querySelector(".return")

function gameover(){
    localStorage.setItem("score1",score1)
    localStorage.setItem("score2",score2)

    if(score1>=10){
        window.location.href="./result.html"

    }else if(score2>=10){
        window.location.href="./result.html"

    }
    console.log(score1, score2)
    title.innerHTML=`${score1}-${score2}`
}

function getData() {
    var storedUsername = localStorage.getItem("username");
    var storedNickname = localStorage.getItem("nickname");

    if (storedUsername && storedNickname) {
        document.getElementById("username").value = storedUsername;
        document.getElementById("nickname").value = storedNickname;
    } else {
        alert("No data found.");
    }
}

getData();













