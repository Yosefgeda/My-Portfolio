const menuButton = document.querySelector('#btn-menu');
const closeModalIcon = document.querySelector('#modal-close-icon img')
const mobileMenuModal = document.querySelector('#mobile-menu-modal')
const menuLinks = document.querySelectorAll('#menu-link li')




const toggleMenuDisplay = () => {
  mobileMenuModal.classList.toggle('toogleModalDisplay');
}

menuButton.addEventListener('click',toggleMenuDisplay);

closeModalIcon.addEventListener('click',toggleMenuDisplay);

menuLinks.forEach((link) =>{
  link.addEventListener('click',toggleMenuDisplay)
})