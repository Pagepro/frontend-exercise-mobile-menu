(function ($, window, document) {
    "use strict";
    window.CHANGE_ME = window.CHANGE_ME || {
        $body: null,
        init: function () {
            this.$body = $('body');
            this.toggleMenu();
            this.submenus();
        },
        breakpoint: function () {
            return window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
        },
        toggleMenu: function () {
            $('.js-menu-toggler').on('click', function (e) {
                e.preventDefault();
                $('body').toggleClass('menu-opened');
                if ($('body').is('.menu-opened')) {
                    $('.js-with-submenu').removeClass('active');
                    $('.sec--nav').scrollTop(0);
                }
            })
        },
        submenus: function () {
            $('.js-with-submenu .nav__item__link').on('click', function (e) {
                e.preventDefault();
                var $clickedItem = $(this).parent();
                if ($clickedItem.is('.active')) {
                    $clickedItem.toggleClass('active');
                } else {
                    $('.js-with-submenu').removeClass('active');
                    $clickedItem.addClass('active');
                }
            })
        }
    };
    $(document).on('ready', function () {
        window.CHANGE_ME.init();
    });
}(jQuery, window, document));