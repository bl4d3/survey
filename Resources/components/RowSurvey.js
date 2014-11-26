function RowSurvey(p){
	var self = Ti.UI.createTableViewRow({
		height: "40dp"
	});
	
	var l = Ti.UI.createLabel({
		text: "quiz " + p.i,
		font:{fontSize:"20dp"}
	});
	
	self.add(l);
	
	return self;
};

module.exports = RowSurvey;
