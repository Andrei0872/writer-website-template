(() => {
    const prev  = document.querySelector('.js-prev');
    const next = document.querySelector('.js-next');

    const track = document.querySelector('.js-content');

    let carouselWidth = document.querySelector('.js-inner').offsetWidth;

    window.addEventListener('resize', () => {
    carouselWidth = document.querySelector('.js-inner').offsetWidth;
    })

    let index = 0;

    prev.classList.add('h-hide');

    next.addEventListener('click', () => {
        index++;
        prev.classList.remove('h-hide');
        track.style.transform = `translateX(-${index * carouselWidth}px)`;
        
        (track.offsetWidth - (index * carouselWidth) < carouselWidth) && (next.classList.add('h-hide'));
    });

    prev.addEventListener('click', () => {
        index--;
        next.classList.remove('h-hide');

        index === 0 && (prev.classList.add('h-hide'));
        
        track.style.transform = `translateX(-${index * carouselWidth}px)`;
    });

})();

