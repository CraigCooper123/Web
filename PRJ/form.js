// order.js
document.addEventListener('DOMContentLoaded', () => {
  const orderForm = document.getElementById('orderForm');
  const errorMessage = document.getElementById('error-message');

  orderForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form submission

      const fullName = document.getElementById('full-name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const departure = document.getElementById('departure').value.trim();
      const destination = document.getElementById('destination').value.trim();
      const departureDate = document.getElementById('departure-date').value;
      const returnDate = document.getElementById('return-date').value;
      const travelClass = document.getElementById('class').value;

      if (!fullName || !email || !phone || !departure || !destination || !departureDate || !travelClass) {
          errorMessage.textContent = 'Please fill in all required fields';
          errorMessage.style.display = 'block';
          return;
      }

      // Store data in local storage (for demonstration purposes)
      const orderDetails = {
          fullName,
          email,
          phone,
          departure,
          destination,
          departureDate,
          returnDate,
          travelClass
      };

      localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
      alert('Your ticket has been ordered successfully!');

      // Optionally, you can redirect to another page or clear the form
      orderForm.reset();
      errorMessage.style.display = 'none';
  });
});