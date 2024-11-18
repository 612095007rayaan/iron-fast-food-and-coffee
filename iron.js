// ord submission
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your order!");
});

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contact-form');
    const contactMessage = document.getElementById('contact-message');
  
    // Handle frm submission
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      //  thank you message 
      contactMessage.textContent = `Mahadsanid ${name}! Farriintaada ayaa la helay, waxaana ku soo jawaabi doonaa sida ugu dhaqsiyaha badan.`;
      
      contactForm.reset(); 
    });
  });