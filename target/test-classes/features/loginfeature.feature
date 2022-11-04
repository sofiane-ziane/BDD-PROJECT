@FirstScenario
Feature: Techfios other login functionality validation  
Scenario Outline: 1 user should be able to login with valid credentials 
	
	Given User is on techfios login_page 
	When  User enters username as "<username>" 
	When  User enters password as "<password>" 
	And   User clicks on "signin" 
	Then  User should land on Dashboard page 
	And   User clicks on "Bank Cash"  
	And   User clicks on "new account"
	Then  User should land on account page
	When  User enters AccountTitle as "<AccountTitle>"
	When  User enters Descriptions as "<Descriptions>"
	When  User enters InitialBalance as "<InitialBalance>"
	When  User enters AccountNumber as "<AccountNumber>"
	When  User enters ContactPerson as "<ContactPerson>"
	When  User enters Phones as "<Phones>"
	When  User enters InternetBankingURL as "<InternetBankingURL>"
	And   User clicks on "submit"  
	Examples:
	|username|password|AccountTitle|Descriptions|InitialBalance|AccountNumber|ContactPerson|Phones|InternetBankingURL|
	|demo@techfios.com|abc123|Myaccount|ownaccount|99999999|1232321|texas|212121233|https://www.homework.com/?advn=4059521906490434&vjk=f84635a0db3c54ea|
