/**
 * Created by my on 2016/9/29.
 */
$(function(){
    $("#btn1").click(function(){
        var psd = $.cookie.getAll($("#txt").val()).psd;
        if(psd == $("#txt2").val()){
            location.href = "../index.html";
        }else{
            $("#txt").val("用户名或密码错误");
            $("#txt2").val("");
        }
    });
});