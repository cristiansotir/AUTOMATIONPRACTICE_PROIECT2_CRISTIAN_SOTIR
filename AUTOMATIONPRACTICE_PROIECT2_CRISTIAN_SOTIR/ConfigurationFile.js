var Jasmine2HtmlReporter = require('C:/Users/User1064/eclipse-workspace/ProtractorLibrary/node_modules/protractor-jasmine2-html-reporter');
var JasmineNewReporters = require('C:/Users/User1064/eclipse-workspace/ProtractorLibrary/node_modules/jasmine-reporters');
var HTMLReport = require('C:/Users/User1064/eclipse-workspace/ProtractorLibrary/node_modules/protractor-html-reporter-2');
var timeStamp = new Date().getTime();


	exports.config = {
			//The address of a running selenium server
			//seleniumAddress: 'http://localhost:4444/wd/hub',
			chromeDriver: 'C:/Users/User1064/eclipse-workspace/ProtractorLibrary/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_83.0.4103.39.exe',
			directConnect: true,
			
			//Capabilities to be passed to the webdriver instance.
			capabilities:{
				'browserName' : 'chrome',
			},
			
			//Framework to use: Jasmine
			framework:'jasmine',
			
			onPrepare: function() {
				//browser.driver.manage().window().maximize();
				browser.waitForAngularEnabled(false);
				browser.driver.manage().window().maximize();
				
				jasmine.getEnv().addReporter(
						new Jasmine2HtmlReporter({
							savePath: 'C:/Users/User1064/eclipse-workspace/Project1/target/screenshots',
							showSummary: true,
	                         showQuickLinks: true,
	                         showConfiguration: true,
	                         screenshotsFolder: 'images',
	                         takeScreenshots: true,
	                         takeScreenshotsOnlyOnFailures: true,
	                         fixedScreenshotName: true,
	                         ignoreSkippedSpecs: true,
	                         cleanDestination: true,
	                         consolidate: true,
	                         consolidateAll: true,
	                         preserveDirectory: true,                                                                                                          
	                         fileName: 'Protractor-Execution-Report-' + timeStamp
						})
						);
				
				
				
				jasmine.getEnv().addReporter(new JasmineNewReporters.JUnitXmlReporter({
	            	consolidateAll: true,
	            	savePath: 'C:/Users/User1064/eclipse-workspace/Project1/testresults',
	            	filePrefix: 'xmloutput'
	            }));
				
			},
			
			
			// Options to be passed to Jasmine.
			 jasmineNodeOpts: {
				 showColors: true,
				 isVerbose: true,
				 realtimeFailure: true,
				 includeStackTrace: true,
				 defaultTimeoutInterval: 500000,
			 },
			 
			 
			 
			 
			specs: ['../AUTOMATIONPRACTICE_PROIECT2_CRISTIAN_SOTIR/01_Scenarios/spec_LoginSignOutAutomationPractice.js'],
				
				
				suites:{		    	  
				  	suite:[
				  			//'../Project1/01_Scenarios/spec_LoadPage.js',
				  			//'../',

				  	] 
				},
			 
			 
				
				
				onComplete: function() {
					
					var browserName, browserVersion;
					var capsPromise = browser.getCapabilities();
					
					capsPromise.then(function (caps){
					browserName = caps.get('browserName');
					browserVersion = caps.get('browserVersion');
					platform = caps.get('platform');
					
					testConfig = {
							reportTitle: 'Protractor Test Execution Report',
							outputPath: 'C:/Users/User1064/eclipse-workspace/Project1/testresults',
							outputFilename: 'ProtractorTestReport',
							//screenshotPath: 'C:/Users/User1064/eclipse-workspace/Project1/testresults/screenshots',
							testBrowser: browserName,
							browserVersion: browserVersion,
							modifiedSuiteName: false,
							screenshotsOnlyFailure: true,
							testPlatform: platform
					};
					
					new HTMLReport().from('C:/Users/User1064/eclipse-workspace/Project1/testresults/xmloutput.xml', testConfig);
					
					
					});
					
					browser.driver.close ().then(function(){
						browser.driver.quit();
					});
				},

			

			
	};