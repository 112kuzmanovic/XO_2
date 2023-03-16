var osobaX = prompt("Unesi igraca X");
var osobaO = prompt("unesi igraca O");

var daLiJeIksNaRedu = true
let znak = "";
let container = document.querySelector('.container');
let linije = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
novaIgra();

function novaIgra(){
    if(daLiJeIksNaRedu==true){
        alert("Na redu je:" + osobaX)
        
    }if(daLiJeIksNaRedu==false){
        alert("Na redu je:" + osobaO);
    }
    


function mreza(){
    let text="";
    for(let i = 0; i<9; i++){
        text+='<div class="polje"></div>';
    }
    container.innerHTML=text;
    
}mreza();


let polja = document.querySelectorAll('.polje');
for(let i =0; i<polja.length;i++){
    const polje = polja[i];
    polje.addEventListener('click',dodajZnak);
}

function dodajZnak(e){
    this.removeEventListener('click',dodajZnak);
    if(daLiJeIksNaRedu==true){
        znak="X"
        daLiJeIksNaRedu=false;
        
    }else{
        znak="O";
        daLiJeIksNaRedu=true;
    }
    this.innerHTML=znak;
    provjeriLinije();
}

function provjeriLinije(){
    linije.forEach(function(linija){
        let polje1 = polja[linija[0]];
        let polje2 = polja[linija[1]];
        let polje3 = polja[linija[2]];
        
        if(polje1.innerHTML===polje2.innerHTML && polje1.innerHTML===polje3.innerHTML && polje1.innerHTML!=""){
            polje1.style.background="tomato";
            polje2.style.background="tomato";
            polje3.style.background="tomato";

            if(polje1.innerHTML=="X" || polje2.innerHTML=="X" || polje3.innerHTML=="X"){
                brojacX+=1;
                x.innerHTML="X:"+osobaX + ":" +brojacX
                
                
            }
            else if(polje1.innerHTML=="O" || polje2.innerHTML=="O" || polje3.innerHTML=="O"){
                brojacO+=1;
                y.innerHTML="O:"+osobaO + ":" +brojacO;
                


                
            }else {

            }
            if(brojacO>brojacX){
                y.style.background='green'
                x.style.background="transparent";
                
            }
            if(brojacX>brojacO){
                x.style.background="green";
                y.style.background="transparent";


            }
            if(brojacO==brojacX){
                y.style.background="transparent";
                x.style.background="transparent";

            }
           krajIgre();
           
        }
    })
}


function krajIgre(){
    for(let i =0;i<polja.length;i++){
        polja[i].removeEventListener('click',dodajZnak)
    }
}
}

var x=document.getElementById('igrac1');
var y=document.getElementById('igrac2');

var brojacX = 0;
var brojacO = 0;
x.innerHTML="X:"+osobaX + ":" +brojacX;
y.innerHTML="O:"+osobaO + ":" +brojacO;