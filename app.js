

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slider-arrow.left');
const nextBtn = document.querySelector('.slider-arrow.right');

let currentSlide = 0;
let sliderInterval;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function startAutoSlide() {
  sliderInterval = setInterval(nextSlide, 4500);
}

function resetAutoSlide() {
  clearInterval(sliderInterval);
  startAutoSlide();
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

startAutoSlide();

// form script


function handleContactSubmit() {
  const form = document.getElementById("contactForm");

  const name = document.getElementById("nameField").value.trim();
  const phone = document.getElementById("phoneField").value.trim();
  const email = document.getElementById("emailField").value.trim();
  const message = document.getElementById("messageField").value.trim();

  const errorMsg = document.getElementById("form-error");
  const successMsg = document.getElementById("form-success");

  // Reset messages
  errorMsg.style.display = "none";
  successMsg.style.display = "none";

  // Required validation
  if (!name || !phone || !message) {
    errorMsg.innerText = "❌ Name, Phone and Message are required.";
    errorMsg.style.display = "block";
    return;
  }

  // Email validation (only if entered)
  if (email !== "") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMsg.innerText = "❌ Please enter a valid email address.";
      errorMsg.style.display = "block";
      return;
    }
  }
  //Phone Validation
  if (phone !== "") {
    // Normalization: Remove all non-digit characters first
    const digitsOnly = phone.replace(/\D/g, "");

    if (digitsOnly.length !== 10) {
      errorMsg.innerText = "❌ Please enter a 10-digit phone number.";
      errorMsg.style.display = "block";
      return;
    }
  }


  // ✅ Submit form
  form.submit();
  form.reset();
  successMsg.style.display = "block";
}


//hambsburger header


window.openMenu = function () {
  document.getElementById("sideNav").style.right = "0";
  document.getElementById("overlay").style.display = "block";
};

window.closeMenu = function () {
  document.getElementById("sideNav").style.right = "-280px";
  document.getElementById("overlay").style.display = "none";
};



  const cards = document.querySelectorAll('.offering-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
    });
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.06)";
    });
  });


  window.addEventListener("load", () => {
    const hero = document.querySelector(".hero-content");
    hero.style.opacity = 0;
    hero.style.transform = "translateY(20px)";

    setTimeout(() => {
      hero.style.transition = "all 0.8s ease";
      hero.style.opacity = 1;
      hero.style.transform = "translateY(0)";
    }, 150);
  });


  const cardss = document.querySelectorAll('.problem-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
  });


  const aboutSection = document.querySelector('.about-program');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutSection.style.opacity = 1;
        aboutSection.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });

  aboutSection.style.opacity = 0;
  aboutSection.style.transform = "translateY(20px)";
  aboutSection.style.transition = "all 0.7s ease";

  observer.observe(aboutSection);


  const featureCards = document.querySelectorAll('.feature-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });

  featureCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
  });


  const finalCTA = document.querySelector('.final-cta');

  finalCTA.style.opacity = 0;
  finalCTA.style.transform = "translateY(30px)";
  finalCTA.style.transition = "all 0.8s ease";

  window.addEventListener("scroll", () => {
    const rect = finalCTA.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      finalCTA.style.opacity = 1;
      finalCTA.style.transform = "translateY(0)";
    }
  });








