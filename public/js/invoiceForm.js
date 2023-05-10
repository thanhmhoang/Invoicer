const invoiceForm = document.querySelector("#invoice-form");

const submit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/invoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        invoice_num: document.querySelector("#invoice_num-input").value,
        description: document.querySelector("#description-input").value,
        pay_amount: document.querySelector("#pay-input").value,
        pay_date: document.querySelector("#date-input").value,
        department: document.querySelector("#department-input").value,
      }),
    });
    console.log(response);
  };
  
  pigForm.addEventListener("submit", submit);