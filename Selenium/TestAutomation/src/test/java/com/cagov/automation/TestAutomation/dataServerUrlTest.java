package com.cagov.automation.TestAutomation;

import java.io.File;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class dataServerUrlTest {
	
	@Test
	public void testDataServerUrl() throws InterruptedException
	{
		File file = new File("C:\\workBench_Oxygen\\applications\\chromedriver.exe");
	    System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());
	    WebDriver driver = new ChromeDriver();
	    
	    String dataServicesServer = "https://13.57.242.90:9443/carbon/admin/login.jsp";
	    
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
	    
	    driver.close();
	}
	

}
