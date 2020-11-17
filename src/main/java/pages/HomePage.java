package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import org.junit.Assert;
import org.junit.Test; 

public class HomePage extends BaseURL{
	
	public void openJupiterHomepage() {
		initialization();
		Assert.assertEquals("Jupiter Toys", driver.getTitle());		
	}
	public ContactPage clickOnContactLink() throws InterruptedException {
		driver.findElement(By.linkText("Contact")).click();
		//Thread.sleep(5000);
		
		return new ContactPage();
		
		
	}
	
	public ShopPage clickOnShopLink() {
		driver.findElement(By.linkText("Shop")).click();
		return new ShopPage();
	}

}
