/*varibales*/
const seconds = document.querySelectorAll('.seconds');
const minute = document.querySelectorAll('.minute');


/*funciones*/
const setSeconds = () => {

    seconds.forEach( element => {
        element.style.setProperty('--initial', '0deg');
        element.style.setProperty('--final','360deg');
        // element.style.transform = 'rotate(300deg)';
        element.style.animation = `clocking 3600s infinite linear`;
    });

}

/*eventos*/

window.addEventListener('DOMContentLoaded', () => {

    setSeconds();

    minute.forEach( element => {

        element.style.setProperty('--initial', '300deg');
        element.style.setProperty('--final','299deg');
        // element.style.transform = 'rotate(300deg)';
        element.style.animation = `clocking 3600s infinite linear`;
    });

});

