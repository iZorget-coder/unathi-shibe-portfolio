document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer-container');
    
    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer class="footer">
                <div class="container">
                    <div class="footer-content">
                        <p class="footer-copyright">© 2026 Unathi Shibe. All rights reserved.</p>
                        <div class="footer-social">
                            <a href="https://github.com/iZorget-coder" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
                                <img src="/unathi-shibe-portfolio/assets/icons/github.svg" alt="GitHub" width="24" height="24">
                            </a>
                            <a href="https://www.linkedin.com/in/unathi-shibe-702324282/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
                                <img src="/unathi-shibe-portfolio/assets/icons/linkedin.svg" alt="LinkedIn" width="24" height="24">
                            </a>
                            <a href="https://www.artstation.com/izorget" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="ArtStation">
                                <img src="/unathi-shibe-portfolio/assets/icons/artstation.svg" alt="ArtStation" width="24" height="24">
                            </a>
                            <a href="https://www.instagram.com/unathiishibe" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
                                <img src="/unathi-shibe-portfolio/assets/icons/instagram.svg" alt="Instagram" width="24" height="24">
                            </a>
                            <a href="mailto:unathiesihles@gmail.com" class="social-link" aria-label="Email">
                                <img src="/unathi-shibe-portfolio/assets/icons/email.svg" alt="Email" width="24" height="24">
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
});