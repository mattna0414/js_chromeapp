const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input"); //input찾기
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();//이벤트막기-새로고침 방지
  loginForm.classList.add(HIDDEN_CLASSNAME);//hidden classname추가 시 사라지게 하기
  const username = loginInput.value;
  greeting.innerText = `Hello ${username}`; //``을 사용하여 ${username} 가져오기
  greeting.classList.remove(HIDDEN_CLASSNAME); //class값 hidden 제거 후 html에 나타내기 
}


loginForm.addEventListener("submit", onLoginSubmit)
