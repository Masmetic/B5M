/**
 * Created by my on 2016/9/29.
 */
$(function(){
    $(".btn").on("click",function(){
        var str = "";
        function get(){
            num = parseInt(Math.random() * 74 + 48);
            if(num >= 58 && num <= 64 || num >= 91 && num <= 96){
                get()
            }
        }
        for(i = 0;i < 4;i++){
            get();
            str += String.fromCharCode(num);
        }
        $(".btn").val(str);
    })

    $(".txt").blur(function(){
        var phoneNumber = parseInt($(".txt").val());
        if(!/^1[3589]\d{9}$/.test(phoneNumber)){
            $(".txt").val("false");
            return false;
        }
    })
    $(".txt2").blur(function(){
        var identify = $(".txt2").val();
        if(identify != $(".btn").val()){
            $(".txt2").val("false");
            return false;
        }
    })
    $(".txt3").blur(function(){
        var psd = $(".txt3").val();
        if(!/^[a-z0-9_-]{6,18}$/.test(psd)){
            $(".txt3").val("false");
            return false;
        }
    })
    $(".txt4").blur(function(){
        var psd2 = $(".txt4").val();
        if(psd2 != $(".txt3").val()){
            $(".txt4").val("false");
            return false;
        }
    })
    $(".btn2").click(function(){
        if($(".check").is(":checked")
            && $(".txt").val() != ("false" && "")
            && $(".txt2").val() != ("false" && "")
            && $(".txt3").val() != ("false" && "")
            && $(".txt4").val() != ("false" && "")){
            alert("ok");
        }
    })
})