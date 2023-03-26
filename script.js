// // Get the navigation bar element
// const navBar = document.querySelector('.header');

// // Set initial scroll position
// let prevScrollPos = window.pageYOffset;

// // Event listener for scrolling
// window.onscroll = function () {
//     // Get current scroll position
//     const currentScrollPos = window.pageYOffset;

//     // Check if user has scrolled up
//     if (prevScrollPos > currentScrollPos) {
//         // Add class to show navigation bar
//         navBar.classList.remove('hidden');
//     } else {
//         // Remove class to hide navigation bar
//         navBar.classList.add('hidden');
//     }

//     // Set previous scroll position to current position
//     prevScrollPos = currentScrollPos;
// }



function myFunction() {
    var x = document.getElementById("myNavbar");
    var y = document.getElementById("pageContent");
    var z = document.getElementById("mobileMenu");
    const menuIcon = document.getElementById("hamburger");
    const searchBtn = document.getElementById("searchIcon");

    if (y.style.display !== "none") {
        
        y.style.display = "none";
        z.style.display = "flex";
        menuIcon.className = "fa fa-xmark fa-lg";
        searchBtn.style.display = "none";
  } else {
        menuIcon.className = "fa fa-bars";
        y.style.display = "block";
        z.style.display = "none";
        searchBtn.style.display = "block";
  }
}