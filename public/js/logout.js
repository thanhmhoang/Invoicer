const logoutBtn = document.querySelector("#logout-link")

logoutBtn.addEventListener("click", async () => {
  const response = await fetch("/api/users/logout", {
    method: "DELETE",
  })
  console.log(response)
})