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
