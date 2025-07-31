var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");
let flag = 0;
btn.addEventListener("click",function(e){
console.log("clicked");
if(flag == 0){
bulb.style.backgroundColor = "yellow";
flag =1;
btn.innerHTML ="OFF"
}
else{
    bulb.style.backgroundColor = "white";
flag =0;
btn.innerHTML ="ON"
}
});