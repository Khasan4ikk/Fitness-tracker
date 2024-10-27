function toggleMenu() {
    const burger = document.querySelector('.burger');
    const navBtn = document.querySelector('.nav-btn');
  
    burger.classList.toggle('active');
    navBtn.classList.toggle('active');
  }
  
  
   //карусель

   $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true, 
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        items: 4, 
        center: true, 
        dots: false, 
    });
});
  

AOS.init();
  
  
  
  
  