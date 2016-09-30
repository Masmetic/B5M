/**
 * Created by my on 2016/9/29.
 */
$(function(){
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
})