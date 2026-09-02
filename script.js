document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    mobileNav.setAttribute('aria-hidden', String(!open));
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
  }));
}

const form = document.getElementById('quoteForm');
const success = document.getElementById('formSuccess');
if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const submit = form.querySelector('button[type="submit"]');
    const formData = new FormData(form);
    if (formData.get('bot-field')) return;
    submit.disabled = true;
    submit.setAttribute('aria-busy', 'true');
    submit.textContent = 'Sending…';
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      form.reset();
      success.classList.add('show');
      success.textContent = 'Thanks! Your quote request has been sent. We’ll follow up using the contact details you provided.';
    } catch (error) {
      success.classList.add('show');
      success.textContent = 'We could not send the form. Please call 289-783-8146 or email acmegd.11@gmail.com.';
    } finally {
      submit.disabled = false;
      submit.removeAttribute('aria-busy');
      submit.innerHTML = 'Prepare My Quote Request <span>→</span>';
    }
  });
}
