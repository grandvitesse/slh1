document.getElementById("passwordForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  var password = document.getElementById("password").value;

  // Check if the password is correct
  if (password === "saleha1") {
    document.getElementById("letter").style.display = "block"; // Show the letter
  } else {
    alert("Incorrect password. Please try again."); // Show an alert for incorrect password
  }
});
