var jq = $.noConflict();
jq(document).ready(function(){
    

    jq("form").submit(function( event ) {
        event.preventDefault();
    });
    
    jq("#jumbodivh").hide();
    jq("#join").click(function( event ) {
        event.preventDefault();
        jq("#jumbodivh").fadeToggle(3000);
    });

});
