var isstatus = document.querySelector("h5")

var add = document.querySelector("#add")

var flag = 0

add.addEventListener("click",function(e){
    if(flag == 0){
    add.innerHTML = "Remove Friend"
    isstatus.innerHTML ="Friends"
    isstatus.style.color = "green"
        flag =1;
    }
    else{
        add.innerHTML = "Add Friend"
        isstatus.innerHTML ="Stranger"
        isstatus.style.color = "Red" 
        flag = 0;
    }
})
