$(function(){


    $( "#accordion" ).accordion({
        heightStyle: "fill"
      });
   
      $( "#accordion-resizer" ).resizable({
        minHeight: 140,
        minWidth: 200,
        resize: function() {
          $( "#accordion" ).accordion( "refresh" );
        }
      });

})