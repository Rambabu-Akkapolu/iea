const scriptURL ="https://script.google.com/macros/s/AKfycbykKrMEAQy7WwOYMsypQwgkrpvzcI9mQbn6NxpVGTsbS_x5OAHNyzE6_PePGNYWv_QF/exec";
const form = document.forms["contact-form"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Check if all fields are valid
  if (form.checkValidity()) {
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) =>
        alert("Thank you! Your form is submitted successfully.")
      )
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.error("Error!", error.message));
  } else {
    alert("Please fill out all fields correctly before submitting.");
  }
});
