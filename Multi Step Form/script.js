let form1 = document.querySelector("#form1");
let form2 = document.querySelector("#form2");
let form3 = document.querySelector("#form3");

let next1 = document.querySelector("#next1");
let next2 = document.querySelector("#next2");

let back1 = document.querySelector("#back1");
let back2 = document.querySelector("#back2");

let send = document.querySelector("#send");

let firstForm = document.querySelectorAll(".firstForm");
let secondForm = document.querySelectorAll(".secondForm");
let thirdForm = document.querySelectorAll(".thirdForm");

const progress = document.querySelector("#progress");

const password = document.querySelector("#password");
const passwordAgain = document.querySelector("#passwordAgain");

const popup = document.querySelector(".pop-container");
const loginPopup = document.querySelector(".isLoginSuccesful");

const closePopup = document.querySelector(".close-btn");
const closeLogin = document.querySelector(".closeLogin");

const passwordIcon = document.querySelector("#showIcon1");

const passwordIcon2 = document.querySelector("#showIcon");

next1.addEventListener("click", () => {
  let isFull = true;

  firstForm.forEach(function (item) {
    if (item.value.trim() === "") {
      isFull = false;
      return isFull;
    }
  });

  if (isFull) {
    if (password.value === passwordAgain.value) {
      form1.style.left = "-450px";
      form2.style.left = "40px";
      progress.style.width = "240px";
    } else {
      popup.style.display = "block";
      closePopup.addEventListener("click", () => {
        popup.style.display = "none";
      });
    }
  } else {
    alert("lütfen tüm alanları doldurun!");
  }
});

passwordIcon.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    passwordIcon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    password.type = "password";
    passwordIcon.classList.replace("fa-eye", "fa-eye-slash");
  }
});

passwordIcon2.addEventListener("click", () => {
  if (passwordAgain.type === "password") {
    passwordAgain.type = "text";
    passwordIcon2.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    passwordAgain.type = "password";
    passwordIcon2.classList.replace("fa-eye", "fa-eye-slash");
  }
});

back1.addEventListener("click", () => {
  form1.style.left = "40px";
  form2.style.left = "450px";
  progress.style.width = "120px";
});

next2.addEventListener("click", () => {
  let isFull2 = true;
  secondForm.forEach(function (item) {
    if (item.value.trim() === "") {
      isFull2 = false;
      return isFull2;
    }
  });

  if (isFull2) {
    form2.style.left = "-450px";
    form3.style.left = "40px";
    progress.style.width = "360px";
  } else {
    alert("lütfen tüm alanları doldurun");
  }
});

back2.addEventListener("click", () => {
  form2.style.left = "40px";
  form3.style.left = "450px";
  progress.style.width = "240px";
});

send.addEventListener("click", () => {
  let isFull3 = true;
  thirdForm.forEach(function (item) {
    if (item.value.trim() === "") {
      isFull3 = false;
      return isFull3;
    }
  });

  if (isFull3) {
    // alert("kayıt başarılı");
    loginPopup.style.display = "block";
    closeLogin.addEventListener("click", () => {
      loginPopup.style.display = "none";
    });
  } else {
    alert("lütfen tüm alanları doldrun");
  }
});
