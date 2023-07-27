document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const emailInput = document.getElementById("footer-email");
    const emailValue = emailInput.value.trim();
  
    if (validateEmail(emailValue)) {
      // Send the form data to boltadsmedia@gmail.com
      alert("Thank you for subscribing to our newsletter!");
      emailInput.value = "";
    } else {
      alert("Please enter a valid email address.");
    }
  });
  
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function showNotification(message) {
    const notification = document.getElementById("notification");
    const notificationMessage = document.getElementById("notification-message");
    notificationMessage.textContent = message;
    notification.classList.add("show");
  
    // Hide the notification after 3 seconds (adjust the time as needed)
    setTimeout(() => {
      hideNotification();
    }, 3000);
  }
  
  // Hide the custom notification box
  function hideNotification() {
    const notification = document.getElementById("notification");
    notification.classList.remove("show");
  }
  
  // Close button functionality for the notification
  document.getElementById("close-btn").addEventListener("click", function() {
    hideNotification();
  });

  