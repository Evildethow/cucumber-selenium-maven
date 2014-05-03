package org.evildethow.cucumber;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@Cucumber.Options(format = { "json:target/report.json" })
public class RunCukesIT {
}
