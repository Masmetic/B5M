/**
 * Created by my on 2016/10/4.
 */
$(function(){
    //重新设置密码
    $(".ok").click(function(){
        var user = $(".con input").eq(0).val();
        //console.log($(".con input").eq(1).val().length >= 6);
        if($.cookie.getAll(user).psd != undefined
            && $(".con input").eq(1).val() == $.cookie.getAll(user).psd
            && $(".con input").eq(2).val() == $(".con input").eq(3).val()
            && $(".con input").eq(2).val().length >= 6
            && $(".con input").eq(2).val().length <= 18){
            $.cookie.setAll($(".con input").eq(0).val(),{
                "psd" : $(".con input").eq(2).val()
            })
            alert("密码修改成功,请重新登录");
            location.href = "../html/login.html"
        }else{
            alert("输入有误,请重新输入");
            $(".con input").eq(1).val("");
            $(".con input").eq(2).val("");
            $(".con input").eq(3).val("");
        }
    })
})