$(function() {
    $("img").css("display","none");
    $("img:nth-of-type(1)").css("display","block");

    $('img').on("click", function(){ 
        $(this).css("display","none");
        $(this).next().fadeIn("slow");
        if ($(this).next().length === 0) {
            $("img:nth-of-type(1)").fadeIn("slow");    
        }
    });
    
    var li; 
    $(".simpleslideshow").on('click', "li", function(){
            $("img").css("display","none");
            $("img:nth-of-type(" + this.id + ")").fadeIn("slow");
    });
}); 







