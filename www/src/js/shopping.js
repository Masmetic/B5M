/**
 * Created by my on 2016/10/3.
 */
$(function(){
    //把数据从cookie中添加至购物车
    var id = $(".goods").attr("id");
    //console.log(id);
    var pName = $.cookie.getAll(id).pName;
    var imgSrc = $.cookie.getAll(id).imgSrc;
    var Pcolor = $.cookie.getAll(id).Pcolor;
    var Pstyle = $.cookie.getAll(id).Pstyle;
    var price = parseFloat($.cookie.getAll(id).price).toFixed(2);
    var Pnum = parseInt($.cookie.getAll(id).Pnum);
    //console.log(price);
    if(pName != undefined
        &&imgSrc != undefined
        &&Pcolor != undefined
        &&Pstyle != undefined
        &&price != undefined
        &&Pnum != undefined){
        $(".goods").append("<p class='store'></p>");
        $(".store").append("<input type='checkbox' checked />");
        $(".store").append("<span></span>");
        $(".store span").html(pName);
        $(".goods").append("<div class='info'></div>");
        $(".info").append("<input type='checkbox' checked id='things' />");
        $(".info").append("<img />");
        $(".info img").attr({
            "src" : imgSrc
        });
        $(".info").append("<span class='name'></span>");
        $(".name").html(pName);
        $(".info").append("<span class='types'></span>");
        $(".types").html(Pcolor + " " +Pstyle);
        $(".info").append("<span class='pri'></span>");
        $(".pri").html(price);
        $(".info").append("<span class='less'>-</span>");
        $(".info").append("<input class='num2' />");
        $(".info").append("<span class='more'>+</span>");
        $(".num2").val(Pnum);
        $(".info").append("<span class='all'></span>");
        $(".all").html(parseFloat($(".pri").html() * $(".num2").val()).toFixed(2));
        //console.log($(".pri").html() * $(".num2").val())
        $(".info").append("<span class='delete'>删除</span>");
    }
    //商品数量改变
    $(".num2").on("blur",function(){
        if($(".num2").val() < 1 || $(".num2").val() > 100){
            $(".num2").val("1");
        }
        $(".all").html(parseFloat($(".pri").html() * $(".num2").val()).toFixed(2));
        $(".allNum").html($(".num2").val());
        $(".allMoney").html($(".all").html());
        $.cookie.setAll(id,{
            "pName" : pName,
            "imgSrc" : imgSrc,
            "Pcolor" : Pcolor,
            "Pstyle" : Pstyle,
            "price" : price,
            "Pnum" : $(".num2").val()
        })
    });
    if($(".num2").val() == 1){
        $(".less").addClass("special_num");
    } else if($(".num2").val() == 100){
        $(".more").addClass("special_num");
    }
    var much;
    $(".less").click(function(){
        $(".more").removeClass("special_num");
        much = parseInt($(".num2").val());
        if(much == 2){
            $(this).addClass("special_num");
            $(".num2").val(much - 1);
        }else if(much == 1){
            much = 1;
            $(this).addClass("special_num");
            $(".num2").val(1);
        }else{
            $(this).removeClass("special_num");
            $(".num2").val(much - 1);
        }
        $(".all").html(parseFloat($(".pri").html() * $(".num2").val()).toFixed(2));
        $(".allNum").html($(".num2").val());
        $(".allMoney").html($(".all").html());
        $.cookie.setAll(id,{
            "pName" : pName,
            "imgSrc" : imgSrc,
            "Pcolor" : Pcolor,
            "Pstyle" : Pstyle,
            "price" : price,
            "Pnum" : $(".num2").val()
        })
    })
    $(".more").click(function(){
        $(".less").removeClass("special_num");
        much = parseInt($(".num2").val());
        //console.log(typeof much);
        if(much == 100){
            much = 100;
            $(this).addClass("special_num");
            $(".num2").val(100)
        } else if(much == 99){
            $(this).addClass("special_num");
            $(".num2").val(much + 1)
        }else{
            $(this).removeClass("special_num");
            $(".num2").val(much + 1);
        }
        $(".all").html(parseFloat($(".pri").html() * $(".num2").val()).toFixed(2));
        $(".allNum").html($(".num2").val());
        $(".allMoney").html($(".all").html());
        $.cookie.setAll(id,{
            "pName" : pName,
            "imgSrc" : imgSrc,
            "Pcolor" : Pcolor,
            "Pstyle" : Pstyle,
            "price" : price,
            "Pnum" : $(".num2").val()
        })
    })
    //修改总商品数 和 总价
    $(".allNum").html($(".num2").val());
    $(".allMoney").html($(".all").html());
    //删除商品
    $(".delete, .del").click(function(){
        $.cookie.unsetAll("lephone");
        window.location.reload();
    })
    //全选
    $("#allCheck, #allCheck2").bind("change",function(){
        if($(this).is(":checked")){
            $("#content input:checkbox").attr("checked",true);
        }else{
            $("#content input:checkbox").attr("checked",false);
        }
    })
    //展开
    $(".notice span").click(function(){
        if($(this).html() == "展开"){
            $(".exp").show();
            $(this).html("收起")
        }else{
            $(".exp").hide();
            $(this).html("展开");
        }
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