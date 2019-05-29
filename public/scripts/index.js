(function ($, window, document) {
    $(function () {
        const $win = $(window);
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
        }


        const initInvertScroll = wrapper => {
            const options = {
                height: setScrollContainerWidth(), // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
                onScroll: function (percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
                    console.log(percent);
                }
            }
            const elem = $.jInvertScroll([`.${wrapper} .invert_scroll`], options);
            $(`.${wrapper}`).addClass('ready')
            $win.resize(() => {
                if ($(window).width() <= 768) {
                    elem.destroy();
                } else {
                    elem.reinitialize();
                }
            });
        }
        setTimeout(() => {
            initInvertScroll("works");
        }, 1000)


    });


}(window.jQuery, window, document));
