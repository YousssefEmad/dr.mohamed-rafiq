$(function () {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const telephone = document.getElementById('telephone');
      const subject = document.getElementById('subject');
      const message = document.getElementById('message');

      const successMessage = document.getElementById('success-message');
      const errorMessage = document.getElementById('error-message');

      let isValid = true;

      function validateField(input, errorText) {
          if (!input.value.trim()) {
              input.classList.add('error-border');
              errorText.classList.remove('hidden');
              isValid = false;
          } else {
              input.classList.remove('error-border');
              errorText.classList.add('hidden');
          }
      }

      validateField(name, document.querySelector('#name + .error-text'));
      validateField(email, document.querySelector('#email + .error-text'));
      validateField(telephone, document.querySelector('#telephone + .error-text'));
      validateField(subject, document.querySelector('#subject + .error-text'));
      validateField(message, document.querySelector('#message + .error-text'));

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email.value.trim() && !emailPattern.test(email.value.trim())) {
          email.classList.add('error-border');
          document.querySelector('#email + .error-text').classList.remove('hidden');
          isValid = false;
      } else if (email.value.trim()) {
          email.classList.remove('error-border');
          document.querySelector('#email + .error-text').classList.add('hidden');
      }

      if (isValid) {
          successMessage.classList.remove('hidden');
          errorMessage.classList.add('hidden');

          document.getElementById('contactForm').reset();

          setTimeout(() => {
              successMessage.classList.add('hidden');
          }, 3000);
      } else {
          errorMessage.classList.remove('hidden');
          successMessage.classList.add('hidden');

          setTimeout(() => {
              errorMessage.classList.add('hidden');
          }, 3000);
      }
  });
});

$(function () {
    document.getElementById('newsletterForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('newsletter-email');
        const successMessage = document.getElementById('newsletter-success');
        const errorText = document.querySelector('#newsletter-email + .error-text');
      
        let isValid = true;
      
        function validateEmail(email) {
          const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return pattern.test(email);
        }

        if (!email.value.trim()) {
          email.classList.add('error-border');
          errorText.textContent = 'Email is required';
          errorText.classList.remove('hidden');
          isValid = false;
        } else if (!validateEmail(email.value)) {
          email.classList.add('error-border');
          errorText.textContent = 'Invalid email format';
          errorText.classList.remove('hidden');
          isValid = false;
        } else {
          email.classList.remove('error-border');
          errorText.classList.add('hidden');
        }
      
        if (isValid) {
          successMessage.classList.remove('hidden');
          document.getElementById('newsletterForm').reset();
          setTimeout(() => {
            successMessage.classList.add('hidden');
          }, 3000);
        }
    });
});