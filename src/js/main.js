(function ($, window, document) {
    "use strict";
    window.CHANGE_ME = window.CHANGE_ME || { // AD: `CHANGE_ME` should be changed into project name
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
                    // AD: `e.preventDefault()` is missing here
                        $('.sec--nav').toggleClass('opened');
                        $('body').toggleClass('menu-opened');
                    // AD: try to use correct indent. Two lines above are too deep.
            });
        },
        dropdownSubmenu: function () {
                $('.js-menu-item-wrapper').on('click', function (e) {
                    $(this).siblings().removeClass('active');
                    if($(this).hasClass('submenu-point')){ // AD: put spaces after `if` keyword and before `{`
                        e.preventDefault();
                        $(this).toggleClass('active');
                    }
                $ // AD: why this is here?

            });
        },
        navResize: function () {
            // AD: do you need this function? why it's here? If you don't need function which doesn't do anything - delete it.
            $(window).on('resize', function(e) {

            });
        }

    };

    $(document).on('ready', function () {
        window.CHANGE_ME.init(); // AD: `CHANGE_ME` should be changed into project name
    });
}(jQuery, window, document));
