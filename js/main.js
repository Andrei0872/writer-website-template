(function () {
    const $$ = document.querySelectorAll.bind(document);

    if (window.innerWidth < 812) {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    [...$$(".js-card")].forEach((card, index) => {
        card.style.backgroundImage = `url(./img/carte${index + 1}.${index === 0 ? 'jpeg': 'jpg'})`;
        card.style.backgroundSize = 'cover'
        card.style.backgroundRepeat = 'no-repeat'
    })
})();