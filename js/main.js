(function () {
    const $$ = document.querySelectorAll.bind(document);
    const $ = document.querySelector.bind(document);

    if (window.innerWidth < 812) {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    [...$$(".js-card")].forEach((card, index) => {
        card.style.backgroundImage = `url(./img/carte${index + 1}.${index === 0 ? 'jpeg': 'jpg'})`;
        card.style.backgroundSize = 'cover'
        card.style.backgroundRepeat = 'no-repeat'
    });

    const prevVideo = $(".js-prev-video");
    const nextVideo = $(".js-next-video");
    const currentVideo = $(".js-video")
    
    let currentIndex = 0;

    const videos = [
        'https://www.youtube.com/embed/rTuFRja0Bdc',
        'https://www.youtube.com/embed/HnQPMYJNud8',
        'https://www.youtube.com/embed/M-y5lmUls2g'
    ]

    nextVideo.addEventListener('click', () => {
        currentIndex++;

        currentIndex === videos.length && (currentIndex = 0)

        currentVideo.src = videos[currentIndex]
    }); 

    prevVideo.addEventListener('click', () => {
        currentIndex--;

        currentIndex === -1 && (currentIndex = videos.length - 1)

        currentVideo.src = videos[currentIndex]
    });

})();