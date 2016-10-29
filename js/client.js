var jq = $.noConflict();
jq(document).ready(function(){
    jq("#join").click(function( event ) {
        event.preventDefault();
        jq("#jumbodivh").hide();
    });
});
