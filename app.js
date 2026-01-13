

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



