$(document).ready(function(){
    $(".slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:".prev-btn",
        nextArrow:".next-btn",
        responsive:[
            {
               breakpoint:992,
               settings:{
                slidesToShow:2,
               }
            },
            {
             breakpoint:768,
             settings:{
              slidesToShow:1,
             }
          }
         ]

    })

    $('.nav-trigger').click(function () {
        $('.content-warper').toggleClass("scaled")
    })
})