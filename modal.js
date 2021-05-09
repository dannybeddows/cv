const open = document.getElementsByClassName('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

for (var i=0; i < open.length; i++) {
    open[i].addEventListener('click', function() {
    modal_container.classList.add('show');
});


close.addEventListener('click', () => {
    modal_container.classList.remove('show');
})};


// JS for the toggle menu 

const toggleButton = document.getElementsByClassName('toggle_button')[0]
const navbarLinks = document.getElementsByClassName('nav_links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});
