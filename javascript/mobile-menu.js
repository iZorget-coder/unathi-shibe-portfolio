const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if(mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', function(){
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', ()=>{
            navLinks.classList.remove('active');
        })
    })
}