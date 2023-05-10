const form = document.querySelector("#login-form");
const userType = document.querySelector("#user-type");

const login = async (e) => {
  // user login
  if (userType.checked) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: document.querySelector("#username-input").value,
        password: document.querySelector("#password-input").value,
      }),
    });
    if (response.status === 200) {
      window.location.assign("/login")
    } else {
      alert("Please input a valid username and password.")
    }
  } 
};

form.addEventListener("submit", login);

function homeFunction() {
    window.location.href="views\homepage.handlebars";
  }