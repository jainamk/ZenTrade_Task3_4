window.addEventListener("load", () => {
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", loginFormSubmit);

  function loginFormSubmit(event) {
    event.preventDefault();

    let loginFlag = true;

    const username = loginForm.username;
    const password = loginForm.password;

    const emailRegex = /^[a-zA-Z0-9+.]+@[a-zA-Z0-9.]+$/;
    if (!emailRegex.test(username.value)) {
      username.value = "";
      password.value="";
      alert("Please Enter Valid Username");
      loginFlag = false;
    }

    else{const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;
    if (!passwordRegex.test(password.value)) {
      password.value = "";
      alert("Please Enter Valid Password");
      loginFlag = false;
    } else {

      const givenPassword = "SmartServTest@123";
      if (givenPassword !== password.value) {
        password.value = "";
        alert("Please Enter Valid Password");
        loginFlag = false;
      }
    }}

    if (loginFlag) {
      loginForm.submit();
    }
  }
});
