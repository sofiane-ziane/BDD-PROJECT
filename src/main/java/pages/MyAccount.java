package pages;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
public class MyAccount extends TestBase {
 WebDriver driver;

	public MyAccount(WebDriver driver) {
		this.driver = driver;
	}
@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/a/span[1]")WebElement Bank_Cash;
@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a")WebElement new_account ;
@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[2]/div/h2")WebElement accountDash;
@FindBy(how = How.XPATH, using = "//*[@id=\"account\"]")WebElement Account_Title;
@FindBy(how = How.XPATH, using = "//*[@id=\"description\"]")WebElement Description;
@FindBy(how = How.XPATH, using = "//*[@id=\"balance\"]")WebElement Initial_Balance;
@FindBy(how = How.XPATH, using = "//*[@id=\"account_number\"]")WebElement Account_Number;
@FindBy(how = How.XPATH, using = "//*[@id=\"contact_person\"]")WebElement Contact_Person;
@FindBy(how = How.XPATH, using = "//*[@id=\"contact_phone\"]")WebElement Phone;
@FindBy(how = How.XPATH, using = "//*[@id=\"ib_url\"]")WebElement Internet_Banking_URL;
@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button")WebElement submit;

	public void Bank_Cash1() {
		Bank_Cash.click();
	}
	public void new_account1() {
		new_account.click();
	}
	public String GetTitleText() {
		return driver.getTitle();
	}
	public void Account_Title1(String AccountTitle) {
		Account_Title.sendKeys(AccountTitle +i);
	}
	public void Description1(String Descriptions) {
		Description.sendKeys(Descriptions);
	}
	public void Initial_Balance1(String InitialBalance) {
		Initial_Balance.sendKeys(InitialBalance +i);
	}
	public void Account_Number1(String AccountNumber) {
		Account_Number.sendKeys(AccountNumber +i);
	}
	public void Contact_Person1(String ContactPerson) {
		Contact_Person.sendKeys(ContactPerson);
	}
	public void Phone1(String Phones) {
		Phone.sendKeys(Phones +i);
	}
	public void Internet_Banking_URL1(String InternetBankingURL) {
		Internet_Banking_URL.sendKeys(InternetBankingURL);
	}
	public void submit1() {
		submit.click();
	}
	
	
}
