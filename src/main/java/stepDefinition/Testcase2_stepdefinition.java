package stepDefinition;

import cucumber.api.java.en.Then;
import pages.BaseURL;
import pages.ContactPage;

public class Testcase2_stepdefinition extends BaseURL  {
	ContactPage contactPage = new ContactPage();
	
	//Validate successful feedback message
	  @Then("^validate successful submission message of (.*)$")
	  public void validate_successful_submission_message(String str) throws InterruptedException {
		 contactPage.successfulSubmissionMessage(str);
		  
	  }

}
