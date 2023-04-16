let left_btn=document.getElementsByClassName('bi-chevron-left')[0];
let right_btn=document.getElementsByClassName('bi-chevron-right')[0];
let cards=document.getElementsByClassName('cards')[0];
left_btn.addEventListener("click",()=>{
    cards.scrollLeft -=140;
})
right_btn.addEventListener("click",()=>{
    cards.scrollLeft +=140;
})
function f2(){
    window.location.href="index (2).html"
}
let p=document.getElementById("search_input");
let m=document.getElementById("cardi");
let prison=document.getElementById("break");
let home=document.getElementById("home");
let hayba=document.getElementById("hayba");
let bad=document.getElementById("bad");
let game=document.getElementById("game");
let jhon=document.getElementById("jhon");
let attack=document.getElementById("attack");
let batman=document.getElementById("batman");
let luffy=document.getElementById("luffy");
let moon=document.getElementById("moon");
let father=document.getElementById("father");
function f1(){
    if(p.value=="harry potter" ){
        m.style.display='inline-block';
        }
      else  if(p.value=="prison break" ){
            prison.style.display='inline-block';
            }
            else  if(p.value=="the godfather"){
                father.style.display='inline-block';
                 }
            else  if(p.value=="moon knight" ){
                moon.style.display='inline-block';
                }
            else  if(p.value=="one piece"){
                luffy.style.display='inline-block';
                }
            else  if(p.value=="the dark knight"){
                batman.style.display='inline-block';
                }
            else  if(p.value=="home alone" ){
                home.style.display='inline-block';
                }
                else  if(p.value=="al hayba" ){
                    hayba.style.display='inline-block';
                    }
                else  if(p.value=="breaking bad"){
                   bad.style.display='inline-block';
                    }
                    else  if(p.value=="game of thrones" ){
                        game.style.display='inline-block';
                         }
                         else  if(p.value=="jhon wick" ){
                            jhon.style.display='inline-block';
                             }
                             else  if(p.value=="attack on titan" ){
                               attack.style.display='inline-block';
                                 }
}


function f3(){

    if(p.value=="Harry potter" ){
        m.style.display='inline-block';
        }
      else  if(p.value=="Prison break" ){
            prison.style.display='inline-block';
            }
            else  if(p.value=="The godfather"){
                father.style.display='inline-block';
                 }
            else  if(p.value=="Moon knight" ){
                moon.style.display='inline-block';
                }
            else  if(p.value=="One piece"){
                luffy.style.display='inline-block';
                }
            else  if(p.value=="The dark knight"){
                batman.style.display='inline-block';
                }
            else  if(p.value=="Home alone" ){
                home.style.display='inline-block';
                }
                else  if(p.value=="Al hayba" ){
                    hayba.style.display='inline-block';
                    }
                else  if(p.value=="Breaking bad"){
                   bad.style.display='inline-block';
                    }
                    else  if(p.value=="Game of thrones" ){
                        game.style.display='inline-block';
                         }
                         else  if(p.value=="Jhon wick" ){
                            jhon.style.display='inline-block';
                             }
                             else  if(p.value=="Attack on titan" ){
                               attack.style.display='inline-block';
                                 }
}