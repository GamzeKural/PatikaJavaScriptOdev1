let myname=prompt("Lütfen isminizi giriniz.");
let textInfo=myname;
myname=document.querySelector("#myName");
myname.innerHTML=`${textInfo}`;

function showtime(){
let mydate=new Date();
let tarih=mydate.toLocaleDateString()+" "+mydate.toLocaleTimeString();
mydate=document.querySelector("#myClock");
mydate.innerHTML=`${tarih}`;
setTimeout(showtime,1000);

}
showtime();

