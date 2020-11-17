package stepDefinition;

import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.BaseURL;
import pages.CartPage;
import pages.HomePage;
import pages.ShopPage;

public class Testcase4_stepdefinition extends BaseURL {
	
	HomePage homePage = new HomePage();
	ShopPage shopPage = new ShopPage();
	CartPage cartPage = new CartPage();
	
	//Go to Shop Page
	@And("^from the home page go to shop page$")
	public void from_the_home_page_go_to_shop_page() {
		homePage.clickOnShopLink();
	}
	
	//Select item and add in cart
	@When("^click buy button 2 times on (.*)$")
	public void click_buy_button_2_times_on_funny_cow(String str) throws InterruptedException {
		shopPage.clickOnBuy(str);
		shopPage.clickOnBuy(str);		
	}
	
	//Select item and add in cart
	@And("^click buy button 1 time on (.*)$")
	public void click_buy_button_1_time_on_Fluffy_Bunny(String str) throws InterruptedException {
		shopPage.clickOnBuy(str);
	}
	
	//GO to Cart page
	@And("^click the cart menu$")
	public void click_the_cart_menu() {
		shopPage.clickOnCartMenu();
	}
	
	
	//Verify items in cart
	@Then("^verify the items are in the cart$")
	public void verify_the_items_are_in_the_cart(DataTable dealData) {
		for(Map<String, String> data : dealData.asMaps(String.class, String.class)) {
		cartPage.VerifyCartItems(data.get("ItemName"),data.get("NoOfItems"));
		}
	}

}
