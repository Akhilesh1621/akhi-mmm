AOS.init({
    duration: 1200,
})



// vars
'use strict'
var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
    ignoreTouch = 30;;

window.onload = function() {

        // Testim Script
        function playSlide(slide) {
            for (var k = 0; k < testimDots.length; k++) {
                testimContent[k].classList.remove("active");
                testimContent[k].classList.remove("inactive");
                testimDots[k].classList.remove("active");
            }

            if (slide < 0) {
                slide = currentSlide = testimContent.length - 1;
            }

            if (slide > testimContent.length - 1) {
                slide = currentSlide = 0;
            }

            if (currentActive != currentSlide) {
                testimContent[currentActive].classList.add("inactive");
            }
            testimContent[slide].classList.add("active");
            testimDots[slide].classList.add("active");

            currentActive = currentSlide;

            clearTimeout(testimTimer);
            testimTimer = setTimeout(function() {
                playSlide(currentSlide += 1);
            }, testimSpeed)
        }

        testimLeftArrow.addEventListener("click", function() {
            playSlide(currentSlide -= 1);
        })

        testimRightArrow.addEventListener("click", function() {
            playSlide(currentSlide += 1);
        })

        for (var l = 0; l < testimDots.length; l++) {
            testimDots[l].addEventListener("click", function() {
                playSlide(currentSlide = testimDots.indexOf(this));
            })
        }

        playSlide(currentSlide);

        // keyboard shortcuts
        document.addEventListener("keyup", function(e) {
            switch (e.keyCode) {
                case 37:
                    testimLeftArrow.click();
                    break;

                case 39:
                    testimRightArrow.click();
                    break;

                case 39:
                    testimRightArrow.click();
                    break;

                default:
                    break;
            }
        })

        testim.addEventListener("touchstart", function(e) {
            touchStartPos = e.changedTouches[0].clientX;
        })

        testim.addEventListener("touchend", function(e) {
            touchEndPos = e.changedTouches[0].clientX;

            touchPosDiff = touchStartPos - touchEndPos;

            console.log(touchPosDiff);
            console.log(touchStartPos);
            console.log(touchEndPos);


            if (touchPosDiff > 0 + ignoreTouch) {
                testimLeftArrow.click();
            } else if (touchPosDiff < 0 - ignoreTouch) {
                testimRightArrow.click();
            } else {
                return;
            }

        })
    }
    // jQuery counterUp
    // $('.count-num').counterUp({
    //     delay: 10,
    //     time: 1000
    // });




$.fn.jQuerySimpleCounter = function(options) {
    var settings = $.extend({
        start: 0,
        end: 100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options);

    var thisElement = $(this);

    $({ count: settings.start }).animate({ count: settings.end }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({ end: 25, duration: 3000 });
$('#number2').jQuerySimpleCounter({ end: 122, duration: 3000 });
$('#number3').jQuerySimpleCounter({ end: 1640, duration: 2000 });
$('#number4').jQuerySimpleCounter({ end: 50, duration: 2500 });



// model
// case-study
$('.no-touch .project-list li:nth-child(3), .no-touch .project-list li:nth-child(8)').hover(function(e) {
    $(this).parents('.case-meta').next('.overflow-wrapper').find('img:nth-child(1)').toggleClass('show-image');
});

$('.no-touch .project-list li:nth-child(4), .no-touch .project-list li:nth-child(9)').hover(function(e) {
    $(this).parents('.case-meta').next('.overflow-wrapper').find('img:nth-child(2)').toggleClass('show-image');
});

$('.no-touch .project-list li:nth-child(5), .no-touch .project-list li:nth-child(9)').hover(function(e) {
    $(this).parents('.case-meta').next('.overflow-wrapper').find('img:nth-child(3)').toggleClass('show-image');
});

$('.no-touch .project-list li:nth-child(6), .no-touch .project-list li:nth-child(10)').hover(function(e) {
    $(this).parents('.case-meta').next('.overflow-wrapper').find('img:nth-child(4)').toggleClass('show-image');
});

$('.no-touch .project-list li:nth-child(7), .no-touch .project-list li:nth-child(11)').hover(function(e) {
    $(this).parents('.case-meta').next('.overflow-wrapper').find('img:nth-child(5)').toggleClass('show-image');
});

// Reset 
$('.touch .case-wrap').click(function(event) {
    var target = $(event.target);
    if (target.hasClass("case-close")) {
        $('.case-wrap div.case').addClass('reset');
    } else {
        $('.case-wrap div.case').removeClass('reset');
    }
});

// White BG for case top
$('.no-touch .project-list li').hover(function(e) {
    $(this).parents('.case-meta').next('.overflow-wrapper').toggleClass('white-bg');
    $('.touch .case-wrap').toggleClass('.solid');
});

// David Walsh simple lazy loading 
[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
        img.removeAttribute('data-src');
    };
});

// For the demo 
// $('.hover .toggle-switch').click(function(e) {
//     $('.hover .toggle-switch').toggleClass('switched-off');
//     $('.case-wrap').toggleClass('opacity-focus');
// });





// serrrrrrrrrrrrrrrrvice

const join = document.querySelector(".trigger");
const modal = document.querySelector(".modal");
const closeModel = document.querySelector(".close")

function mainLogic() {

    join.addEventListener("click", function() {
        modal.classList.add("open");
    });

    closeModel.addEventListener("click", function() {
        modal.classList.remove("open");
    })

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.classList.remove("open");
        }
    })

}
mainLogic()