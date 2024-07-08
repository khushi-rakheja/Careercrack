document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm')?.addEventListener('submit', function(event) {
       
      
      event.preventDefault();
      const username = this.username.value.trim();
      const password = this.password.value.trim();
      if (username === 'admin' && password === 'password') {
        showMessage('loginMessage', 'success', 'Login successful!');
        window.location.replace("todo.html");
      } else {
        showMessage('loginMessage', 'error', 'Invalid username or password');
      }
    });
  
    document.getElementById('signupForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const password = this.password.value.trim();
      const confirmPassword = this.confirmPassword.value.trim();
      if (password.length < 6) {
        showMessage('signupMessage', 'error', 'Password should be at least 6 characters long');
      } else if (!isStrongPassword(password)) {
        showMessage('signupMessage', 'error', 'Password should be strong (include at least one uppercase letter, one lowercase letter, one number, and one special character)');
      } else if (password !== confirmPassword) {
        showMessage('signupMessage', 'error', 'Passwords do not match');
      } else {
        showMessage('signupMessage', 'success', 'Signup successful!');
      }
    });
  
    function showMessage(id, type, message) {
        const messageDiv = document.getElementById(id);
        messageDiv.textContent = message;
        messageDiv.classList.remove('success', 'error');
        messageDiv.classList.add(type);
      }
      
  
    function isStrongPassword(password) {
      const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
      return strongRegex.test(password);
    }
  });