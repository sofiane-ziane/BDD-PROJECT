package pages;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBase {
	public static WebDriver driver;
	public int i = RAND(555);
	public static void initDriver() {
		System.setProperty("webdriver.chrome.driver", ".\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(3, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://techfios.com/billing/?ng=admin/");
	}
	public void TakeScreenshot(WebDriver driver) throws IOException {
		TakesScreenshot ts = (TakesScreenshot)driver;
		File sourceFile = ts.getScreenshotAs(OutputType.FILE);
		
		SimpleDateFormat Formmater = new SimpleDateFormat("MMddyy_HHmmss");
		Date date = new Date();
		String label = Formmater.format(date);
		
		String currentdirectory = System.getProperty("user.dir");
		FileUtils.copyFile(sourceFile, new File(currentdirectory + "/screenshot/" + label + ".png"));
		
	}
	public int RAND(int i) {
		Random rnd = new Random();
		int dom = rnd.nextInt(i);
		return dom;
	}
}
