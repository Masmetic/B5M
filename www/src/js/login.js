/**
 * Created by my on 2016/9/29.
 */
$(function(){
    $("#btn1").click(function(){
        var psd = $.cookie.getAll($("#txt").val()).psd;
        if(psd == $("#txt2").val()){
            location.href = "../index.html";
        }
    })
})