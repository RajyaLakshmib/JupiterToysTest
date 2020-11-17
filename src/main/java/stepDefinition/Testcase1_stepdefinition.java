package stepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import pages.BaseURL;
import pages.ContactPage;
import pages.HomePage;

import java.util.Map;

import org.junit.Assert;
import org.junit.Test; 


public class Testcase1_stepdefinition extends BaseURL {
	
	HomePage homePage = new HomePage();
	ContactPage contactPage = new ContactPage();
	
	//Open a Jupitor Toys Home Page
	@Given("^user connect to Jupitor Toys home page$")
	public void user_connect_to_JupitorToys_home_page() {		
		homePage.openJupiterHomepage();
	}
	
	
	//Go to Contact Page
	@And("^from the home page go to contact page$")
	public void from_the_home_page_go_to_contact_page() throws InterruptedException{				
			homePage.clickOnContactLink();	
			contactPage.pageVerification();
	}
	
	
	//click on Submit 
	@When("^click submit button$")
	public void click_submit_button() {
		contactPage.clickOnSubmit();
		}
	
	//Error message field validation on Contact page
	@Then("^validate errors$")
	public void validate_errors(DataTable dealData) {
		for(Map<String, String> data : dealData.asMaps(String.class, String.class)) {
		contactPage.errorMessageOnForenameField(data.get("Forename"));
		contactPage.errorMessageOnEmailField(data.get("Email"));
		contactPage.errorMessageOnMessageField(data.get("Message"));
		}
	}
	
	
	//Adding values in contact page mandatory fields
	@And("^populate mandatory fields$")
	public void populate_mandatory_fields(DataTable dealData) {
		for(Map<String, String> data : dealData.asMaps(String.class, String.class)) {
		contactPage.enterValueOnForename(data.get("Forename"));
		contactPage.enterValueOnEmail(data.get("Email"));
		contactPage.enterValueOnMessage(data.get("Message"));
		}
		}
	
	
	//checking error messages disappeared after enter valid mandatory field values
	@And("^validate errors are gone$")
	public void validate_errors_are_gone() {
		contactPage.isErrorMessage();		
	}
	
	//Browser close
	  @And("^browser close$")
	  public void browser_close() {
		  driver.close();
	  }
	

}
