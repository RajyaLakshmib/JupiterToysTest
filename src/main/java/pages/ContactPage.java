package pages;

import org.openqa.selenium.By;

import org.junit.Assert;
import org.junit.Test; 

public class ContactPage extends BaseURL {
	
	public void pageVerification() {
		String header = driver.findElement(By.xpath("//*[@id=\"header-message\"]/div/strong")).getText();
		Assert.assertEquals("We welcome your feedback",header);
	}
	
	public void clickOnSubmit() {
		driver.findElement(By.linkText("Submit")).click();
			
	}
	
	public void errorMessageOnForenameField(String str) {
		int count = driver.findElements(By.id("forename-err")).size();
		String actual = "";
		if(count>0) {
	     actual = driver.findElement(By.id("forename-err")).getText();
		}
		Assert.assertEquals(str, actual);
	
	}
	
	public void errorMessageOnEmailField(String str) {
		int count = driver.findElements(By.id("email-err")).size();
		String actual  = "";
		if(count>0) {
		 actual = driver.findElement(By.id("email-err")).getText();
		}
		Assert.assertEquals(str, actual);
	
	}
	
	
	public void errorMessageOnMessageField(String str) {
		int count = driver.findElements(By.id("message-err")).size();
		String actual = "";
		if(count>0) {
		 actual = driver.findElement(By.id("message-err")).getText();
		}
		Assert.assertEquals(str, actual);
	}
	
	public void enterValueOnForename(String str) {
		driver.findElement(By.id("forename")).sendKeys(str);			
	}
	
	public void enterValueOnEmail(String str) {
		driver.findElement(By.id("email")).sendKeys(str);
	}
	
	public void enterValueOnMessage(String str) {
		driver.findElement(By.id("message")).sendKeys(str);
	}
	
	public void isErrorMessage() {
		int count = driver.findElements(By.xpath("//*[contains(@id,\"-err\")]")).size();
		System.out.println("**********************************"+count);
		Assert.assertTrue("Error message validation on Contact page ", count==0);		
	}
	
	public void successfulSubmissionMessage(String str) throws InterruptedException {
		//Thread.sleep(5000);
		String result = driver.findElement(By.xpath("//*[@class = 'ng-binding']")).getText();
		Assert.assertEquals("Thanks "+str+"", result);
		
	}

}
