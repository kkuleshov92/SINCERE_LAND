let radioBtns = document.querySelectorAll('.priorities__input'),
    prioritiesSlides = document.querySelectorAll('.priorities__info'),
    nextPriority = document.querySelectorAll('.priorities__btn');

function changeSlide() {
    radioBtns.forEach((item, index) => {
        if (item.checked) {
            prioritiesSlides.forEach(slide => {
                slide.classList.remove('active')
            })

            prioritiesSlides[index].classList.add('active');
        }
    })
}
    
radioBtns.forEach(item => {
    item.addEventListener('change', changeSlide)
})

nextPriority.forEach(btn => {
    btn.addEventListener('click', () => {
        let nextSlide;
    
        radioBtns.forEach((radio, index) => {
            if (radio.checked) {
                if (++index == radioBtns.length) {
                    nextSlide = 0
                } else {
                    nextSlide = index
                }
            }
        })
        radioBtns[nextSlide].click()
    })
})
