import projectItems from "./project files/projectFiles.js";

const carouselContainer = document.querySelector('.work');
const faRight = document.querySelector('.fa-angle-right');
const faLeft = document.querySelector('.fa-angle-left');

let itemsPerPage = calculateItemsPerPage();

// Function to calculate itemsPerPage based on screen width
function calculateItemsPerPage() {
  return window.innerWidth >= 768 ? 2 : 1;
}

// Event listener for window resize
window.addEventListener('resize', function() {
  // Update itemsPerPage when the window is resized
  itemsPerPage = calculateItemsPerPage();
  // Call the updateCarousel function to refresh the carousel with the new itemsPerPage value
  updateCarousel();
});

// Current page of the carousel
let currentPage = 0;

// Function to update the carousel content
function updateCarousel() {
  const startIdx = currentPage * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const carouselItems = projectItems.slice(startIdx, endIdx).map(itm => {
      const itemHtml = `
          <li>
            <div class="carousel-container">
              <h2 class="proj-title" style="color: ${itm.background}";>${itm.title}</h2>
              <div><img src="${itm.image}" class="proj-img"></div>
              <p class="proj-desc" style="color: ${itm.background}";>${itm.description}</p>
              <div class="see-prjct">
                <button class="aboutme-btn see-github" style="background-color: ${itm.background}";><a href=${itm.githubLink} target="_blank" >See Github</a></button>
                <button class="aboutme-btn see-live" style="background-color: ${itm.background}";><a href=${itm.linkDemo} target="_blank" >See Live</a></button>
              </div>
            </div>   
          </li>
      `;

      faRight.style.color = itm.background;
      faLeft.style.color = itm.background;
      
      return itemHtml;
  }).join('');
  
  carouselContainer.innerHTML = carouselItems;
}

// Function to handle next button click
function nextSlide() {
  if (currentPage < Math.ceil(projectItems.length / itemsPerPage) - 1) {
      currentPage++;
  } else {
      currentPage = 0;
  }
  updateCarousel();
}

// Function to handle previous button click
function prevSlide() {
  if (currentPage > 0) {
      currentPage--;
  } else {
      currentPage = Math.ceil(projectItems.length / itemsPerPage) - 1;
  }
  updateCarousel();
}

// Add event listeners for next and previous buttons
faRight.addEventListener('click', nextSlide);
faLeft.addEventListener('click', prevSlide);

// Initial update to display the first page of items
updateCarousel();

// const menuButton = document.querySelector('#btn-menu');
// const closeModalIcon = document.querySelector('#modal-close-icon img');
// const mobileMenuModal = document.querySelector('#mobile-menu-modal');
// const menuLinks = document.querySelectorAll('#menu-link li');
// const toggleMenuDisplay = () => {
//   mobileMenuModal.classList.toggle('toogleModalDisplay');
// };

// menuButton.addEventListener('click', toggleMenuDisplay);

// closeModalIcon.addEventListener('click', toggleMenuDisplay);

// menuLinks.forEach((link) => {
//   link.addEventListener('click', toggleMenuDisplay);
// });

// const containerBig = document.querySelector('.work');

// const inn = projectItems.map((item) => {
//  return ` 
//   <div class='project-items'">
//     <img src=${item.image} class="project-img">
//     <h1 class='project-header'>${item.title}</h1>
//     <p class='project-paragraph'>${item.description}</p>
//     <ul class='technologies'>
//       ${item.techStack.map((itm) => {
//         return `<li>${itm}</li>`
//       }).join('')}
//     </ul>
//     <button class='multi-btn project-button' data-project-id='${item.id}'>See Project Page</a></button>
//   </div>`
  
// })

// const popContainerBig = document.createElement('div');
// const bodyMain = document.querySelector('body');
// popContainerBig.className = 'pop-container-big';
// bodyMain.appendChild(popContainerBig);

// const popup = () => {projectItems.map((item) => {
//   return `
//     <section class='pop-container' data-project-id='${item.id}'>
//         <div class='pop-title-close'>
//             <h1 class='pop-title'>${item.title}</h1>
//             <h1 class='pop-title-desk'>${item.title}</h1>
//             <img class='pop-close' src='./icons/modal-close-icon.png'/>
//         </div>
//         <div class='pop-technologies'>
//             <ul class='pop-tech-list'>
//                 ${item.techStack.map((itm) => `<li>${itm}</li>`)}
//             </ul>
//         </div>
//         <div class='pop-description'>
//             <img class='pop-image' src=${item.image}/>
//             <div class='pop-para-img'>
//                 <p class='pop-paragraph'>${item.description}</p>
//                 <div class='pop-btn'>
//                     <ul class='pop-btn-list'>
//                         <li class='btn-list-item'>
//                             <button class='pop-button'><a class='live-link' href=${item.linkDemo}>See Live '<i class="fa-solid fa-power-off"></i>'</a></button>
//                         </li>
//                         <li class='btn-list-item'>
//                         <button class='pop-button'><a class='repo-link' href=${item.githubLink}>See Source '<i class="fa-brands fa-github"></i>'</a></button>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     </section>
//   `
// }).join('');
// }
// popContainerBig.innerHTML = popup()
// popContainerBig.style.display = 'none'

