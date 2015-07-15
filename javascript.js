$( document ).ready(function() {
  $( 'form' ).on("submit", function( event ){
    event.preventDefault();
    var type = $("input[name='type']").val();
    var time = $("input[name='time']").val();


    var new_torta = new Torta(type);
    // console.log(new_torta);
    var result = new_torta.bake_time();
    // console.log(result);
    var batch = new TortaBatch(8, type);
    console.log(batch);
  });
});

// Class Torta
var Torta = function(type){
	var self = this;
	function initialize(){
		self.type = type;
	};
	initialize();
};

// bake_time method for Torta
Torta.prototype.bake_time = function(){
	var bake_time = {"jamon": 3, "queso": 8, "milanesa": 10};
	return bake_time[this.type];
};
///////////////////////////////////////////////////////////////////////////////

// Class TortaBatch
var TortaBatch = function(batch_size, type){
  var self = this;
  function initialize(){
    self.batch_size = batch_size;
    self.type = type;
    var tortas = [];
    // console.log(tortas);
    for (var i = 0; i < batch_size; i++) {
      tortas.push(new Torta(type));
    };
    // console.log(tortas);
    var ready_time = tortas[0].bake_time();
    var cook_time = 0;
  };
  initialize();
};

// status method for TortaBatch
TortaBatch.prototype.status = function(){

};








// Class Oven
// var Oven = function(time){
// 	var time_baked = 0;
// 	this.time = time;
// };
///////////////////////////////////////////////////////////////////////////////
