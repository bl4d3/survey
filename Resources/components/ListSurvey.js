function ListSurvey(){
	var RowSurvey = require('components/RowSurvey');
	
	var self = Ti.UI.createView({
		backgroundColor: "green",
		width: Ti.UI.FILL,
		top: 0
	});
	
	var table = Ti.UI.createTableView({
		
	});
	
	var data = [];
	
	for(var i=0; i<30;i++){
		var rowSurvey = new RowSurvey({
			i:i
		});
		data.push(rowSurvey);
	}
	
	table.setData(data);
	
	self.add(table);
	
	return self;
};

module.exports = ListSurvey;
