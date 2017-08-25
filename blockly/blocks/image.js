'use strict';

(function(){

const project = require('./project');

function createImageComponent(params) {
	return {
		init: function() {		
			var options = project[params.origin].map(o => [o.name, o.fullPath]);
			options = options.length ? options : [['no_image', '']];
			
			var dropdown = new Blockly.FieldDropdown(options,
			function(newOp) {
				this.sourceBlock_.getField('IMAGE').setValue(newOp);
			});
			this.appendDummyInput()
				.appendField(params.label)
				.appendField(dropdown, 'SOURCE')
				.appendField(new Blockly.FieldImage('', 96, 72, '*'), 'IMAGE');
			this.getField('IMAGE').EDITABLE = true;
			this.setColour(20);
			
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip(params.tooltip);
		}
	};
}

Blockly.Blocks['background_image'] = createImageComponent({
	label: 'Background',
	tooltip: 'Shows a background image.',
	origin: 'backgrounds'
});

Blockly.Blocks['portrait_image'] = createImageComponent({
	label: 'Portrait',
	tooltip: 'Shows a character portrait.',
	origin: 'portraits'
});

})();