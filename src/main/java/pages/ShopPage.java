package pages;

import org.openqa.selenium.By;

public class ShopPage extends BaseURL {
	

	public void clickOnBuy(String str) throws InterruptedException {
		Thread.sleep(5000);
		driver.findElement(By.xpath("//h4[contains(text(),'"+str+"')]//parent::div//following-sibling::p/a")).click();
	}
	
	
	public CartPage clickOnCartMenu() {
		driver.findElement(By.partialLinkText("Cart")).click();
		return new CartPage();
	}
	
	

}
