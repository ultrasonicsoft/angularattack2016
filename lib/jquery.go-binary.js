(function ( $ ) {
 
	var methods = {
        init : function(options) {
			var settings = $.extend( {}, $.fn.goBinary.defaults, options );
			var elements = this;
			
			elements.each(function(){
				var element = $(this);
				var text = settings.text || element.text();
				
				if (element.data('go-binary-running'))
					return true;
				element.data('go-binary-running',true);
				element.data('go-binary-stop',false);
				
				var steps = 0;
				(function binaryze(){
					var output = text.split('');
					var start_index = Math.floor(steps/settings.stepsUntilFixed);
					
					steps++;
					while(output[start_index] && !output[start_index].match(settings.matchRE)){
						start_index++;
						steps = start_index*settings.stepsUntilFixed;
					}
					
					if(settings.mode == 'type' && start_index < output.length-1){
						output = output.slice(0,start_index+1);
					}
					
					for(var i = start_index;i < output.length;i++){
						output[i] = bitRoll();
					}
					
					element.text(output.join(''));
					
					if(settings.mode == 'endless'){
						steps = 0;
					}
					
					if(!element.data('go-binary-stop') && steps/output.length <= settings.stepsUntilFixed)
					{
						setTimeout(function(){ binaryze(); },1000/(settings.sps + eval(settings.spsFormulaBasedOnTextLength.replace(/length/g,text.length))));
					}else{
						element.data('go-binary-running',false);
						if(!element.data('go-binary-stop')){
							settings.callback(element);	
						}
					}
				})();
				
			});
			
			return this;
        },
        stop : function( ) { $(this).data('go-binary-stop',true); },
    };
 
    $.fn.goBinary = function( methodOrOptions ) {
        if ( methods[methodOrOptions] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
            return methods.init.apply( this, arguments ); // Default to "init"
        } else {
            $.error( 'Method ' +  methodOrOptions + ' does not exist on jquery.go-binary' );
        } 
    };
 
	$.fn.goBinary.defaults = {
		text: '', // text to be binaryzed instead nodes text
		stepsUntilFixed: 2, // how many steps are needed to fix a character
		sps: 25, // steps per second
        matchRE: /[^\s]/, // Wich characters are going to be binary
        mode: 'shuffle', // How write the text with 3 possible values ['shuffle','type','endless']
		callback: function(){}, // A callback function to be called when method finished executing
        spsFormulaBasedOnTextLength: '0' // A formula to add sps base on length of text. The word 'length' gets replaced with the text length, for example: 'length/2' it's a valid formula and adds half of the text length as sps, so with a base sps of 50 and a text length of 100, it would add another 50 sps, being 100 sps the final speed.
	};
	
	function bitRoll(){
		return Math.random()<.5 ? '0' : '1';
	}
 
}( jQuery ));