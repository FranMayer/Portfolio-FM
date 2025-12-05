$(document).ready(function(){

  $('.scroll-top').hide();

  /*--------------- Navbar Toggler ---------------*/
  $('#menu-btn').click(function(e){
    e.stopPropagation();
    $(this).find('i').toggleClass('fa-bars fa-times');
    $('.navbar').toggleClass('active');
    $('body').toggleClass('menu-open');
  });

  // Close menu when clicking on a nav link
  $('.navbar a').click(function(){
    $('#menu-btn').find('i').removeClass('fa-times').addClass('fa-bars');
    $('.navbar').removeClass('active');
    $('body').removeClass('menu-open');
  });

  // Close menu when clicking outside
  $(document).click(function(e){
    if(!$(e.target).closest('.navbar, #menu-btn').length){
      $('#menu-btn').find('i').removeClass('fa-times').addClass('fa-bars');
      $('.navbar').removeClass('active');
      $('body').removeClass('menu-open');
    }
  });

  /*--------------- Scroll-Top ---------------*/
  $(window).on('scroll',function(){
    
    // Close mobile menu on scroll
    if($(window).width() <= 768){
      $('#menu-btn').find('i').removeClass('fa-times').addClass('fa-bars');
      $('.navbar').removeClass('active');
      $('body').removeClass('menu-open');
    }

    // STICKY HEADER
    if($(window).scrollTop() > 0){
      $(".header").addClass("sticky");
    }else{
      $(".header").removeClass("sticky");
    }

    // Show/hide scroll-top button
    if ($(this).scrollTop() > 100) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }

  });

  /*--------------- Theme Toggle ---------------*/
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('i');
  
  // Check for saved theme preference or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
  
  themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
  
  function updateThemeIcon(theme) {
    if (theme === 'light') {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  }

});

