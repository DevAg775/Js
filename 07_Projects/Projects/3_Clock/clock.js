const clock = document.getElementById('clock')
// we can also use by query Selector
// console.log(time);



setInterval (function(){
  let myDate = new Date()
  // console.log(myDate.toLocaleTimeString());
  clock.innerHTML = myDate.toLocaleTimeString()
}, 1000);