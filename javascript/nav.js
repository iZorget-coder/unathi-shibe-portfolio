document.getElementById('nav-container').innerHTML = 
`
    <nav class="main-nav">
        <div class="nav-container">
            <div class="nav-portfolio-name">
                <a href="/index.html" class="logo">Unathi Shibe</a>
            </div>
            <button class="mobile-menu-btn" id="mobileMenuBtn">☰</button>
            <ul class="nav-links" id="navLinks">
                <li><a href="/index.html" class="nav-link">Home</a></li>
                <li><a href="/pages/3d-art.html" class="nav-link">3D Art</a></li>
                <li><a href="/pages/animation-unity.html" class="nav-link">Animation & Unity</a></li>
                <li><a href="/pages/about.html" class="nav-link">About</a></li>
            </ul>
        </div>
    </nav>
`;


//Avoiding duplicated static HTML across pages

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href').includes(currentPage)) {
        link.classList.add('active');
    }
});