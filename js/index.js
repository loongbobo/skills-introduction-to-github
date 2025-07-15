$(window).scroll(function(){
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(scrollT)
    var backTop = $("#fodder").offset().top - $(window).height();
    var backFod = $("#maxlovely").offset().top - $(window).height();
    // console.log(backTop)
    if(scrollT > backTop){
        $(".a1").addClass("animated bounceInUp show").removeClass('fade')
        $(".a2").addClass("animated bounceInUp show").removeClass('fade')
        $(".a3").addClass("animated bounceInUp show").removeClass('fade')
        $(".a4").addClass("animated bounceInUp show").removeClass('fade')
    }
    if(scrollT > backFob){
        $(".a1").addClass("animated bounceInUp show").removeClass('fade')
        $(".a2").addClass("animated bounceInRight show").removeClass('fade')
        $(".a3").addClass("animated bounceInDown show").removeClass('fade')
        $(".a4").addClass("animated bounceInLeft show").removeClass('fade')
    }
});