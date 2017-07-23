$(document).ready(function(){
   
    //grid creator method
    for (var x = 0; x< 16; x++){
       for(var y = 0; y <16; y++){
           $("#container").append("<div class='unit'></div>");
           
    //calls for erase function       
    document.getElementById("btnClick").onclick = clickEvent;
           
    //calls for new grid pop up
    document.getElementById("btnClick2").onclick = clickEvent2;
       }
   }
    
    //draw method
    $(".unit").hover(function(){
        $(this).css("background", "black");
    });
    
    
    /*$('.unit').mousedown(function () {
    $(this).css("background", "black");
    timeout = setInterval(function () {
        $(this).css("background", "black");
    }, 500);

    return false;
});
$('.unit').mouseup(function () {
    clearInterval(timeout);
    return false;
});
$('.unit').mouseout(function () {
    clearInterval(timeout);
    return false;
});
    */
    
    //function to erase
    function clickEvent() {
        //alert("hello");
        $('.unit').css("background", "white");
    }
    
    //New grid function
    function clickEvent2() {
        $('.unit').remove();
        var newGrid = prompt("What are your new dimensions?");
        
        for( var x = 0; x < newGrid; x++){
            for( var y = 0; y < newGrid; y++){
                $("#container").append("<div class='unit'></div>");
            }
        }
        
        $('.unit').width(816/newGrid + 'px');
        $('.unit').height(816/newGrid + 'px');
        
    
    $(".unit").hover(function(){
        $(this).css("background", "black");
    });
    
    }
 });   