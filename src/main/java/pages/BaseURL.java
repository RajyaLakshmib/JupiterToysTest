package pages;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseURL {


	public static WebDriver driver;
	
	public static void initialization() {
	
			//system.setProperty("webdriver.chrome.driver","");
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("http://jupiter.cloud.planittesting.com");
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		
		}
		
	
	
	
}
