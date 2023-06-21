const global = {
    currentPage : window.location.pathname,
};

function highlightActveLinks() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
        if (link.getAttribute('href') === global.currentPage) {
            link.classList.add('active');
        }
    })
}

function init() {
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            console.log('Home');
            break;
        case '/shows.html':
            console.log('Shows');
            break;
        case '/movie-details.html':
            console.log('Movie Details');
            break;
        case '/tv-details.html':
            console.log('Tv-Details');
            break;
        case '/search.html':
            console.log('search');
            break;
       
    }
    highlightActveLinks();
}

document.addEventListener('DOMContentLoaded',init);