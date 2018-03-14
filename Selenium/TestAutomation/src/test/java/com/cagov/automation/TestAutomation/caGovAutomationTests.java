package com.cagov.automation.TestAutomation;

import java.io.File;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.testng.annotations.Test;

public class caGovAutomationTests 
{
	@Test
	public void testCAGovURLs() throws InterruptedException
	{
		/**
		 * 
		 
		File file = new File("C:\\workBench_Oxygen\\applications\\IEDriverServer.exe");
		System.setProperty("webdriver.ie.driver", file.getAbsolutePath());
		WebDriver driver = new InternetExplorerDriver();
		 */
		
	    File file = new File("C:\\workBench_Oxygen\\applications\\chromedriver.exe");
	    System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());
	    WebDriver driver = new ChromeDriver();
		
		String baseUrl = "http://ec2-18-144-75-92.us-west-1.compute.amazonaws.com:8088";
		String dataServicesServer = "https://13.57.242.90:9443/carbon/admin/login.jsp";
		String apiManagerUrl = "https://13.57.242.90:9444/publisher/site/pages/login.jag";
		
		driver.get(baseUrl);
		Thread.sleep(3000);
			
		/**
		 * 
		
		driver.get(dataServicesServer);
		driver.findElement(By.id("txtUserName")).click();
	    driver.findElement(By.id("txtUserName")).clear();
	    driver.findElement(By.id("txtUserName")).sendKeys("admin");
	    driver.findElement(By.id("txtPassword")).click();
	    driver.findElement(By.id("txtPassword")).clear();
	    driver.findElement(By.id("txtPassword")).sendKeys("admin");
	    driver.findElement(By.xpath("//input[@value='Sign-in']")).click();
	    Thread.sleep(3000);
	    
	    driver.findElement(By.xpath("//div[@id='middle']/p")).click();
	    driver.findElement(By.linkText("Sign-out")).click();
	     */
		
		/**
		 * 
		 
	    driver.get(apiManagerUrl);
	    driver.findElement(By.id("username")).click();
	    driver.findElement(By.id("username")).clear();
	    driver.findElement(By.id("username")).sendKeys("admin");
	    driver.findElement(By.id("pass")).clear();
	    driver.findElement(By.id("pass")).sendKeys("admin");
	    driver.findElement(By.xpath("//button[@type='button']")).click();
	    Thread.sleep(3000);
	    */
	    //Ignore Below code.
		
		//driver.findElement(By.xpath("//li[2]/a/span[2]")).click();
	    //driver.findElement(By.linkText("Logout")).click();
	    
		//driver.findElement(By.name("login")).click();
		//Thread.sleep(3000);
	    //driver.findElement(By.xpath("//div[@id='inverseNavbar1']/ul/li[2]/button")).click();
	    
	    // driver.findElement(By.xpath("//div[@id='inverseNavbar1']/ul/li[2]/button")).click();
	    // driver.findElement(By.xpath("//div[@id='features']/table/tbody/tr/td[2]")).click();
		
		driver.close();
	}
}
