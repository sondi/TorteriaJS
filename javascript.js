$( document ).ready(function() {
  $( 'form' ).on("submit", function( event ){
    event.preventDefault();
    var type = $("input[name='type']").val();
    var time = $("input[name='time']").val();
  });

});
