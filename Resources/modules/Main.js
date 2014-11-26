function Main(){
	var Header = require('/components/Header');
	
	var Button = require('components/Button');
	
	var ListSurvey = require('components/ListSurvey');
	
	var self = Ti.UI.createWindow({
		backgroundColor: "red",
		layout: "vertical"
	});
	var header = new Header({
		back: true,
		self: self
	});
	
	var box = Ti.UI.createView({
		layout: "vertical",
		backgroundColor: "red"
	});
	
	var tf = Ti.UI.createTextField({
		width: "80%",
	});
	
	var buttonSearch = Ti.UI.createButton({
		title: "Search"
	});
	buttonSearch.addEventListener('click',function(){
		Ti.API.info('click buttonSearch');
	});
	
	var buttonCategory = new Button();
	
	var listSurvey = new ListSurvey();
	
	box.add(tf);
	box.add(buttonSearch);
	box.add(buttonCategory);
	box.add(listSurvey);
	
	
	self.add(header);
	self.add(box);
	
	self.addEventListener('open',function(){
		tf.blur();
	});
	
	return self;
	
};
module.exports = Main;
