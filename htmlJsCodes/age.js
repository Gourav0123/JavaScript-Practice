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
