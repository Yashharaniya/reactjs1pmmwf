let int=null;
let millisecond= 0;
let second=0;
let minute=0;
let houre=0;

function setTime(){
    millisecond+=10;
    if(millisecond==1000){
        millisecond=0;
        second++;
         
         if(second==60){
               second=0;
                 minute++;
         if(minute==60){
              minute=0;
              houre++;
            }
         }
        }
    let h = houre<10?"0"+houre:houre;
    let m = minute<10?"0"+minute:minute;
    let s = second<10?"0"+second:second;
    let ms = millisecond<10?"00"+millisecond:millisecond<100?"0"+millisecond:millisecond;
    timeinter.innerHTML=`${h} : ${m} : ${s} : ${ms}`
    
}
 
document.getElementById("startTimer").addEventListener('click', ()=>{
    if(int!=null){
        clearInterval(int);         
    }
    int=setInterval(setTime,10);
})
document.getElementById("pauseTimer").addEventListener('click',()=>{
    clearInterval(int);
})
document.getElementById("resetTimer").addEventListener('click',()=>{
   clearInterval(int);
     [houre, minute, second,millisecond]=[0,0,0,0];
    timeinter.innerHTML="00 : 00 : 00 : 00";
})

let timeinter= document.querySelector(".displaytime");

