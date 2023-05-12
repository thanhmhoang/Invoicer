// const signUpForm = document.querySelector("#signup-form");

// const signup = async (e) => {
//   e.preventDefault();
//   // user signup
//   if (true) {
//     const response = await fetch("/api/users/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         username: document.querySelector("#signup-username-input").value,
//         password: document.querySelector("#signup-password-input").value,
//       }),
//     });
//     if (response.status === 200) {
//       window.location.assign("/homepage")
//     } else {
//       alert("Please input a valid username and password.")
//     }
//   } 
// };

// signUpForm.addEventListener("submit", signup);
const signUpForm = document.querySelector("#signup-form");

const signup = async (e) => {
  e.preventDefault();

  const username = document.querySelector("#signup-username-input").value;
  const password = document.querySelector("#signup-password-input").value;

  // Perform input validation
  if (username.trim() === "" || password.trim() === "") {
    alert("Please input a valid username and password.");
    return;
  }

  try {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.status === 200) {
      window.location.assign("/homepage");
    } else {
      alert("Sign up failed. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred during sign up. Please try again later.");
  }
};

signUpForm.addEventListener("submit", signup);