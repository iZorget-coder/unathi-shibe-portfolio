const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if(mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', function(){

        //Toggle instead of just show
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', ()=>{

            //Prevents menu from staying open after navigation on mobile
            navLinks.classList.remove('active');
        });
    });

    document.addEventListener('click', function(event){
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnMenuBtn = mobileMenuBtn.contains(event.target);

        if(!isClickInsideNav && !isClickOnMenuBtn && navLinks.classList.contains('active')){
            navLinks.classList.remove('active');
        }
    });
}