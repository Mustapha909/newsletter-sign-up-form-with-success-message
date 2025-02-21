const mainContainer = document.querySelector('.main-container');
const email = document.getElementById('email');
const submitButton = document.getElementById('submit-button');
const errorMessage = document.getElementById('error-message');
const mainSuccess = document.querySelector('.main-success');
const successBtn = document.getElementById('success-btn');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Ensure error message is hidden initially
errorMessage.classList.add('hidden');

submitButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent form submission

  const emailValue = email.value.trim();

  if (emailValue.match(emailPattern)) {
    // Hide error message if visible
    errorMessage.classList.add('hidden');

    // Show success message and hide the form
    mainContainer.style.display = 'none';
    mainSuccess.style.display = 'block';

    // Optionally clear the email input after success
    email.value = '';
  } else {
    // Show error message explicitly
    errorMessage.classList.remove('hidden');
  }
  email.value = '';
});

successBtn.addEventListener('click', () => {
  // Hide success message and show the form again
  mainSuccess.style.display = 'none';
  mainContainer.style.display = 'block';
});
