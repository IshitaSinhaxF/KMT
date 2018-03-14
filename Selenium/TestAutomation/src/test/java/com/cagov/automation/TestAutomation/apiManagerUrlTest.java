package com.cagov.automation.TestAutomation;

import java.io.File;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class apiManagerUrlTest {
	
	@Test
	public void testAPIManagerUrl() throws InterruptedException
	{
		File file = new File("C:\\workBench_Oxygen\\applications\\chromedriver.exe");
	    System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());
	    WebDriver driver = new ChromeDriver();
	    

		String apiManagerUrl = "https://13.57.242.90:9444/publisher/site/pages/login.jag";
	    
	    driver.get(apiManagerUrl);
	    driver.findElement(By.id("username")).click();
	    driver.findElement(By.id("username")).clear();
	    driver.findElement(By.id("username")).sendKeys("admin");
	    driver.findElement(By.id("pass")).clear();
	    driver.findElement(By.id("pass")).sendKeys("admin");
	    driver.findElement(By.xpath("//button[@type='button']")).click();
	    Thread.sleep(3000);
	    
	    driver.close();
	}
}
