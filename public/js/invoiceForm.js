const invoiceForm = document.querySelector("#invoice-form");

const submit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/invoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        invoice_num: document.querySelector("#invoice_id").value,
        wholesaler: document.querySelector("#wholesaler").value,
        description: document.querySelector("#description").value,
        pay_amount: document.querySelector("#amount").value,
        pay_date: document.querySelector("#payby").value,
        department: document.querySelector("#department").value,
      }),
    });
    console.log(response);
  };
  
  invoiceForm.addEventListener("submit", submit);

