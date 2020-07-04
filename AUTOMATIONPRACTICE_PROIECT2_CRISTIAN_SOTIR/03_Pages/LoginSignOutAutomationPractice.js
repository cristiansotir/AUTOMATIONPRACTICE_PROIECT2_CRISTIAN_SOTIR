/**********************************************************************************
* 
*Created by: Cristian Sotir
*
*Description: Script1
	- logare
	- verificare butoane (Order History and Details si restul de 4)
	- click pe taburile Women, Dresses, T-Shirts si facut doua verificari
	- Sign Out - verificare pe Sign In Button
*
*
*
**********************************************************************************/

module.exports = (function (loginSignOutAutomationPractice) {
	
	loginSignOutAutomationPractice.loginSignOutAutomationPracticePage = function (URL,username,password,text,text2,text3,text4,text5){
		
		//open page
		browser.get(URL);
		
		//Click Sign In button
		loginSignOutAutomationPractice.signInButtonClick();
		
		browser.sleep(1000);
		
		//Insert username
		loginSignOutAutomationPractice.insertUserName(username);
		
		//Insert Password
		loginSignOutAutomationPractice.insertPassword(password);
		
		//Click Sign In button2
		loginSignOutAutomationPractice.submitButtonClick();
		
		//Click Order history and details Button
		loginSignOutAutomationPractice.ohadButtonClick();
		browser.sleep(2000);
		
		//Back to Account Button 
		loginSignOutAutomationPractice.btabButtonClick();
		
		//Click Credit slips Button
		loginSignOutAutomationPractice.creditSlipsButtonClick();
		
		//Back to Account Button 
		loginSignOutAutomationPractice.btabButtonClick();
		
		//Click My addresses Button
		loginSignOutAutomationPractice.myAdressButtonClick();
		
		//Back to Account Button 
		loginSignOutAutomationPractice.btabButtonClick();
		
		//Check My Personal Information is present
		expect(loginSignOutAutomationPractice.myPersonalInformationButtonPresent()).toBeTruthy();
		
		//Check My wishlists is present
		expect(loginSignOutAutomationPractice.myWishlistButtonPresent()).toBeTruthy();
		
		//Click Women Button
		loginSignOutAutomationPractice.womenButtonClick();
		
		//Check Women text1
		expect(loginSignOutAutomationPractice.checkWomenText()).toBe(text);
		
		//Check Women text2
		expect(loginSignOutAutomationPractice.checkWomenText2()).toBe(text2);
		
		//Click Dresses Button
		loginSignOutAutomationPractice.dressesButtonClick();
		
		//Check Dresses text
		expect(loginSignOutAutomationPractice.checkDressesText()).toBe(text3);
		
		//Click T-Shirts Button
		loginSignOutAutomationPractice.tshirtButtonClick();
		
		//Check T-shirts text
		expect(loginSignOutAutomationPractice.checkTshirtText()).toBe(text4);
		
		//Sign out Button Click
		loginSignOutAutomationPractice.signOutButtonClick();
		browser.sleep(3000);
		
		//Verify Sign in Button 
		expect(loginSignOutAutomationPractice.verifySignInButtonText()).toBe(text5);
		
		
		
		
	};
	
	return loginSignOutAutomationPractice;
	
})(require('../02_Functions/basePageObj.js'));