const loginForm = document.querySelector("#login-form");

const login = async (e) => {
    e.preventDefault();
  // user login
  if (true) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: document.querySelector("#login-username-input").value,
        password: document.querySelector("#login-password-input").value,
      }),
    });
    console.log(response)
    if (response.status === 200) {
      console.log("login redirect");
      window.location.assign("/homepage")
    } else {
      alert("Please input a valid username and password.")
    }
  } 
};

loginForm.addEventListener("submit", login);
