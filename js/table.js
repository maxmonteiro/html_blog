$(document).ready(function(){
    $("tbody tr:not(.sub)").hide();

    $("#clicktable").click(function() {
        $(".view").show();
       $("#hidden").hide();
    });
    
});