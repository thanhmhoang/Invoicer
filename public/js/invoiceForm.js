const invoiceForm = document.querySelector("#invoice-form");

// console.log("hi")

// // query departments
// // update html (append to page) new dropdown menu in the forn for department selection

// // Define the Item model
// const invoice = sequelize.define('invoiceId', {
//   name: Sequelize.STRING
// });

// // Define a route that queries the database and renders the dropdown menu
// app.get('/departmentname', async (req, res) => {
//   try {
//     // Query the database to retrieve all items
//     const departmentList = await invoice.findAll();

//     // Render the template and pass the items as data
//     res.render('index', { departmentList });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Define the Item model
// const wholersaler = sequelize.define('wholesalerId', {
//   name: Sequelize.STRING
// });

// // Define a route that queries the database and renders the dropdown menu
// app.get('/wholesalername', async (req, res) => {
//   try {
//     // Query the database to retrieve all items
//     const wholersalerList = await wholersaler.findAll();

//     // Render the template and pass the items as data
//     res.render('index', { wholersalerList });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

const submit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/invoices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        invoice_num: document.querySelector("#invoice_id").value,
        wholesaler_id: document.querySelector("#wholesaler").value,
        description: document.querySelector("#description").value,
        pay_amount: document.querySelector("#amount").value,
        pay_date: document.querySelector("#payby").value,
        department_id: document.querySelector("#department").value,
      }),
    });
    console.log(response);
  };
  
  invoiceForm.addEventListener("submit", submit);

