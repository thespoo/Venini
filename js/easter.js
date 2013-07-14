
$(document).ready(function(){
    var keys     = [];
    var konami  = '38,38,40,40,37,39,37,39,66,65';
 
   $(document)
        .keydown(
            function(e) {
                keys.push( e.keyCode );
                if ( keys.toString().indexOf( konami ) >= 0 ){
 
                    // do something when the konami code is executed
                    $('body').replaceWith("<center>Watch out for Zobbi!</center> <br /><img src='images/ahtms.png' style='margin: 0 auto; display: block;' />");
                    
 
                    // empty the array containing the key sequence entered by the user
                    keys = [];
            }
        }
    );
});