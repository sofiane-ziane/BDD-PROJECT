package steps;
import org.openqa.selenium.support.PageFactory;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.Loginpage;
import pages.MyAccount;
import pages.TestBase;
public class StepsDefinitions extends TestBase {

	Loginpage loginpage; // initializing
	MyAccount newBankAccount;
	

	@Before
	public void beforerun() { // or defining
		initDriver();
		loginpage = PageFactory.initElements(driver, Loginpage.class);
		newBankAccount = PageFactory.initElements(driver, MyAccount.class);
	
	}

	@Given("^User is on techfios login_page$")
	public void User_is_on_techfios_login_page() {

		//driver.get("https://techfios.com/billing/?ng=admin/");
	}

	

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() throws Throwable {
		System.out.println("user landed in dashbord page");
		String expected = "Dashboard- iBilling";
		String actual = loginpage.GetTitleText();

		Assert.assertEquals("this not right page", expected, actual);
	}

	@And("^User clicks on \"([^\"]*)\"$")
	public void User_clicks_on(String button) {
		switch (button) {
		case "signin":
			loginpage.clickLG();
			break;

		case "Bank Cash":
			newBankAccount.Bank_Cash1();
			break;

		case "new account":
			newBankAccount.new_account1();
			break;

		case "submit":
			newBankAccount.submit1();
			break;
		default:
			System.out.println("unable to click!");
			break;
		}

	}
	@When("^User enters username as \"([^\"]*)\"$")
	public void User_enters_username_as(String username) throws Throwable {
		loginpage.enterUN(username);
	}
	@When("^User enters password as \"([^\"]*)\"$")
	public void User_enters_password_as(String password) throws Throwable {
		loginpage.enterPW(password);
	}
	@When("^User enters AccountTitle as \"([^\"]*)\"$")
	public void User_enters_AccountTitle_as(String AccountTitle) throws Throwable {
		newBankAccount.Account_Title1(AccountTitle);
	}
	@When("^User enters Descriptions as \"([^\"]*)\"$")
	public void User_enters_Descriptions_as(String Descriptions) throws Throwable {
		newBankAccount.Description1(Descriptions);
	}
	@When("^User enters InitialBalance as \"([^\"]*)\"$")
	public void User_enters_InitialBalance_as(String InitialBalance) throws Throwable {
		newBankAccount.Initial_Balance1(InitialBalance);
	}
	@When("^User enters AccountNumber as \"([^\"]*)\"$")
	public void User_enters_AccountNumber_as(String AccountNumber) throws Throwable {
		newBankAccount.Account_Number1(AccountNumber);
	}
	@When("^User enters ContactPerson as \"([^\"]*)\"$")
	public void User_enters_ContactPerson_as(String ContactPerson) throws Throwable {
		newBankAccount.Contact_Person1(ContactPerson);
	}
	@When("^User enters Phones as \"([^\"]*)\"$")
	public void User_enters_Phones_as(String Phones) throws Throwable {
		newBankAccount.Phone1(Phones);
	}
	@When("^User enters InternetBankingURL as \"([^\"]*)\"$")
	public void User_enters_InternetBankingURL_as(String InternetBankingURL) throws Throwable {
		newBankAccount.Internet_Banking_URL1(InternetBankingURL);
	}
	

	@Then("^User should land on account page$")
	public void User_should_land_on_account_page() throws Throwable {
		System.out.println("user landed in account page");
		String expected = "Accounts- iBilling";
		String actual = newBankAccount.GetTitleText();
		Assert.assertEquals("this not right page", expected, actual);
	}

	


	@After
	public void teardown() throws InterruptedException {
		Thread.sleep(3000);
		driver.close();
		driver.quit();

	}
}
