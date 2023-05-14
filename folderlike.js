// Get the logosContainer element and its child elements
const logosContainer = document.querySelector('.logosContainer');
const logos = logosContainer.querySelectorAll('.LOGO-1, .LOGO-2, .LOGO-3, .LOGO-4');

// Set the default state of all logos to "close" and hide logoContent elements
logos.forEach((logo) => {
  logo.classList.add('close');
  logo.querySelector('.logoContent').classList.add('hiddenContent');
});

// Set the default state of "LOGO-1" to "open" and show its logoContent
const defaultLogo = logosContainer.querySelector('.LOGO-1');
defaultLogo.classList.remove('close');
defaultLogo.classList.add('open');
defaultLogo.querySelector('.logoContent').classList.remove('hiddenContent');
logosContainer.classList.add('open');

// Add click event listeners to each logo element
logos.forEach((logo) => {
  logo.addEventListener('click', () => {
    // Check if the clicked logo is already open
    if (logo.classList.contains('open')) {
      return;
    }

    // Check if there is another div with the "open" class
    const openLogo = logosContainer.querySelector('.open');

    // If there is another div with the "open" class, close it
    if (openLogo && openLogo !== logo) {
      // Use a setTimeout function to delay the execution of the closing action until after the opening animation is complete
      setTimeout(() => {
        openLogo.classList.remove('open');
        openLogo.classList.add('close');
        openLogo.querySelector('.logoContent').classList.add('hiddenContent');
      }, 0);
    }

    // Toggle the "close" and "open" classes on the clicked logo element
    logo.classList.add('open');
    logo.classList.remove('close');
    logosContainer.classList.add('open');
    logosContainer.classList.remove('close');
    logo.querySelector('.logoContent').classList.remove('hiddenContent');
  });

  // Add a click event listener to the logoContent element to prevent it from hiding when it is clicked
  const logoContent = logo.querySelector('.logoContent');
  logoContent.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});
