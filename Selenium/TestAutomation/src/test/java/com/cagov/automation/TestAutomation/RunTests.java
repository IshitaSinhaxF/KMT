package com.cagov.automation.TestAutomation;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.apache.log4j.Logger;
import org.testng.Assert;
import org.testng.TestNG;
import org.testng.xml.Parser;
import org.testng.xml.XmlSuite;

public class RunTests {

	private static Logger appLog = Logger.getLogger(RunTests.class.getName());
	static List<XmlSuite> testSuites = new ArrayList<XmlSuite>();
	static Collection<XmlSuite> suites;
	
	public static void main(String[] args) 
	{
		// TODO Auto-generated method stub
		manageTestSuites("testng.xml");
		
		String resultFolder = "C:\\workBench_Oxygen\\TestResult\\";
		appLog.info(resultFolder);
		
		TestNG tng = new TestNG();
		tng.setXmlSuites(testSuites);
		tng.setOutputDirectory(resultFolder);
		//tng.addListener(new CustomTestListener());
		//tng.addListener(new SuiteSummaryReporter());
		tng.run();
	}
	
	public static void manageTestSuites(String SuiteName){
		
		try{
			suites = new Parser("src/test/resources/"+SuiteName).parse();
			for (XmlSuite s : suites)
	    	{
	    		testSuites.add(s);
	    		appLog.debug(testSuites.toString());
	    	}
			
		}catch (Exception e) {
			//add log errors
			Assert.fail(e.getMessage());
		} 
		
	}

}
