gsap.from(".header-content h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".header-content p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".header-content .btn", { opacity: 0, scale: 0.8, duration: 1, delay: 1 });

AOS.init({
  duration: 1000,
  once: true
});

const form = document.querySelector('.contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const confirmation = document.querySelector('#confirmation-message');

const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');

form.addEventListener('submit', (e) => {
  let formIsValid = true;

  nameError.style.display = 'none';
  emailError.style.display = 'none';
  messageError.style.display = 'none';

  if (!nameInput.value.trim()) {
    formIsValid = false;
    nameError.style.display = 'block';
  }

  if (!emailInput.value.trim() || !emailInput.checkValidity()) {
    formIsValid = false;
    emailError.style.display = 'block';
  }

  if (!messageInput.value.trim()) {
    formIsValid = false;
    messageError.style.display = 'block';
  }

  if (!formIsValid) {
    e.preventDefault();
  }
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetSection = document.querySelector(this.getAttribute('href'));

    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Prépare les données du formulaire
    const formData = new FormData(form);

    // Envoie la requête POST via fetch vers Formsubmit
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          confirmation.style.display = 'block'; // Affiche le message de confirmation
          form.reset(); // Réinitialise le formulaire
        } else {
          alert('Erreur lors de l’envoi. Veuillez réessayer.');
        }
      })
      .catch(error => {
        alert('Erreur réseau. Veuillez vérifier votre connexion.');
      });
  });


