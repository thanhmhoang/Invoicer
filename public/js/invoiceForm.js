const invoiceForm = document.querySelector("#invoice-form");

const submit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/invoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        invoice_num: document.querySelector("#invoice_id-input").value,
        description: document.querySelector("#description-input").value,
        pay_amount: document.querySelector("#amount-input").value,
        pay_date: document.querySelector("#payby-input").value,
        department: document.querySelector("#department-input").value,
      }),
    });
    console.log(response);
  };
  
  pigForm.addEventListener("submit", submit);