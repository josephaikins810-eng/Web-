$(function() {
    $('.hamburger').on('click', function() {
        $('.nav-links').toggleClass('active');
    });

    $('.nav-links a').on('click', function() {
        $('.nav-links').removeClass('active');
    });

    if ($('.search-input').length) {
        $('.search-input').on('keyup', function() {
            var value = $(this).val().toLowerCase();
            $('.card').filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });
    }

    var visits = Number(localStorage.getItem('visits') || 0) + 1;
    localStorage.setItem('visits', visits);
    $('#visitor-count').text(visits);
});
