module.exports = (function () {
	
	var that = {};
	
		
		//SCROLL FUNCTION
    	that.scrollElemFinderIntoView = function(elemFinder) {
    		var promise = browser.executeScript(function(elem) {
    			elem.scrollIntoView(false);
    		}, elemFinder);
    		return promise;
    	};
    	
    	//Click Sign In button
    	that.signInButtonClick = function(){
    		return element(by.className("header_user_info")).click();
    	};
    
    	
    	//Fill username
    	that.insertUserName = function (username){
    		return element(by.id("email")).sendKeys(username);
    	};
    	
    	//Fill password
    	that.insertPassword = function(password){
    		return element (by.id("passwd")).sendKeys(password);
    	}
    	
    	//Click Submit button
    	that.submitButtonClick = function(){
    		return element(by.id("SubmitLogin")).click();
    	};
    	
    	//Click Order history and details Button
    	that.ohadButtonClick = function(){
    		return element(by.xpath("//div[@class='row addresses-lists']//div[1]//ul[1]//li[1]//a[1]")).click();
    	};
    	
    	//Click Back to Account Button 
    	that.btabButtonClick = function(){
    		return element(by.xpath("//div[@class='columns-container']//li[1]//a[1]")).click();
    	};
    	
    	//Click Credit slips Button
    	that.creditSlipsButtonClick = function(){
    		return element(by.className("icon-ban-circle")).click();
    	};
    	
    	//Click My Adress Button
    	that.myAdressButtonClick = function(){
    		return element(by.className("icon-building")).click();
    	};
    	
    	//Check My personal information is Present
    	that.myPersonalInformationButtonPresent = function(){
    		return element(by.className("icon-user")).isPresent();
    	};
    	
    	//Check My wishlists is present
    	that.myWishlistButtonPresent = function(){
    		return element(by.className("icon-heart")).isPresent();
    	};
    	
    	//Click Women Button
    	that.womenButtonClick = function(){
    		return element(by.className("sf-with-ul")).click();
    	};
    	
    	//Check Women text
    	that.checkWomenText = function(text){
    		return element(by.className("category-name")).getText(text);
    	};
    	
    	//Check Women text2
    	that.checkWomenText2 = function(text2){
    		return element(by.className("title_block")).getText(text2);
    	};
    	
    	//Click Dresses Button
    	that.dressesButtonClick = function(){
    	return element(by.linkText("Dresses")).click();
    	};
    	
    	//Check Dresses text
    	that.checkDressesText = function(text3){
    		return element(by.linkText("Casual Dresses")).getText(text3);
    	};
    	
    	//Click T-Shirts Button
    	that.tshirtButtonClick = function(){
    		return element(by.xpath("//*[@id='block_top_menu']/ul/li[3]/a")).click();
    	};
    	
    	//Check T-shirts text
    	that.checkTshirtText = function(text4){
    		return element(by.className("category-name")).getText(text4);
    	};
    	
    	//Sign out Button Click
    	that.signOutButtonClick = function(){
    		return element(by.className("logout")).click();
    	};
    	
    	//Verify Sign in Button 
    	that.verifySignInButtonText = function(text5){
    		return element(by.className("login")).getText(text5);
    	}
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	return that;
    	
})();
