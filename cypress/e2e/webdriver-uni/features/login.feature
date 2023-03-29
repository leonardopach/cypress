Feature: WebdriverUniversity Login Page

    Scenario: Login Using valid credentials
        Given I acess the WebdriverUniversity Login Portal Page
        When I enter a username webdriver
        And I enter a password webdriver123
        And I click on the login button
        Then I should be presented with the following message validation succeeded


    Scenario: Login Using valid invalid
        Given I acess the WebdriverUniversity Login Portal Page
        When I enter a username asd
        And I enter a password 123
        And I click on the login button
        Then I should be presented with the following message validation failed
