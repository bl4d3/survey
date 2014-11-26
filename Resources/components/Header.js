function Header(p){
	var self = Ti.UI.createView({
		backgroundColor: "yellow",
		height: "48dp",
		width: Ti.UI.FILL,
		top: 0
	});
	
	var l = Ti.UI.createLabel({
		text: "Header",
		font:{fontSize:"20dp"}
	});
	
	if(p.back==true){
		var back = Ti.UI.createLabel({
			text: "back",
			font:{fontSize:"16dp"},
			left: "5dp"
		}); 
		back.addEventListener('click',function(){
			p.self.close();
		});
		self.add(back);
	}
	
	self.add(l);
	
	return self;
};

module.exports = Header;
