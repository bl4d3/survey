//http://nerdydog.it/quiz.zip
function Button(){
	var self = Ti.UI.createView({
		backgroundColor: "orange",
		height: "48dp",
		width: "80%",
		top: 0
	});
	
	var l = Ti.UI.createLabel({
		text: "Button"
	});
	
	self.add(l);
	
	return self;
};

module.exports = Button;
