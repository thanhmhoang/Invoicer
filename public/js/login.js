const form = document.querySelector("#login-form");

const login = async (e) => {
    e.preventDefault();
  // user login
  if (true) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: document.querySelector("#username-input").value,
        password: document.querySelector("#password-input").value,
      }),
    });
    console.log(response)
    if (response.status === 200) {
      window.location.assign("/homepage")
    } else {
      alert("Please input a valid username and password.")
    }
  } 
};

form.addEventListener("submit", login);

function homeFunction() {
    window.location.href="views\homepage.handlebars";
  }