var box1 = document.getElementById('#box1');
var box2 = document.getElementById('#box2');
var box3 = document.getElementById('#box3');
var box4 = document.getElementById('#box4');
var box8 = document.getElementById('#box8');
var box12 = document.getElementById('#box12');
var box16 = document.getElementById('#box16');
var box15 = document.getElementById('#box15');
var box14 = document.getElementById('#box14');
var box13 = document.getElementById('#box13');
var box9 = document.getElementById('#box9');
var box5 = document.getElementById('#box5');

var board = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];
var arrdiv = [box1,box2,box3,box4,box8,box12,box16,box15,box14,box13,box9,box5];

const player1_Button = document.getElementById('player1');
const player2_Button = document.getElementById('player2');

player1_Button.addEventListener('click',rollDice_1);
player2_Button.addEventListener('click',rollDice_2);

var player1 = ["Prograd",0,1000];
var player2 = ["FACEPrep",0,1000];

function rollDice_1(){
    let position = Math.floor(Math.random()*6)+1;
    console.log('Player one rolls',position);
    changePosition_1(player1[1],position);
}

function rollDice_2(){
    let position = Math.floor(Math.random()*6)+1;
    console.log('Player two rolls',position);
    changePosition_2(player2[1],position);
}

var count1 = 0;

function changePosition_1(old,currentPos){
    count1++;
    var newPosition = old + currentPos;
    player1[1]=newPosition;
    newPosition = newPosition % 11;
    //changing the image position
    var img = document.getElementById('img1');
    img.style.visibility = 'hidden';
    if(count>1){
        var elem = document.getElementById('img11');
        elem.remove();
    }

    let template = '<img src="" id="img11" alt="red" style="width:36px"'
    arrdiv[newPosition].innerHTML += template;
    updateMoney_1(player1[1]);

}

function updateMoney_1(p1){
    var updateMoney=0;
    if(p1<board.length)
    updateMoney=player1[2]-board[p1-1];
    else{
        p1=p1%15;
        updateMoney=player1[2]-board[p1-1];
    }
    player1[2] = updateMoney;
    if(updateMoney > 0){
        document.querySelector('.item3').innerHTML = updateMoney;
    }
    else{
        document.querySelector('.item3').innerHTML = "player2 win";
    }
    
}


var count2 = 0;
function changePosition_2(old,currentPos){
    count2++;
    var newPosition = old + currentPos;
    player2[1]=newPosition;
    newPosition = newPosition % 11;
    //changing the image pos
    var img = document.getElementById('img2')
    img.style.visibility = 'hidden';
    if(count>1){
        var elem = document.getElementById('img12');
        elem.remove();
    }

    let template = '<img src="" id="img12" alt="red" style="width:36px"'
    arrdiv[newPosition].innerHTML += template;
    
    updateMoney_2(player2[1]);

}

function updateMoney_2(p1){
    var updateMoney=0;
    if(p1<board.length)
    updateMoney=player2[2]-board[p1-1];
    else{
        p1=p1%15;
        updateMoney=player2[2]-board[p1-1];
    }
    player2[2] = updateMoney;
    if(updateMoney > 0){
        document.querySelector('.item4').innerHTML = updateMoney;
    }
    else{
        document.querySelector('.item4').innerHTML = "player1 win";
    }
}