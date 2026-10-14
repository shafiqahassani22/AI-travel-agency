
//   it is for my contact menue
      const hasSub = document.querySelector('.has-submenu');
      const userLink = document.querySelector('.user-link');

      userLink.addEventListener('click', function (event) {
        event.preventDefault();
        hasSub.classList.toggle('open');
      });

      document.addEventListener('click', function (event) {
        if (!hasSub.contains(event.target)) {
          hasSub.classList.remove('open');
        }
      });
    //   ******************
    // booking box in hero 
    const bookingForm=document.querySelector("booking_box");
    

