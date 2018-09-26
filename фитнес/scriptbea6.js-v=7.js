$(document).ready(function () {

    $('.results-slider').owlCarousel({
        loop: true,
        margin: 30,
        // dots: true,
        nav: true,

        responsiveClass: true,

        responsive: {
            0: {
                items: 1,
                nav: false
                // dots: true

            },
            1160: {
                items: 1,
                nav: true
                // dots: true


            }
        }
    });

    $('[data-fancybox=studios-gallery]').fancybox({});


    $('input[type=tel]').inputmask("+7 (999) 999 99 99");

    $(".form-type-1").submit(function (e) {
        e.preventDefault();
        var form = $(this),
            url = form.attr('data-url'),
            button = $('button[type=submit]');
        button.attr('disabled', 'disabled');
        $.ajax({
            type: "post",
            url: url,
            data: form.serialize(),
            success: function (data) {
                $('#modal-2').modal();
                form.trigger('reset');
                button.removeAttr('disabled');
                yaCounter47029407.reachGoal ('send');
            }
        });
    });

    $(".form-type-2").submit(function (e) { //форма из попапа
        e.preventDefault();
        var form = $(this),
            url = form.attr('data-url'),
            button = $('button[type=submit]');
        button.attr('disabled', 'disabled');
        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(),
            success: function (data) {
                $('#modal-1').modal('hide'); //закрываем попап формы
                setTimeout(function () {
                    $('#modal-2').modal();
                    form.trigger('reset');
                    button.removeAttr('disabled');
                }, 700);
                yaCounter47029407.reachGoal ('send');
            }
        });
    });

    $(".form-type-3").submit(function (e) {
        e.preventDefault();
        var form = $(this),
            url = form.attr('data-url')
            button = $('button[type=submit]');
        button.attr('disabled', 'disabled');
        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(),
            success: function (data) {
                $('#modal-2').modal();
                form.trigger('reset');
                button.removeAttr('disabled');
                yaCounter47029407.reachGoal ('send');
            }
        });
    });

    AOS.init();

});





















