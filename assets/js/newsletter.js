$('#newsletter').submit(function(e) {
    e.preventDefault();
    $.ajax({
        url: 'https://api.optimizemi.org/newsletter',
        dataType: 'json',
        type: 'POST',
        data: {
            name: $('#newsletter-name').val(),
            email: $('#newsletter-email').val()
        },
    });
    return false;
});
