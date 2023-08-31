document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const mobile_navmenu = document.querySelector('.mobile_navmenu');
    const navLinks = document.querySelectorAll('.navLinks');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        mobile_navmenu.classList.toggle('active');

        if (mobile_navmenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = ''; // Enable scrolling
        }
    });

    // Add a click event listener to all anchor elements inside the menu
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active'); // Remove 'active' class from the hamburger icon
            mobile_navmenu.classList.remove('active'); // Remove 'active' class from the mobile navigation menu
            document.body.style.overflow = ''; // Enable scrolling
        });
    });
});

var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}
