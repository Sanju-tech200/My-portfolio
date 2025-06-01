 AOS.init();

    // Typed Text
    var typed = new Typed("#typing", {
      strings: [ "Aspiring Web Developer",
        "Python & Django Enthusiast",
        "HTML, CSS, JavaScript Learner",
        "SQL & Database Explorer",
        "Bootstrap Beginner"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });

    // Toggle Menu for Mobile
    const toggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    toggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });

    // Close menu on link click (for mobile)
    document.querySelectorAll('.navbar a').forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('active');
      });
    });