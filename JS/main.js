// Swiper js

let swiperProjects = new Swiper(".projects--container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });


  // Form area

  let contactForm = document.getElementById('contact-form');
  let contactName = document.getElementById('contact-name');
  let contactEmail = document.getElementById('contact-email');
  let contactProject = document.getElementById('contact-project');
  let contactMessage = document.getElementById('contact-message');


  let sendEmail = (e) => {
    e.preventDefault();
    alert(`${contactName.value}, ${contactEmail.value},
    your message ----> ${contactProject.value} is successfully submitted`);
    
  }

  contactForm.addEventListener('submit', sendEmail);




  // theme change 


  let icon = document.getElementById('icon');
   
  icon.onclick = function() {
    document.body.classList.toggle('dark--theme');
    if(document.body.classList.contains('dark--theme')) {
      icon.src = "./img/suntnsp.png";

    }
    else{
      icon.src = "./img/moon2.png";
    }
  }