const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("Seconds");
const ampmE1 = document.getElementById("ampm");

function updateClock(){
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let ampm = "AM"

  if(h > 12){
    h = h- 12
    ampm = "PM"
  }
  hourEl.innerText = h;
  minuteEl.innerText = m
  secondEl.innerText = s
  ampmE1, (innerText = ampm);
  setTimeout(()=>{
    updateClock()
  },1000)
}
updateClock();