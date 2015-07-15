$( document ).ready(function() {
  $( 'form' ).on("submit", function( event ){
    event.preventDefault();
    var type = $("input[name='type']").val();
    var time = $("input[name='time']").val();


    var new_torta = new Torta(type);
    console.log(new_torta);
    var result = new_torta.bake_time();
    console.log(result);
});

var Torta = function(type){
		var self = this;
	function initialize(){
		self.type = type;
	};
	initialize();

};	
	Torta.prototype.bake_time = function(){
		var bake_time = {"jamon": 3, "queso": 8, "milanesa": 10};
		return bake_time[this.type]
	};


var Oven = function(time){
	var time_baked = 0;
	this.time = time;
};


});
