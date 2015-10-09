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
                $('.sec--nav').toggleClass('active')
                $('body').toggleClass('blocked');
            })
        },
        submenus: function () {
            var $submenu = $('.submenu');
            $('.js-with-submenu a').on('click', function (e) {
                if ($(this).siblings('.submenu').is('.active')) {
                    $(this).siblings('.submenu').toggleClass('active');
                } else {
                    $submenu.removeClass('active');
                    $(this).siblings('.submenu').addClass('active');
                }
            })
        }
    };
    $(document).on('ready', function () {
        window.CHANGE_ME.init();
    });
}(jQuery, window, document));