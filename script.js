


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
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  technologies: ['css', 'html', 'bootstrap', 'Ruby'], 
  button: 'See Project',
  profHeader1: 'Profesional Art <br> Printing Data',
  proHead1: 'Profesional Art <br> Printing Data More',
  proHead2: 'Data Dashboard <br> Healthcare',
  proHead3: 'Website Protfolio',
  img: "icons/images/Img Placeholder1.png",
  imgTwo: "icons/Vector.png",
  popTec: ['html', 'Bootstrap', 'Ruby on rails'],
  popImg: "icons/images/popup.png",
  lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  
}

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
  multiHeadTitle.textContent = projectData.titleOne
  
  const multiHeadPara = document.createElement('p');
  innerMultiPost.appendChild(multiHeadPara);
  multiHeadPara.textContent = projectData.description;
  
  const multiHeadTechs = document.createElement('ul');
  innerMultiPost.appendChild(multiHeadTechs);
  for(let i = 0; i < projectData.technologies.length; i += 1) {
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

const popTitleClose = document.createElement('div');
popTitleClose.className = 'pop-title-close';
popContainer.appendChild(popTitleClose);

const popTitle = document.createElement('h1');
popTitle.className = 'pop-title';
popTitleClose.appendChild(popTitle);
popTitle.textContent = projectData.titleOne;

const popCloseImg = document.createElement('img');
popCloseImg.src = projectData.imgTwo;
popCloseImg.className = 'pop-close';
popTitleClose.appendChild(popCloseImg);

const popTechs = document.createElement('div');
popTechs.className = 'pop-technologies';
popContainer.appendChild(popTechs);

const popTechList = document.createElement('ul');
popTechList.className = 'pop-tech-list';
popTechs.appendChild(popTechList);
for(let i = 0; i < projectData.popTec.length; i += 1) {
  const popList = document.createElement('li');
  popList.innerText = projectData.popTec[i];
  popTechList.appendChild(popList);
}

const popDescription = document.createElement('div');
popDescription.className = 'pop-description';
popContainer.appendChild(popDescription);

const popImage = document.createElement('img');
popImage.className = 'pop-image';
popImage.src = projectData.popImg;
popDescription.appendChild(popImage);

const popParagraph = document.createElement('p');
popParagraph.className = 'pop-paragraph';
popParagraph.innerHTML = projectData.lorem;
popDescription.appendChild(popParagraph);

/**..Button.. */

const popBtn = document.createElement('div');
popBtn.className = 'pop-btn';
popDescription.appendChild(popBtn);

const popBtnList = document.createElement('ul');
popBtnList.className = 'pop-btn-list';
popBtn.appendChild(popBtnList);

const popBtnListItem = document.createElement('li');
const popBtnListItem2 = document.createElement('li');
popBtnListItem.className = 'btn-list-item';
popBtnListItem2.className = 'btn-list-item';
popBtnList.appendChild(popBtnListItem);
popBtnList.appendChild(popBtnListItem2);

const popButton = document.createElement('button');
popButton.className = 'pop-button';
popButton.innerText = 'See Live';
popBtnListItem.appendChild(popButton);

const popButton2 = document.createElement('button');
popButton2.innerHTML = 'pop-button' ;
popButton2.innerHTML = 'See Source ' + '<i class="fa-brands fa-github"></i>';
popBtnListItem2.appendChild(popButton2);






