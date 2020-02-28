const init = () => {
    document.querySelector('year').innerText = new Date().getFullYear();
};


document.addEventListener('DOMContentLoaded', init);