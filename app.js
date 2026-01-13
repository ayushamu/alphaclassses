

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








