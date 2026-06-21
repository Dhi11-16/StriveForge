// LOGIN
function login(){
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if(u && p){
    window.location.href = "dashboard.html";
  } else {
    alert("Fill all fields");
  }
}

// LOGOUT
function logout(){
  window.location.href = "login.html";
}

// HABITS
let gym=0, code=0, read=0;

function add(type){
  if(type==="gym"){
    gym++;
    document.getElementById("gym").innerText=gym;
  }
  if(type==="code"){
    code++;
    document.getElementById("code").innerText=code;
  }
  if(type==="read"){
    read++;
    document.getElementById("read").innerText=read;
  }
}