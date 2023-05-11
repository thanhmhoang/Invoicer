const signUpForm = document.querySelector("#signup-form");

const signup = async (e) => {
  e.preventDefault();
  // user signup
  if (true) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: document.querySelector("#signup-username-input").value,
        password: document.querySelector("#signup-password-input").value,
      }),
    });
    if (response.status === 200) {
      window.location.assign("/homepage")
    } else {
      alert("Please input a valid username and password.")
    }
  } 
};

signUpForm.addEventListener("submit", signup);