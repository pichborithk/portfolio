const sections = document.querySelectorAll('.section');
const sectionButtons = document.querySelectorAll('.control');
// const allSections = document.querySelector('.main-content');
const themeButton = document.querySelector('.theme-btn');

function toggleActiveButton() {
  //   sectionButtons.forEach((btn) => btn.classList.remove('active-btn'));
  document.querySelector('.active-btn').classList.remove('active-btn');
  this.classList.add('active-btn');
}

function toggleSection() {
  const id = this.dataset.id;
  sections.forEach(section => section.classList.remove('active'));
  document.querySelector(`#${id}`).classList.add('active');
}

sectionButtons.forEach(btn =>
  btn.addEventListener('click', toggleActiveButton)
);

sectionButtons.forEach(btn => btn.addEventListener('click', toggleSection));

themeButton.addEventListener('click', function () {
  document.body.classList.toggle('light-mode');
  themeButton.classList.toggle('dark');
});

/* ------------------------------- Send Email ------------------------------- */
const sendBtn = document.querySelector('#send-email');
const nameInput = document.querySelector('#contact-name');
const emailInput = document.querySelector('#contact-email');
const subjectInput = document.querySelector('#email-subject');
const contentInput = document.querySelector('#email-content');

sendBtn.addEventListener('click', event => {
  event.preventDefault();

  const params = {
    name: nameInput.value,
    email: emailInput.value,
    subject: subjectInput.value,
    body: contentInput.value,
  };
  emailjs.send('service_lq1lh4k', 'template_1aw8fgx', params).then(res => {
    console.log(res.status);
    alert('Success!');
    nameInput.value = '';
    emailInput.value = '';
    subjectInput.value = '';
    contentInput.value = '';
  });
});
