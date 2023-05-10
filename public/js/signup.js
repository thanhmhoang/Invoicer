const form = document.querySelector("#signup-form");

const signup = async (e) => {
  // user signup
  if (userType.checked) {
    const response = await fetch("/api/users", {
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

signUpForm.addEventListener("submit", signup);