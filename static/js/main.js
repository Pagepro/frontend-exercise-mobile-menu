(function ($, window, document) {
    "use strict";
    window.CHANGE_ME = window.CHANGE_ME || {
        $body: null,
        init: function () {
            this.$body = $('body');
            this.dropdownMenu();
            this.dropdownSubmenu();
            this.navResize();
        },
        breakpoint: function () {
            return window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
        },
        dropdownMenu: function () {
                $('.js-menu-toggler').on('click', function (e) {
                        $('.sec--nav').toggleClass('opened');
                        $('body').toggleClass('menu-opened');      
            });
        },
        dropdownSubmenu: function () {
                $('.js-menu-item-wrapper').on('click', function (e) {
                    $(this).siblings().removeClass('active');
                    if($(this).hasClass('submenu-point')){
                        e.preventDefault();
                        $(this).toggleClass('active');
                    }
                $

            });
        },
        navResize: function () {
            $(window).on('resize', function(e) {
                
            });
        }

    };

    $(document).on('ready', function () {
        window.CHANGE_ME.init();
    });
}(jQuery, window, document));