// containerBig.innerHTML  = inn.join('');
// const projectBtn = document.querySelectorAll('.project-btn');

// projectBtn.forEach((button) => {
//   const projectId = button.dataset.projectId;
//   button.addEventListener('click', () => console.log(projectId))
//   const popup = document.querySelector(`[data-popup-id="${projectId}"]`);
//     popup.style.display = "block";
// })

// const buttonPop = document.querySelector('.popup-btn');
// const buttonsCards = document.querySelectorAll('.prof-btn');
// let bol = false;
// buttonPop.addEventListener('click', () => {
//   const flowBig = popContainerBig.style;
//   flowBig.display = 'block';
//   bol = true;
//   if (bol === true) {
//     bodyMain.style.overflow = 'hidden';
//   }
// });

// buttonsCards.forEach((button) => {
//   button.addEventListener('click', () => {
//     const flowBig = popContainerBig.style;
//     flowBig.display = 'block';
//     bol = true;
//     if (bol === true) {
//       bodyMain.style.overflow = 'hidden';
//     }
//   });
// });

// const popClose = document.querySelector('.pop-close');
// popClose.addEventListener('click', () => {
//   const popContBig = popContainerBig.style;
//   popContBig.display = 'none';
//   if (popContBig.display === 'none') {
//     bodyMain.style.overflow = 'auto';
//   }
// });

// const emailForm = document.getElementById('validate-mail');
// const regx = /[A-Z]/;
// const text = document.getElementById('text');
// const form = document.getElementById('form');

// form.addEventListener('submit', (e) => {
//   if (regx.test(emailForm.value) === true) {
//     text.textContent = 'Email adress must be in lower case!';
//     e.preventDefault();
//   } else {
//     text.textContent = 'Thank You For Getting In Touch!';
//     text.style.color = 'green';
//   }
// });

// localStorage.clear();

// let localForm = {
//   emailField: '',
//   nameField: '',
//   messageField: '',
// }

// let localForm_str = JSON.stringify(localForm);
// localStorage.setItem('locForm', localForm_str);

// emailForm.addEventListener('input', () => {
//   localForm_str.emailField = emailForm.value;
//   localStorage.getItem(localForm_str.emailField);
// })




// Get references to elements
const contentContainer = document.getElementById('main-contents');
const faBars = document.querySelector('.fa-bars');
const navBar = document.querySelector('.nav-bar');
const faXmark = document.querySelector('.fa-xmark');

faBars.addEventListener('click', () => {
  navBar.style.display = 'block'
});

faXmark.addEventListener('click', () => {
  navBar.style.display = 'none';
  faBars.style.display = 'block';
});

const projectsLink = document.getElementById('projects');
const aboutLink = document.getElementById('about');
const contactLink = document.getElementById('contact');
const homeLink = document.getElementById('home');


const projectsNav = document.querySelectorAll('.nav-projects');
const aboutNav = document.querySelectorAll('.nav-about');
const contactNav = document.querySelectorAll('.nav-contact');
const homeNav = document.querySelectorAll('.nav-home, .nav-logo');

const homeProjects = document.querySelector('.home-projects');
const homeAbout = document.querySelector('.home-about');
const homeContact = document.querySelector('.home-contact');

const faArrowLeft = document.querySelectorAll('.fa-arrow-left');

 

faArrowLeft.forEach((lnk) => {
  lnk.addEventListener('click', () => {
    homeLink.style.display = 'block';
    aboutLink.style.display = 'none';
    projectsLink.style.display = 'none';
    contactLink.style.display = 'none';
    navBar.style.display = 'none';
  })
}); 

homeProjects.addEventListener('click', () => {
  homeLink.style.display = 'none';
  projectsLink.style.display = 'block'
});

homeAbout.addEventListener('click', () => {
  homeLink.style.display = 'none';
  aboutLink.style.display = 'block'
});

homeContact.addEventListener('click', () => {
  homeLink.style.display = 'none';
  contactLink.style.display = 'block'
});




aboutNav.forEach((lnk) => {
  lnk.addEventListener('click', () => {
    aboutLink.style.display = 'block';
    projectsLink.style.display = 'none';
    contactLink.style.display = 'none';
    homeLink.style.display = 'none';
    navBar.style.display = 'none';
  });
})

contactNav.forEach((lnk) => {
  lnk.addEventListener('click', () => {
    contactLink.style.display = 'block';
    projectsLink.style.display = 'none';
    aboutLink.style.display = 'none';
    homeLink.style.display = 'none';
    navBar.style.display = 'none';
  });
})

homeNav.forEach((lnk) => {
  lnk.addEventListener('click', () => {
    homeLink.style.display = 'block';
    projectsLink.style.display = 'none';
    aboutLink.style.display = 'none';
    contactLink.style.display = 'none';
    navBar.style.display = 'none';
  });
}) 

projectsNav.forEach((lnk) => {
  lnk.addEventListener('click', () => {
    projectsLink.style.display = 'block';
    homeLink.style.display = 'none';
    aboutLink.style.display = 'none';
    contactLink.style.display = 'none';
    navBar.style.display = 'none';
  });
})
