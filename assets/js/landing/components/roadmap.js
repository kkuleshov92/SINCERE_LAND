let years = document.querySelectorAll('.roadmap__radio'),
    yearsContent = document.querySelectorAll('.roadmap__content');

function showYearContent() {
    years.forEach((btn,index) => {
        if (btn.checked) {
            yearsContent.forEach(content => {
                content.classList.remove('active')
            })

            yearsContent[index].classList.add('active');
        }
    });
}

years.forEach((btn) => {
    btn.addEventListener('change', showYearContent)
})

window.addEventListener('DOMContentLoaded', showYearContent);
