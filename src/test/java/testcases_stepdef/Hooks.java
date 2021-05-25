package testcases_stepdef;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import BaseClass.browsersetup;
import PageObjectory.loginpage;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import utility.utility;


public class Hooks extends browsersetup {
	loginpage lg;
	utility ut;
	static String configfilepath = System.getProperty("user.dir") + "//config//file.properties";
	static Properties prop;
	static FileInputStream fileInput;

	public static void Configuration() {
		try {
			fileInput = new FileInputStream(configfilepath);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		prop = new Properties();
		try {
			prop.load(fileInput);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@Before
	public void setUp() throws InterruptedException {
		System.out.println("Open the browser");
		Configuration();
		driver = browsersetup.setup(prop.getProperty("Browsername"), prop.getProperty("Url"));
		lg = new loginpage(driver);
		ut= new utility(driver);
		lg.Username(prop.getProperty("Username"));
		lg.Password(prop.getProperty("Password"));
		lg.LoginBtn();
		ut.pause(100);
	}

	@After
	public void tearDown(Scenario scenario) {
		 try {
		     if (scenario.isFailed()) {
		       final byte[] screenshot = ((TakesScreenshot) driver)
		           .getScreenshotAs(OutputType.BYTES);
		       scenario.embed(screenshot, "image/png");
		     }
		   } finally {
		     driver.quit();
		   }
		 }
}