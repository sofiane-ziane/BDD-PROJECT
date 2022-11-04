$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/loginfeature.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios other login functionality validation",
  "description": "",
  "id": "techfios-other-login-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FirstScenario"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "1 user should be able to login with valid credentials",
  "description": "",
  "id": "techfios-other-login-functionality-validation;1-user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on techfios login_page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on \"signin\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"Bank Cash\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"new account\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on account page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters AccountTitle as \"\u003cAccountTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters Descriptions as \"\u003cDescriptions\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters InitialBalance as \"\u003cInitialBalance\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters AccountNumber as \"\u003cAccountNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters ContactPerson as \"\u003cContactPerson\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters Phones as \"\u003cPhones\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters InternetBankingURL as \"\u003cInternetBankingURL\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "techfios-other-login-functionality-validation;1-user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "AccountTitle",
        "Descriptions",
        "InitialBalance",
        "AccountNumber",
        "ContactPerson",
        "Phones",
        "InternetBankingURL"
      ],
      "line": 22,
      "id": "techfios-other-login-functionality-validation;1-user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Myaccount",
        "ownaccount",
        "99999999",
        "1232321",
        "texas",
        "212121233",
        "https://www.homework.com/?advn\u003d4059521906490434\u0026vjk\u003df84635a0db3c54ea"
      ],
      "line": 23,
      "id": "techfios-other-login-functionality-validation;1-user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2972915200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "1 user should be able to login with valid credentials",
  "description": "",
  "id": "techfios-other-login-functionality-validation;1-user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FirstScenario"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on techfios login_page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on \"signin\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"Bank Cash\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"new account\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on account page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters AccountTitle as \"Myaccount\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters Descriptions as \"ownaccount\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters InitialBalance as \"99999999\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters AccountNumber as \"1232321\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters ContactPerson as \"texas\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters Phones as \"212121233\"",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters InternetBankingURL as \"https://www.homework.com/?advn\u003d4059521906490434\u0026vjk\u003df84635a0db3c54ea\"",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.User_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 98924300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.User_enters_username_as(String)"
});
formatter.result({
  "duration": 151227800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "StepsDefinitions.User_enters_password_as(String)"
});
formatter.result({
  "duration": 105936000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signin",
      "offset": 16
    }
  ],
  "location": "StepsDefinitions.User_clicks_on(String)"
});
formatter.result({
  "duration": 824322000,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 12130100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank Cash",
      "offset": 16
    }
  ],
  "location": "StepsDefinitions.User_clicks_on(String)"
});
formatter.result({
  "duration": 116441500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new account",
      "offset": 16
    }
  ],
  "location": "StepsDefinitions.User_clicks_on(String)"
});
formatter.result({
  "duration": 636630000,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.User_should_land_on_account_page()"
});
formatter.result({
  "duration": 10256300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Myaccount",
      "offset": 29
    }
  ],
  "location": "StepsDefinitions.User_enters_AccountTitle_as(String)"
});
formatter.result({
  "duration": 133594500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ownaccount",
      "offset": 29
    }
  ],
  "location": "StepsDefinitions.User_enters_Descriptions_as(String)"
});
formatter.result({
  "duration": 122664800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99999999",
      "offset": 31
    }
  ],
  "location": "StepsDefinitions.User_enters_InitialBalance_as(String)"
});
formatter.result({
  "duration": 143970600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1232321",
      "offset": 30
    }
  ],
  "location": "StepsDefinitions.User_enters_AccountNumber_as(String)"
});
formatter.result({
  "duration": 137838400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "texas",
      "offset": 30
    }
  ],
  "location": "StepsDefinitions.User_enters_ContactPerson_as(String)"
});
formatter.result({
  "duration": 155247800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "212121233",
      "offset": 23
    }
  ],
  "location": "StepsDefinitions.User_enters_Phones_as(String)"
});
formatter.result({
  "duration": 137341200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.homework.com/?advn\u003d4059521906490434\u0026vjk\u003df84635a0db3c54ea",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.User_enters_InternetBankingURL_as(String)"
});
formatter.result({
  "duration": 168964500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 16
    }
  ],
  "location": "StepsDefinitions.User_clicks_on(String)"
});
formatter.result({
  "duration": 465450800,
  "status": "passed"
});
formatter.after({
  "duration": 19894588000,
  "status": "passed"
});
});