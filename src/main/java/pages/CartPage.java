package pages;

import org.openqa.selenium.By;
import org.junit.Assert;
import org.junit.Test;

public class CartPage extends BaseURL {
	
	
	public void VerifyCartItems(String itemName,String noOfitem) {
		String count = driver.findElement(By.xpath("//td[contains(text(),'"+itemName+"')]//parent::tr//td[3]//input")).getAttribute("value");
		int i = Integer.parseInt(count);
		Assert.assertEquals(noOfitem, count);
		}

}
