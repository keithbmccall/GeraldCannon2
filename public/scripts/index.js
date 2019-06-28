function debounce(func, wait, immediate) {
    let timeout;
    return function () {
        let context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
(function ($, window, document) {
    $(function () {
        const $win = $(window);

        // begin invert scroll plug
        const initInvertScroll = wrapper => {
            const setScrollContainerWidth = () => {
                const $scrollContainer = $('.invert_scroll');
                const $topRowContainer = $('.scroll_row.top');
                const $middleRowContainer = $('.scroll_row.middle');
                let tw = 0;
                let mw = 0;
                $topRowContainer.find('.scroll_image').each(function () {
                    tw += $(this).outerWidth() + 30;
                })
                $middleRowContainer.find('.scroll_image').each(function () {
                    mw += $(this).outerWidth() + 30;
                })
                const width = tw > mw ? tw : mw
                $scrollContainer.width(width);
                return width
            };
            const options = {
                height: setScrollContainerWidth(), // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
                onScroll: function (percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
                    console.log(percent);
                }
            }
            $.jInvertScroll([`.${wrapper} .invert_scroll`], options);
            $(`.${wrapper}`).addClass('ready')
        }
        const reInitInvertScroll = wrapper => {
            $win.scrollTop(0);
            $(`.${wrapper}`).removeClass('ready')
            initInvertScroll("works");
        }
        const invertScroll = {
            init: initInvertScroll,
            reInit: reInitInvertScroll
        }

        // end invert scroll plug
        // nav launcher
        const toggleNav = () => {
            $('.nav').toggleClass('_active')
        }
        // end nav launcher
        const attachHandlers = () => {
            if ($('.invert_scroll').length) {
                const _reInitInvertScroll = debounce(() => invertScroll.reInit('works'), 250)
                $win.on('resize', _reInitInvertScroll);
                setTimeout(() => {
                    invertScroll.init("works");
                }, 1000)
            }

            if ($('.menu-icon, .close-icon').length) {
                $('.menu-icon, .close-icon').on('click', toggleNav)
            }

        }
        attachHandlers();


    });


}(window.jQuery, window, document));
