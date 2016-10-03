/**
 * Created by my on 2016/10/3.
 */
$(function(){
    //顶部菜单切换
    $(".type li a").each(function(){
        $(this).on("click",function(){
            $(this).addClass("t1").parent().siblings().children().removeClass("t1");
        })
    })
    //底部页数切换
    $(".page ul li").each(function(){
        $(this).on("click",function(){
            $(this).addClass("click").siblings().removeClass("click");
        })
    })
    //普通商品鼠标移上效果
    $(".col dl").each(function(){
        $(this).on("mouseover",function(){
            $(this).stop().animate({
                "opacity" : 0.5
            },500)
        })
        $(this).on("mouseout",function(){
            $(this).stop().animate({
                "opacity" : 1
            },500)
        })
    })
})