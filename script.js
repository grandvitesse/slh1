document.getElementById("passwordForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  var password = document.getElementById("password").value;
 // Check if the password is correct
        if (password === "saleha1") {
            // Open a new page with the letter content
            var letterContent = document.getElementById("letter").innerHTML;
            var newWindow = window.open("", "_blank");
            newWindow.document.write("<!DOCTYPE html><html><head><title>Letter</title></head><body>" + letterContent + "</body></html>");
 // // Check if the password is correct
 // if (password === "saleha1") {
 //   document.getElementById("letter").style.display = "block"; // Show the letter
  } else {
    alert("Incorrect password. Please try again."); // Show an alert for incorrect password
  }
});
