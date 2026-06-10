const videoThumbnails = document.querySelectorAll('.video-thumbnail-container');

videoThumbnails.forEach(container =>{
    container.addEventListener('click', ()=>{
        const videoUrl = container.getAttribute('data-video-url');

        if(videoUrl){
            const video = document.createElement('video');

            video.className = 'playing-video';
            video.src = videoUrl;
            video.controls = true;
            video.autoplay = true;
            video.loop = false;
            
            video.style.width = '100%';
            video.style.height = '100%';
            video.style.objectFit = 'cover';
            video.style.borderRadius = '0.5rem';

            container.innerHTML = '';
            container.appendChild(video);

            video.addEventListener('ended', ()=>{
                
            })
        }
    })
})