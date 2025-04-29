document
  .getElementById("Form_submit")
  .addEventListener("submit", function (event) {
    // Prevent form submission
    event.preventDefault();

    let errors = false;

    // First Name Validation
    let firstName = document.querySelector(".First_name");
    let firstNameError = document.getElementById("First_name_Error");
    if (firstName.value.trim() === "") {
      firstNameError.innerText = "First Name is required.";
      errors = true;
    } else {
      firstNameError.innerText = "";
    }

    // Last Name Validation
    let lastName = document.querySelector(".Last_name");
    let lastNameError = document.getElementById("Last_name_Error");
    if (lastName.value.trim() === "") {
      lastNameError.innerText = "Last Name is required.";
      errors = true;
    } else {
      lastNameError.innerText = "";
    }

    // Email Validation
    let emailField = document.querySelector(".eemail");
    let emailError = document.getElementById("Email_error");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailField.value.trim() === "") {
      emailError.innerText = "Email is required.";
      errors = true;
    } else if (!emailPattern.test(emailField.value.trim())) {
      emailError.innerText = "Please enter a valid email.";
      errors = true;
    } else {
      emailError.innerText = "";
    }

    // Query Type Validation (Radio buttons)
    let queryTypeSelected = document.querySelector(
      'input[name="option"]:checked'
    );
    let queryTypeError = document.getElementById("Query_Type_error");
    if (!queryTypeSelected) {
      queryTypeError.innerText = "Please select a query type.";
      errors = true;
    } else {
      queryTypeError.innerText = "";
    }

    // Message Validation
    let messageField = document.querySelector(".Message_text");
    let messageError = document.getElementById("Message_Error");
    if (messageField.value.trim() === "") {
      messageError.innerText = "Message is required.";
      errors = true;
    } else {
      messageError.innerText = "";
    }

    // Consent Checkbox Validation
    let consentChecked = document.querySelector("#consent:checked");
    let consentError = document.getElementById("right_Error");
    if (!consentChecked) {
      consentError.innerText = "You must consent to be contacted.";
      errors = true;
    } else {
      consentError.innerText = "";
    }

    // If there are any errors, prevent form submission
    if (!errors) {
      alert("Form submitted successfully!");
      document.getElementById("Form_submit").reset(); // ← Add this line
    } else {
      console.log("Form has errors, not submitting.");
    }
  });
