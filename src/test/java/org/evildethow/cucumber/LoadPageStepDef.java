package org.evildethow.cucumber;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.evildethow.cucumber.connectors.WebConnector;

import static org.junit.Assert.assertTrue;

public class LoadPageStepDef {
    private WebConnector connector;

    public LoadPageStepDef(WebConnector connector) {
        this.connector = connector;
    }

    @Before
    public void beforeScenario() {
        System.out.println(" *** Before");
    }

    @After
    public void afterScenario() {
        System.out.println(" *** After");
    }

    @Given("^I am a user with the splookifying module$")
    public void I_am_a_user_with_the_splookifying_module() {
        System.out.println("I am a user with the splookifying module");
    }

    @When("^I load the page$")
    public void I_load_the_page() {
        connector.openAndWait("http://localhost:8080/cucumber-selenium-maven/");
    }

    @Then("^I should see a greeting$")
    public void I_should_see_a_greeting() {
        assertTrue(connector.isTextPresent("Hello World"));
    }

}

