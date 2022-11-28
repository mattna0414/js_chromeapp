const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
//padStart(최소 몇자리 수인지, "앞에 어떠한 숫자를 넣을 것인지")
  clock.innerText = (`${hours}:${minutes}:${seconds}`)
}

getClock(); //1초기다리지 않고 바로 실행되게 즉시 호출해줌
setInterval(getClock, 1000); // 매 초마다 실행되게 호출해줌(ms단위)

