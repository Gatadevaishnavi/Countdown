let daysitem=document.querySelector("#days");
let hoursitem=document.querySelector("#hours");
let minsitem=document.querySelector("#min");
let secsitem=document.querySelector("#sec");


let countDown=()=>{
    let futureDate=new Date("20 mar 2024")
    let currentDate=new Date();
    let mydate =futureDate-currentDate;


    let days=Math.floor(mydate/1000/60/60/24);
    let hours=Math.floor(mydate/1000/60/60) % 24;
    let min=Math.floor(mydate/1000/60) % 60;
    let sec=Math.floor(mydate/1000) %60 ;



    daysitem.innerHTML=days;
    hoursitem.innerHTML=hours;
    minsitem.innerHTML=min;
    secsitem.innerHTML=sec;
   
}
countDown()
setInterval(countDown,1000)