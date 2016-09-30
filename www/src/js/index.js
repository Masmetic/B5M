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
        if ($index == 0 && $qiandex == 3) {
            $(".scroll li").eq($qiandex).stop(true, true).animate({
                "left": "-800px"
            });
            $(".scroll li").eq($index).css("left", "800px").stop(true, true).animate({
                "left": "0"
            });
        } else if ($index == 3 && $qiandex == 0) {
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
        })
    })

    $(".btn4 span").each(function(){
        $(this).mouseover(function(){
            $(".banner3 ul").animate({left:$(this).index()*(-800)},"slow");
            $(this).addClass("banner3_1").siblings().removeClass("banner3_1");
        })
    })
    $(".ul1 li a").each(function() {
        $(this).on("click", function () {
            $(this).addClass("a3").parent().siblings().children().removeClass("a3");
            $(".f2Hide").toggle("slow");
        })
    })

    $(".sideban ul li").each(function(){
        $(this).on("mouseenter",function(){
            $(".hide").stop().show("slow");
            $(this).addClass("click").siblings().removeClass("click");
        })
        $(this).on("mouseleave",function(){
            $(".hide").stop().hide();
            $(this).removeClass("click");
        })
    })
    $(".hide").on("mouseenter mouseleave",function(){
        $(this).toggle();
    })
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
    })
})