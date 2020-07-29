let scrollLine = document.querySelector('.header__scrollLine');

function showProgressScroll() {
    let wholeHeight =  window.document.documentElement.scrollHeight,
    currentPlace = window.document.documentElement.clientHeight + window.document.documentElement.scrollTop,
    value;


value = Math.floor(100 * currentPlace / wholeHeight);

scrollLine.style.width = `${value}%`;
}

window.document.addEventListener('scroll', showProgressScroll);
window.document.addEventListener('DOMContentLoaded', showProgressScroll);




/*select*/
let selectBox = document.querySelector('.header__select'),
    selectCurrent = selectBox.querySelector('.select__current'),
    countriesList = selectBox.querySelector('.select__countrylist'),
    countriesItems = countriesList.querySelectorAll('.select__item');

selectCurrent.addEventListener('click', function () {
    countriesList.classList.toggle('active')

    countriesItems.forEach(element => {
        element.addEventListener('click', function () {

            let countryIndex = element.dataset.country;
            selectCurrent.classList.remove('ru', 'gb');
            selectCurrent.classList.add(`${countryIndex}`);
            selectCurrent.dataset.country = countryIndex;
            countriesList.classList.remove('active');
        })
    })
})

document.addEventListener('click', function (event) {
    if (!selectBox.contains(event.target)) {
        countriesList.classList.remove('active')
    }
})