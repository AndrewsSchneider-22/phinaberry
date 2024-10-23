document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  alert('Message sent successfully!');
  this.reset(); // Reset the form fields
});

let currentTestimonialSlide = 0;

function changeSlide(type, direction) {
  if (type === 'testimonial') {
      const testimonials = document.querySelectorAll('.testimonial-carousel .testimonial');
      testimonials[currentTestimonialSlide].classList.remove('active');

      currentTestimonialSlide += direction;

      if (currentTestimonialSlide < 0) {
          currentTestimonialSlide = testimonials.length - 1; // Loop to the last testimonial
      } else if (currentTestimonialSlide >= testimonials.length) {
          currentTestimonialSlide = 0; // Loop to the first testimonial
      }

      testimonials[currentTestimonialSlide].classList.add('active');
  }
}

// Optional: Auto-slide feature for testimonials
setInterval(() => {
  changeSlide('testimonial', 1);
}, 7000); // Change testimonial every 7 seconds

const carouselContainer = document.querySelector('.carousel-container');
const carouselImages = document.querySelectorAll('.carousel img');

carouselImages.forEach((image) => {
  image.addEventListener('touchstart', () => {
      carouselContainer.classList.add('pause-animation');
  });

  image.addEventListener('touchend', () => {
      carouselContainer.classList.remove('pause-animation');
  });

  image.addEventListener('mouseover', () => {
      carouselContainer.classList.add('pause-animation');
  });

  image.addEventListener('mouseout', () => {
      carouselContainer.classList.remove('pause-animation');
  });
});



// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', function() {
    navbar.classList.toggle('active'); // Toggle the active class for the navbar
    hamburger.classList.toggle('active'); // Toggle the active class for the hamburger
});

// Close menu when a nav link is clicked
navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        navbar.classList.remove('active'); // Hide the menu
        hamburger.classList.remove('active'); // Revert to hamburger icon
    });
});