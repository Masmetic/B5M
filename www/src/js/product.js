/**
 * Created by my on 2016/9/29.
 */
$(function(){
    //搜索框
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
    //倒计时
    setInterval(function(){
        var obj = $(".endtime");
        var endTime = new Date(parseInt(obj.attr('value')) * 1000);
        //console.log(parseInt(obj.attr('value')) * 1000);
        var nowTime = new Date();
        var nMS=endTime.getTime() - nowTime.getTime();
        var myD=Math.floor(nMS/(1000 * 60 * 60 * 24)); //天
        var myH=Math.floor(nMS/(1000*60*60)) % 24; //小时
        var myM=Math.floor(nMS/(1000*60)) % 60; //分钟
        var myS=Math.floor(nMS/1000) % 60; //秒
        var str = "剩余时间:" + myD+"天"+myH+"小时"+myM+"分"+myS+"秒";
        obj.html(str);
        //console.log(nMS)
    },1000);
    //放大镜
    $(".pic").on("mouseover mouseout",function(event){
        $("#square").toggle();
        $("#bigger").toggle();
    })
    $(".pic").on("mouseover",function(){
        $(".pic").on("mousemove",function(event){
            var x = event.pageX - $(".pic").offset().left - $("#square").width()/2;
            var y = event.pageY - $(".pic").offset().top - $("#square").height()/2;
            if(x < 0){
                x = 0
            } else if(x > $(".pic").width() - $("#square").width()){
                x = $(".pic").width() - $("#square").width()
            }
            if(y < 0){
                y = 0;
            }else if(y > $(".pic").height() - $("#square").height()){
                y = $(".pic").height() - $("#square").height();
            }
            $("#square").css({
                "left" : x,
                "top" : y
            })
            $("#bigger img").css({
                "left" : -4 * x,
                "top" : -4 * y
            })
        })
    })
    //商品样式改变
    $("#color span").each(function(){
        $(this).on("click",function(){
            $(this).addClass("special_color").siblings().removeClass("special_color");
        })
    })
    //商品数量改变
    $(".num").on("blur",function(){
        if($(".num").val() < 1 || $(".num").val() > 100){
            $(".num").val("1");
        }
    })
    var much;
    $(".less").click(function(){
        $(".more").removeClass("special_num");
        much = parseInt($(".num").val());
        if(much == 2){
            $(this).addClass("special_num");
            $(".num").val(much - 1);
        }else if(much == 1){
            much = 1;
            $(this).addClass("special_num");
            $(".num").val(1);
        }else{
            $(this).removeClass("special_num");
            $(".num").val(much - 1);
        }
    })
    $(".more").click(function(){
        $(".less").removeClass("special_num");
        much = parseInt($(".num").val());
        //console.log(typeof much);
        if(much == 100){
            much = 100;
            $(this).addClass("special_num");
            $(".num").val(100)
        } else if(much == 99){
            $(this).addClass("special_num");
            $(".num").val(much + 1)
        }else{
            $(this).removeClass("special_num");
            $(".num").val(much + 1);
        }
    })
    //点击购买获取商品信息cookie
    var Pcolor;
    $(".buy").bind("click",function(){
        var pName = $(".p1").html();
        var imgSrc = $(".sPic img").attr("src");
        $("#color span").each(function(){
            if($(this).hasClass("special_color")){
                Pcolor = $(this).html();
            }
        })
        var Pstyle = $(".type").html();
        var price = parseFloat($(".span4").html().substring(1));
        var Pnum = parseInt($(".num").val());
        console.log(imgSrc);
        if(Pcolor != undefined){
            $.cookie.setAll($(".p1").attr("id"),{
                "pName" : pName,
                "imgSrc" : imgSrc,
                "Pcolor" : Pcolor,
                "Pstyle" : Pstyle,
                "price" : price,
                "Pnum" : Pnum
            });
            location.href = "../html/shopping.html";
        }else{
            alert("选个颜色，大兄弟")
        }
    })
})
$(window).scroll(function(){
    var $t = $(this).scrollTop();
    if($t > 900){
        $(".hide").fadeIn("fast");
    }else {
        $(".hide").fadeOut("slow");
    }
    if($t > 500){
        $(".roll").fadeIn("slow");
    }else {
        $(".roll").fadeOut("slow");
    }
    $(".top").click(function(){
        $("html,body").scrollTop(0);
    })
    //楼梯
    $(".hide ul li").each(function(){
        $(this).click(function(){
            $index = $(this).index();
            $(this).addClass("hide_li1").siblings().removeClass("hide_li1");
            var $top = $(".lou").eq($index).offset().top - 50;
            $("html,body").scrollTop($top);
        })
    })
    //普通商品特效
    $("dl").on("mouseover",function(){
        $(this).stop().animate({
            "opacity" : 0.5
        },500)
    })
    $("dl").on("mouseout",function(){
        $(this).stop().animate({
            "opacity" : 1
        },500)
    })
})