describe('spec_loginSignOutAutomationPractice', function(){

	var loginSignOutAutomationPractice = require('../03_Pages/LoginSignOutAutomationPractice.js');
	var testdata = require('../04_InputData/InputData.json');
	testdata.forEach( function (data){
	
	it('Run Script1', function() {
		
		loginSignOutAutomationPractice.loginSignOutAutomationPracticePage(data.URL,data.username, data.password, data.text, data.text2, data.text3, data.text4, data.text5);
		
	});
	});
});
