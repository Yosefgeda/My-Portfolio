const menuButton = document.querySelector('#btn-menu');
const closeModalIcon = document.querySelector('#modal-close-icon img');
const mobileMenuModal = document.querySelector('#mobile-menu-modal');
const menuLinks = document.querySelectorAll('#menu-link li');
const toggleMenuDisplay = () => {
  mobileMenuModal.classList.toggle('toogleModalDisplay');
};

menuButton.addEventListener('click', toggleMenuDisplay);

closeModalIcon.addEventListener('click', toggleMenuDisplay);

menuLinks.forEach((link) => {
  link.addEventListener('click', toggleMenuDisplay);
});

const projectData = {
  titleOne: 'Multi-Post Stories',
  description:
    "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  technologies: ['css', 'html', 'bootstrap', 'Ruby'],
  button: 'See Project',
  profHeader1: 'Profesional Art <br> Printing Data',
  proHead1: 'Profesional Art <br> Printing Data More',
  proHead2: 'Data Dashboard <br> Healthcare',
  proHead3: 'Website Protfolio',
  img: 'icons/images/Img Placeholder1.png',
};

const containerBig = document.querySelector('.work');
const workContainer = document.createElement('div');
workContainer.className = 'work-container';
containerBig.appendChild(workContainer);
const multiHeaderContainer = document.createElement('div');
multiHeaderContainer.className = 'multi-post';
workContainer.appendChild(multiHeaderContainer);
const multiHeadImg = document.createElement('img');
multiHeadImg.src = projectData.img;
multiHeadImg.className = 'multi-img';
multiHeaderContainer.appendChild(multiHeadImg);
const innerMultiPost = document.createElement('div');
innerMultiPost.className = 'inner-multi-post';
multiHeaderContainer.appendChild(innerMultiPost);
const multiHeadTitle = document.createElement('h2');
multiHeadTitle.className = 'multi-head-two';
innerMultiPost.appendChild(multiHeadTitle);
multiHeadTitle.textContent = projectData.titleOne;

const multiHeadPara = document.createElement('p');
innerMultiPost.appendChild(multiHeadPara);
multiHeadPara.textContent = projectData.description;

const multiHeadTechs = document.createElement('ul');
innerMultiPost.appendChild(multiHeadTechs);
for (let i = 0; i < projectData.technologies.length; i += 1) {
  const multiHeadList = document.createElement('li');
  multiHeadList.innerText = projectData.technologies[i];
  multiHeadTechs.appendChild(multiHeadList);
}

const multiBtn = document.createElement('button');
multiBtn.className = 'multi-btn';
innerMultiPost.appendChild(multiBtn);
multiBtn.innerText = projectData.button;

/** ........PopUp........ */

const popContainer = document.createElement('section');
popContainer.className = 'pop-container';
const bodyMain = document.querySelector('body');
bodyMain.appendChild(popContainer);

/*....function....*/

function portfolio(str, hedOne, hedTwo) {
  const professionalArt = document.createElement('div');
  professionalArt.classList.add('professional-art', str);
  workContainer.appendChild(professionalArt);

  const profHeader = document.createElement('h2');
  profHeader.className = 'prof-header';
  profHeader.innerHTML = hedOne;
  const proHead = document.createElement('h2');
  proHead.className = 'pro-head';
  proHead.innerHTML = hedTwo;
  professionalArt.appendChild(profHeader);
  professionalArt.appendChild(proHead);

  const multiParagraphCard = document.createElement('p');
  multiParagraphCard.className = 'multi-paragraph-card';
  multiParagraphCard.textContent = projectData.description;
  professionalArt.appendChild(multiParagraphCard);

  const professionalList = document.createElement('ul');
  professionalList.className = 'professional-list';
  professionalArt.appendChild(professionalList);
  for (let i = 1; i < projectData.technologies.length; i += 1) {
    const proList = document.createElement('li');
    proList.innerText = projectData.technologies[i];
    professionalList.appendChild(proList);
  }

  const profBtn = document.createElement('button');
  profBtn.className = 'prof-btn';
  profBtn.innerText = projectData.button;
  professionalArt.appendChild(profBtn);
}
portfolio('art1', projectData.profHeader1, projectData.proHead1);
portfolio('art2', projectData.profHeader1, projectData.proHead2);
portfolio('art3', projectData.profHeader1, projectData.proHead3);
portfolio('art4', projectData.profHeader1, projectData.proHead1);
portfolio('art5', projectData.profHeader1, projectData.proHead2);
portfolio('art6', projectData.profHeader1, projectData.proHead3);
