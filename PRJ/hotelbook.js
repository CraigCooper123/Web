// hotelBooking.js
document.addEventListener('DOMContentLoaded', () => {
    const hotelBookingForm = document.getElementById('hotelBookingForm');
    const errorMessage = document.getElementById('error-message');

    hotelBookingForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Retrieve form data
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const checkIn = document.getElementById('checkIn').value;
        const checkOut = document.getElementById('checkOut').value;
        const guests = document.getElementById('guests').value;
        const roomType = document.getElementById('roomType').value;

        // Basic validation
        if (!firstName || !lastName || !email || !phone || !checkIn || !checkOut || !guests || !roomType) {
            errorMessage.textContent = "All fields are required.";
            errorMessage.style.display = "block";
            return;
        }

        // Store booking data in localStorage (for demonstration purposes)
        const bookingData = {
            firstName,
            lastName,
            email,
            phone,
            checkIn,
            checkOut,
            guests,
            roomType
        };
        localStorage.setItem('hotelBooking', JSON.stringify(bookingData));

        // Redirect to a confirmation page or show a success message
        alert('Your booking has been successfully submitted.');
        hotelBookingForm.reset(); // Reset the form
    });
});
