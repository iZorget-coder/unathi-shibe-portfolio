const filterBtns = documents.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterBtns.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectItems.forEach(item =>{
            if (filterValue === 'all') {
                item.style.display = 'block';
            } else {
                const category = item.getAttribute('data-category');
                if (category === filterValue){
                    item.style.display = 'block';

                } else {
                    item.style.display = 'none';
                }
            }
        });
    });
});

const modal = document.getElementById(imageModal);
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.modal-close');
const prevBtn = document.querySelector('.modal-next');
const nextBtn = document.querySelector('.modal-next');

let currentImages = [];
let currentIndex = 0;

const gallaryImages = document.querySelectorAll('.gallery-image');

gallaryImages.forEach((image,idx)=>{
    image.addEventListener('click', ()=>{
        const projectGrid = image.closest('.gallery-grid');
        const projectImages = projectGrid.querySelectorAll('.gallery-image');

        currentImages = Array.from(projectImages).map(img =>{
            return img.querySelector('img').getAttribute('src');

        });

        currentIndex = Array.from(projectImages).indexOf(image);

        modalImage.src = currentImages[currentIndex];
        modal.classList.add('show');
    });
});

closeModal.addEventListener('click', ()=>{
    modal.classList.remove('show');
});

modal.addEventListener('click', (e)=>{
    if (e.target === modal){
        modal.classList.remove('show');
    }
});


nextBtn.addEventListener('click', ()=>{
    currentIndex = (currentIndex + 1) % currentImages.length;
    modalImage.src = currentImages[currentIndex];
});

prevBtn.addEventListener('click', ()=>{
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    modalImage.src = currentImages[currentIndex];
});

document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('show')) return;
    
    if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % currentImages.length;
        modalImage.src = currentImages[currentIndex];
    } else if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        modalImage.src = currentImages[currentIndex];
    } else if (e.key === 'Escape') {
        modal.classList.remove('show');
    }
});

const turntablePreviews = document.querySelectorAll('.turntable-preview');
turntablePreviews.forEach(preview => {
    preview.addEventListener('click', () => {
        alert('Video modal will open here.');
    });
});