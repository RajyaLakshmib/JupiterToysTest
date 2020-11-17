package runner;



import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\main\\java\\Features"
		,glue = {"stepDefinition"}
		,tags = " @TestCase1,  @TestCase2,  @TestCase3,  @TestCase4"
		,monochrome = true
		,plugin = { "pretty","html:report"}
		 )
public class TestRunner {

}
