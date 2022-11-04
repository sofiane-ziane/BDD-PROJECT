package pages;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
public class Loginpage {

	 //1.Global variable
		WebDriver driver;
		//4.create constructor
		public Loginpage(WebDriver driver) {  
			this.driver = driver;
		}
		//2.Global WebElement 												    //instead to this	
		@FindBy(how=How.XPATH, using="//input[@id='username']")WebElement usr;
		//instead/WebElement usr = driver.findElement(By.xpath("//*[@id=\"username\"]"));
		@FindBy(how=How.XPATH, using="//input[@id='password']")WebElement psw;
		//instead//WebElement psw = driver.findElement(By.xpath("//*[@id=\"password\"]")); 
		@FindBy(how=How.XPATH, using="html/body/div/div/div/form/div[3]/button")WebElement lg;
		//instead//WebElement lg = driver.findElement(By.xpath("html/body/div/div/div/form/div[3]/button"));
		
		//3.Interactive methode1 hard but easy for maintenace:
		public void enterUN (String username) {
		usr.sendKeys(username);

		}
		
		public  void enterPW (String password) {
		psw.sendKeys(password);
		
		}
		public  void clickLG () {
		lg.click();

		}

		public String GetTitleText() {
			
			return driver.getTitle();
		}

		
}
