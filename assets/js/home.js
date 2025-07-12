$(document).ready(function () {
    // Slider
    const slideSlider = new Swiper('#slide-show .swiper',{
        effect: 'fade',
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
    });
    // Bottom Slider
    const bottomSlider = new Swiper('#bottom-slide-show .swiper',{
        slidesPerView: 'auto',
        spaceBetween: 24,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
    });
    // Procudts Slider
    const Products = new Swiper('.products .swiper',{
        slidesPerView: 'auto',
        spaceBetween: 8,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
    });
    // Product Border
    $(document).on('mousemove',function (e){
        document.querySelectorAll(".border-gradient").forEach((item) => {
            const { left, top } = item.getBoundingClientRect();
            const { clientX, clientY } = e;
            item.style.setProperty("--x", `${clientX - left}px`);
            item.style.setProperty("--y", `${clientY - top}px`);
        });
    });
    // Timer ( OPTION )
    $('.timer').each(function (){
        var timer = this;
        function updateTimer() {
            var time = $(timer).text().split(':');
            // Calculate days, hours, minutes, and seconds
            var difference = parseInt(time[0] * 3600) + parseInt(time[1] * 60) + parseInt(time[2]);
            // Check if the countdown has expired
            if (difference < 0) {
                location.reload(); // Stop the timer
                return;
            }else{
                difference = difference - 1;
            }

            // Calculate days, hours, minutes, and seconds
            const hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
            const minutes = Math.floor((difference % (60 * 60)) / (60));
            const seconds = Math.floor((difference % (60)));

            // Display the time in the HTML element
            $(timer).text(`${hours}:${minutes}:${seconds}`);
        }
        setInterval(updateTimer,1000)
    });
});