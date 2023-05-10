const wholesalerForm = document.querySelector("#wholesaler-form");

const submit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/wholesaler", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: document.querySelector("#name-input").value,
        email: document.querySelector("#email-input").value,
        phone: document.querySelector("#phone-input").value,
      }),
    });
    console.log(response);
  };
  
  wholesalerForm.addEventListener("submit", submit);