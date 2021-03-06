const sideMenu = document.querySelector('.nav-response');

function openMenu() {
  sideMenu.style.visibility = 'visible';
}

function closeMenu() {
  sideMenu.style.visibility = 'hidden';
}

openMenu();
closeMenu();

const data = [
  {
    id: 1,
    title: 'Multi Post Stories',
    skills: ['html', 'Bootstrap', 'Ruby'],
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    livelink: 'https://gunjuzone.github.io/My-Portfolio/',
    sourcelink: 'https://github.com/Gunjuzone/My-Portfolio',
  },
  {
    id: 2,
    title: 'Multi Post Stories',
    skills: ['html', 'Bootstrap', 'Ruby'],
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    livelink: 'https://gunjuzone.github.io/My-Portfolio/',
    sourcelink: 'https://github.com/Gunjuzone/My-Portfolio',
  },
  {
    id: 3,
    title: 'Multi Post Stories',
    skills: ['html', 'Bootstrap', 'Ruby'],
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    livelink: 'https://gunjuzone.github.io/My-Portfolio/',
    sourcelink: 'https://github.com/Gunjuzone/My-Portfolio',
  },
  {
    id: 4,
    title: 'Multi Post Stories',
    skills: ['html', 'Bootstrap', 'Ruby'],
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    livelink: 'https://gunjuzone.github.io/My-Portfolio/',
    sourcelink: 'https://github.com/Gunjuzone/My-Portfolio',
  },
  {
    id: 5,
    title: 'Multi Post Stories',
    skills: ['html', 'Bootstrap', 'Ruby'],
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    livelink: 'https://gunjuzone.github.io/My-Portfolio/',
    sourcelink: 'https://github.com/Gunjuzone/My-Portfolio',
  },
  {
    id: 6,
    title: 'Multi Post Stories',
    skills: ['html', 'Bootstrap', 'Ruby'],
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    livelink: 'https://gunjuzone.github.io/My-Portfolio/',
    sourcelink: 'https://github.com/Gunjuzone/My-Portfolio',
  },
];

const modal = document.querySelector('.modal');
const dataValue = document.createElement('div');
const modalBtns = document.querySelectorAll('.modal-btn');

function closeModal() {
  modal.removeChild(dataValue);
}

function openModal(e) {
  const num = (e.target.getAttribute('data-id').slice(2)) - 1;
  const {
    title, skills, livelink, sourcelink, info,
  } = data[num];

  dataValue.classList.add('pop-up');

  dataValue.innerHTML = `
  <h3 class="pop-up-heading">${title}</h3>
  <i class="fa fa-times-circle pop-up-close"></i>
  <ul class="pop-up-skills">
    <li class="pop-up-skls">${skills[0]}</li>
    <li class="pop-up-skls">${skills[1]}</li>
    <li class="pop-up-skls">${skills[2]}</li>
  </ul>
  <div class="pop-up-container">
  <img src="Assets/Snapshoot Portfolio.png" class="pop-up-background" alt="Pop-up Image">
  <div class="pop-up-right">
  <p class="pop-up-text">${info}</p>
    <div class="pop-up-button">
      <a href=${livelink} class="pop-up-btn">Livelink<i class="fa fa-arrow-circle-down"></i></a>
      <a href=${sourcelink} class="pop-up-btn">Sourcelink<i class="fa fa-github"></i></a>
      </div>
      </div>
      </div>`;
  modal.appendChild(dataValue);

  const popClose = document.querySelector('.pop-up-close');
  popClose.addEventListener('click', closeModal);
}
modalBtns.forEach((modalBtn) => {
  modalBtn.addEventListener('click', openModal);
});

const regularExpression = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*(\+[a-z0-9-]+)?@[a-z0-9-]+(\.[a-z0-9-]+)*$/;
const emailField = document.querySelector('#mail');
const getInTouch = document.querySelector('.button-submit');

getInTouch.addEventListener('click', () => {
  const validatedMail = emailField.value;
  if (!regularExpression.test(validatedMail)) {
    getInTouch.setCustomValidity('Email should be in lowercase. Please input the email in lowercase!');
  } else {
    getInTouch.setCustomValidity('');
  }
});

const form = document.getElementById('form');
const userName = document.getElementById('name');
const mail = document.getElementById('email');
const msg = document.getElementById('message');
function updateValue() {
  const formObject = {
    name: userName.value,
    mail: mail.value,
    msg: msg.value,
  };
  localStorage.setItem('formObject', JSON.stringify(formObject));
}
form.addEventListener('input', updateValue);
const thisObject = JSON.parse(localStorage.getItem('formObject'));
if (localStorage.getItem('theObject.name') !== '') {
  userName.value = thisObject.name;
}
if (localStorage.getItem('theObject.email') !== '') {
  mail.value = thisObject.mail;
}
if (localStorage.getItem('theObject.message') !== '') {
  msg.value = thisObject.msg;
}
