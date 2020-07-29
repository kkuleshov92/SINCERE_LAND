let prodItems = document.querySelectorAll('.products__item');

prodItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.classList.add('show');
    })

    item.addEventListener('mouseleave', function() {
        this.classList.remove('show');
    })
})