const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input"); //input찾기
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";//중요하지않은 함수는 대문자로 지정하기
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
  event.preventDefault();//ㅣsubmit이벤트막기-새로고침 방지
  loginForm.classList.add(HIDDEN_CLASSNAME);//hidden classname추가 시 사라지게 하기
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);//localstorage 사용하여 username 기억하기
  paintGreetings(username)
}


function paintGreetings(username){
  greeting.innerText = `Hello ${username}`; //``을 사용하여 ${username} 가져오기
  greeting.classList.remove(HIDDEN_CLASSNAME); //class값 hidden 제거 후 html에 나타내기 
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit)
//show the form
}else {
paintGreetings(savedUsername);
//show the greetings
}
