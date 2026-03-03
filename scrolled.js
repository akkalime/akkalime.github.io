    // Get the Navbar element
    const nav = document.getElementById('navigation');
     
    // Add an event listener to the document
    // so that a class is added to the nav
    // element when the page is scrolled
    document.addEventListener('scroll', () => {
      nav.classList.add('scrolled');
     
      // After 1s, check if the user has scrolled to
      // the top of the page and make the nav
      // element transparent again
      setTimeout(() => {
        if (window.pageYOffset === 0 && nav.classList.contains('scrolled')) {
          nav.classList.remove('scrolled');
        }
      }, 1000);
    });