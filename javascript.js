$( document ).ready(function() {
  $( 'form' ).on("submit", function( event ){
    event.preventDefault();
    var type = $("input[name='type']").val();
    var time = $("input[name='time']").val();

    count_down(time);
    var new_torta = new Torta(type, time);
    console.log(new_torta);
    var result = new_torta.bake_time();
 
    var batch = new TortaBatch(8, type, time);
    // console.log(batch.status());

  });
});

// Class Torta
var Torta = function(type, time){
	var self = this;
	function initialize(){
		self.type = type;
		self.time = time;
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
var TortaBatch = function(batch_size, type, time){
  var self = this;
  function initialize(){
    self.batch_size = batch_size;
    self.type = type;
    self.time = time;
    self.tortas = [];
    // console.log(tortas);
    for (var i = 0; i < batch_size; i++) {
      self.tortas.push(new Torta(type, time));
    };
    // console.log(tortas);
    self.ready_time = self.tortas[0].bake_time();
  };
  initialize();
};

// status method for TortaBatch


TortaBatch.prototype.status = function(){
	var self = this;
	if (self.ready_time > self.time)
		$('#message h2').text('Raw');
	else if (self.ready_time == self.time)
		$('#message h2').text('Ready');
	else
		$('#message h2').text('Burned');
};

var count_down = function(time){
	setTimeout(function(){ 
			$('#message h2').text(time);
			if(time > 0){
				count_down(time - 1);
			}
			else if(time == 0){
				var type_2 = $("input[name='type']").val();
    			var time_2 = $("input[name='time']").val();
    			var batch = new TortaBatch(8, type_2, time_2);
    			batch.status();		
			}
		}, 1000);	
}



// Class Oven
// var Oven = function(time){
// 	var time_baked = 0;
// 	this.time = time;
// };
///////////////////////////////////////////////////////////////////////////////
