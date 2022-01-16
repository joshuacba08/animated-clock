/*varibales*/
const seconds = document.querySelectorAll('.seconds');
const minutes = document.querySelectorAll('.minute');
const hours = document.querySelectorAll('.hour');

/*funciones*/
const setSeconds = () => {

    seconds.forEach( element => {
        element.style.setProperty('--initial', '160deg');
        element.style.setProperty('--final','520deg');
        element.style.animation = `clocking 60s infinite linear`;
    });
}

const setMinutes = () => {
    minutes.forEach( element => {
        element.style.setProperty('--initial', '300deg');
        element.style.setProperty('--final','660deg');
        element.style.animation = `clocking 3600s infinite linear`;
    });
}

const setHours = () => {
    hours.forEach( element => {
        element.style.setProperty('--initial', '30deg');
        element.style.setProperty('--final','390deg');
        element.style.animation = `clocking  43200s infinite linear`;
    });
}

/*eventos*/

window.addEventListener('DOMContentLoaded', () => {

    setSeconds();
    setMinutes();
    setHours();
        // minute.forEach( element => {

        //     element.style.setProperty('--initial', '300deg');
        //     element.style.setProperty('--final','299deg');
        //     // element.style.transform = 'rotate(300deg)';
        //     element.style.animation = `clocking 3600s infinite linear`;
        // });

});

