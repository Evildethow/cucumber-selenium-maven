$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("org/evildethow/cucumber/page_load.feature");
formatter.feature({
  "id": "page-loading",
  "description": "As a user,\nI want to load the page\nSo that the dazoodling can be splookified.",
  "name": "Page Loading",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 2906467228,
  "status": "passed"
});
formatter.before({
  "duration": 1397176,
  "status": "passed"
});
formatter.scenario({
  "id": "page-loading;simple-page-loading",
  "tags": [
    {
      "name": "@wip",
      "line": 6
    }
  ],
  "description": "",
  "name": "Simple page loading",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "I am a user with the splookifying module",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "I load the page",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "I should see a greeting",
  "keyword": "Then ",
  "line": 10
});
formatter.match({
  "location": "LoadPageStepDef.I_am_a_user_with_the_splookifying_module()"
});
formatter.result({
  "duration": 125192457,
  "status": "passed"
});
formatter.match({
  "location": "LoadPageStepDef.I_load_the_page()"
});
formatter.result({
  "duration": 635768698,
  "status": "passed"
});
formatter.match({
  "location": "LoadPageStepDef.I_should_see_a_greeting()"
});
formatter.result({
  "duration": 66284126,
  "status": "passed"
});
formatter.after({
  "duration": 9302442,
  "status": "passed"
});
formatter.after({
  "duration": 95194,
  "status": "passed"
});
formatter.before({
  "duration": 2133815970,
  "status": "passed"
});
formatter.before({
  "duration": 307371,
  "status": "passed"
});
formatter.scenario({
  "id": "page-loading;not-so-simple-page-loading",
  "tags": [
    {
      "name": "@foo",
      "line": 12
    }
  ],
  "description": "",
  "name": "Not so simple page loading",
  "keyword": "Scenario",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "I am a user with the splookifying module",
  "keyword": "Given ",
  "line": 14
});
formatter.step({
  "name": "I load the page",
  "keyword": "When ",
  "line": 15
});
formatter.step({
  "name": "I should see a greeting",
  "keyword": "Then ",
  "line": 16
});
formatter.match({
  "location": "LoadPageStepDef.I_am_a_user_with_the_splookifying_module()"
});
formatter.result({
  "duration": 97219,
  "status": "passed"
});
formatter.match({
  "location": "LoadPageStepDef.I_load_the_page()"
});
formatter.result({
  "duration": 174882920,
  "status": "passed"
});
formatter.match({
  "location": "LoadPageStepDef.I_should_see_a_greeting()"
});
formatter.result({
  "duration": 51433847,
  "status": "passed"
});
formatter.after({
  "duration": 8689306,
  "status": "passed"
});
formatter.after({
  "duration": 51752,
  "status": "passed"
});
});