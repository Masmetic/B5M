/**
 * Created by my on 2016/9/28.
 */
$(function() {

    var clearTime = null;
    var $index = 0;
    var $qiandex = 0;
    $(".btn2 span").mouseover(function() {
        clearInterval(clearTime);
        $index = $(this).index(); //获取序列号
        scrollPlay();
        $qiandex = $index; //把当前的值赋给下一次的前一个序列号
    }).mouseout(function(){
        autoPlay();
    });
    autoPlay();

    function autoPlay() {
        clearTime = setInterval(function() {
            $index++;
            if ($index > 3) {
                $index = 0;
                $qiandex = 3;
            }
            scrollPlay();
            $qiandex = $index;
        }, 2000);

    }

    function scrollPlay() {
        $(".btn2 span").eq($index).addClass("hover").siblings().removeClass("hover");
        if ($index === 0 && $qiandex == 3) {
            $(".scroll li").eq($qiandex).stop(true, true).animate({
                "left": "-800px"
            });
            $(".scroll li").eq($index).css("left", "800px").stop(true, true).animate({
                "left": "0"
            });
        } else if ($index == 3 && $qiandex === 0) {
            $(".scroll li").eq($qiandex).stop(true, true).animate({
                "left": "800px"
            });
            $(".scroll li").eq($index).css("left", "-800px").stop(true, true).animate({
                "left": "0"
            });
        } else if ($index > $qiandex) { //左移
            $(".scroll li").eq($qiandex).stop(true, true).animate({
                "left": "-800px"
            });
            $(".scroll li").eq($index).css("left", "800px").stop(true, true).animate({
                "left": "0"
            });
        } else if ($index < $qiandex) { //右移
            $(".scroll li").eq($qiandex).stop(true, true).animate({
                "left": "800px"
            });
            $(".scroll li").eq($index).css("left", "-800px").stop(true, true).animate({
                "left": "0"
            });
        }
    }

    $(".btn3 span").each(function(){
        $(this).click(function(){
            $(".banner2 ul").animate({left:$(this).index()*(-210)},"slow");
            $(this).addClass("banner2_1").siblings().removeClass("banner2_1");
        });
    });

    $(".btn4 span").each(function(){
        $(this).mouseover(function(){
            $(".banner3 ul").animate({left:$(this).index()*(-800)},"slow");
            $(this).addClass("banner3_1").siblings().removeClass("banner3_1");
        });
    });
    $(".ul1 li a").each(function() {
        $(this).on("click", function () {
            $(this).addClass("a3").parent().siblings().children().removeClass("a3");
            $(".f2Hide").toggle("slow");
        });
    });

    $(".sideban ul li").each(function(){
        $(this).on("mouseenter",function(){
            $(".hide").stop().fadeIn("slow");
            $(this).addClass("click").siblings().removeClass("click");
        });
        $(this).on("mouseleave",function(){
            $(".hide").stop().hide();
            $(this).removeClass("click");
        });
    });
    $(".hide").on("mouseenter mouseleave",function(){
        $(this).toggle();
    });
    //sousuo
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "lephone",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $( "#tags" ).autocomplete({
        source: availableTags
    });
    //弹窗
    $(".biu").animate({
        "opacity" : 1
    },2000);
    $(".biu").click(function(){
        $(this).stop().hide();
    });
    //普通商品特效
    $("dl").on("mouseover",function(){
        $(this).stop().animate({
            "opacity" : 0.5
        },500);
    });
    $("dl").on("mouseout",function(){
        $(this).stop().animate({
            "opacity" : 1
        },500);
    });
    //侧边栏
    $(".app,.er").on("mouseenter",function(){
        $(".er").stop().show().animate({
            "left" : -110,
            "opacity" : 1
        },800);
    });
    $(".app,.er").on("mouseleave",function(){
        $(".er").stop().hide().css("left",-180);
    });
    $(".app2,.er2").on("mouseenter",function(){
        $(".er2").stop().show().animate({
            "left" : -110,
            "opacity" : 1
        },800);
    });
    $(".app2,.er2").on("mouseleave",function(){
        $(".er2").stop().hide().css("left",-180);
    });
});
$(window).scroll(function(){
    var $t = $(this).scrollTop();
    if($t > 300){
        $(".roll").fadeIn("slow");
    }else{
        $(".roll").fadeOut("slow");
    }
    $(".roll_last").on("click",function(){
        $("body,html").scrollTop(0);
    });
});