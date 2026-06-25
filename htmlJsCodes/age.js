function checkEligibility() {
  const age = Number(document.getElementById("age").value);
  const country = document.getElementById("country").value;
  const result = document.getElementById("result");
  const drivingAges = {
    India: 18,
    USA: 16,
    UK: 17,
  };

  if (age >= drivingAges[country]) {
    result.textContent = "You can drive!";
  } else {
    result.textContent = "You cannot drive!";
  }
}

const ageInput = document.getElementById("ageInput");
const message = document.getElementById("message");
ageInput.addEventListener("input", function () {
  const age = Number(ageInput.value);

  if (age < 18) {
    ageInput.classList.add("invalid");
    ageInput.classList.remove("valid");

    message.textContent = "Not eligible for driving";
  } else {
    ageInput.classList.add("valid");
    ageInput.classList.remove("invalid");

    message.textContent = "Eligible for driving";
  }
});
