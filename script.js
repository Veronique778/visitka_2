let section_item = document.querySelector('.item3')
section_item.addEventListener('click', function() {
    alert('veronikaplyusn1@gmail.com')
})
anime({
    targets: '.header_btn',
    translateY: [-window.innerHeight / 2, 0],
    duration: 300,
    easing: 'easeOutQuad'
})