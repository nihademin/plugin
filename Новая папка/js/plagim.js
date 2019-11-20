$(function($){

    $.fn.ChangeBg=function(bg,sz,cl){
        this.css({
            background:bg,
            "font-size":sz,
            color:cl
        })
    }

$.fn.floatAnima=function(options){
    var myDefault={
        sp:1000,
        dt:300,
        tr:"click"
    }
    var settings=$.extend(myDefault,options)
    this.on(settings.tr,function(){
    $(this).stop().css("position","relative").animate({
        left:"+="+settings.dt
    },settings.sp,function(){
        $(this).animate({
            left:0
        },settings.sp)
    })
})
}
}(jQuery))