const wholesalerForm = document.querySelector("#wholesaler-form");

const submit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/wholesalers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: document.querySelector("#wholesaler").value,
        email: document.querySelector("#email").value,
        phone: document.querySelector("#phone").value,
      }),
    });
    console.log(response);
  };
  
  wholesalerForm.addEventListener("submit", submit);