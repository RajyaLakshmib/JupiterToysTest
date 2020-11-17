$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestCase1.feature");
formatter.feature({
  "line": 1,
  "name": "Jupiter Toys Webpage validation",
  "description": "",
  "id": "jupiter-toys-webpage-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Testcase1 Contact page mandatory field validation",
  "description": "",
  "id": "jupiter-toys-webpage-validation;testcase1-contact-page-mandatory-field-validation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@TestCase1"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user connect to Jupitor Toys home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "from the home page go to contact page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click submit button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "validate errors",
  "rows": [
    {
      "cells": [
        "Forename",
        "Email",
        "Message"
      ],
      "line": 8
    },
    {
      "cells": [
        "Forename is required",
        "Email is required",
        "Message is required"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "populate mandatory fields",
  "rows": [
    {
      "cells": [
        "Forename",
        "Email",
        "Message"
      ],
      "line": 11
    },
    {
      "cells": [
        "Rajya",
        "abc@planit.net.au",
        "NA"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "validate errors are gone",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "browser close",
  "keyword": "And "
});
formatter.match({
  "location": "Testcase1_stepdefinition.user_connect_to_JupitorToys_home_page()"
});
formatter.result({
  "duration": 8413602300,
  "status": "passed"
});
formatter.match({
  "location": "Testcase1_stepdefinition.from_the_home_page_go_to_contact_page()"
});
formatter.result({
  "duration": 411027700,
  "status": "passed"
});
formatter.match({
  "location": "Testcase1_stepdefinition.click_submit_button()"
});
formatter.result({
  "duration": 106460800,
  "status": "passed"
});
formatter.match({
  "location": "Testcase1_stepdefinition.validate_errors(DataTable)"
});
formatter.result({
  "duration": 216023100,
  "status": "passed"
});
formatter.match({
  "location": "Testcase1_stepdefinition.populate_mandatory_fields(DataTable)"
});
formatter.result({
  "duration": 288786000,
  "status": "passed"
});
formatter.match({
  "location": "Testcase1_stepdefinition.validate_errors_are_gone()"
});
formatter.result({
  "duration": 20029443100,
  "status": "passed"
});
formatter.match({
  "location": "Testcase1_stepdefinition.browser_close()"
});
formatter.result({
  "duration": 65751100,
  "status": "passed"
});
formatter.uri("TestCase2.feature");
formatter.feature({
  "line": 1,
  "name": "Jupiter Toys Webpage validation",
  "description": "",
  "id": "jupiter-toys-webpage-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Testcase2 Successful submission of Contact page details",
  "description": "",
  "id": "jupiter-toys-webpage-validation;testcase2-successful-submission-of-contact-page-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TestCase2"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user connect to Jupitor Toys home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "from the home page go to contact page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "populate mandatory fields",
  "rows": [
    {
      "cells": [
        "Forename",
        "Email",
        "Message"
      ],
      "line": 8
    },
    {
      "cells": [
        "Rajya",
        "abc@planit.net.au",
        "NA"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click submit button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "validate successful submission message of Rajya",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "browser close",
  "keyword": "And "
});
formatter.match({
  "location": "Testcase1_stepdefinition.user_connect_to_JupitorToys_home_page()"
});
formatter.result({
  "duration": 6375131400,
  "status": "passed"
});
formatter.match({
  "location": "Testcase1_stepdefinition.from_the_home_page_go_to_contact_page()"
});
formatter.result({
  "duration": 375455100,
  "status": "passed"
});
formatter.match({
  "location": "Testcase1_stepdefinition.populate_mandatory_fields(DataTable)"
});
formatter.result({
  "duration": 343790400,
  "status": "passed"
});
formatter.match({
  "location": "Testcase1_stepdefinition.click_submit_button()"
});
formatter.result({
  "duration": 97664900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rajya",
      "offset": 42
    }
  ],
  "location": "Testcase2_stepdefinition.validate_successful_submission_message(String)"
});
formatter.result({
  "duration": 1035741900,
  "status": "passed"
});
formatter.match({
  "location": "Testcase1_stepdefinition.browser_close()"
});
formatter.result({
  "duration": 47444800,
  "status": "passed"
});
formatter.uri("TestCase3.feature");
formatter.feature({
  "line": 1,
  "name": "Jupiter Toys Webpage validation",
  "description": "",
  "id": "jupiter-toys-webpage-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Testcase3 Contact page error validation on mandatory fields by giving invalid data",
  "description": "",
  "id": "jupiter-toys-webpage-validation;testcase3-contact-page-error-validation-on-mandatory-fields-by-giving-invalid-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TestCase3"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user connect to Jupitor Toys home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "from the home page go to contact page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#with invalid data"
    }
  ],
  "line": 8,
  "name": "populate mandatory fields",
  "rows": [
    {
      "cells": [
        "Forename",
        "Email",
        "Message"
      ],
      "line": 9
    },
    {
      "cells": [
        "*",
        "abc@123",
        "~~"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "validate errors",
  "rows": [
    {
      "cells": [
        "Forename",
        "Email",
        "Message"
      ],
      "line": 12
    },
    {
      "cells": [
        "",
        "Please enter a valid email",
        ""
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "browser close",
  "keyword": "And "
});
formatter.match({
  "location": "Testcase1_stepdefinition.user_connect_to_JupitorToys_home_page()"
});
formatter.result({
  "duration": 6667091700,
  "status": "passed"
});
formatter.match({
  "location": "Testcase1_stepdefinition.from_the_home_page_go_to_contact_page()"
});
formatter.result({
  "duration": 428683800,
  "status": "passed"
});
formatter.match({
  "location": "Testcase1_stepdefinition.populate_mandatory_fields(DataTable)"
});
formatter.result({
  "duration": 289733500,
  "status": "passed"
});
formatter.match({
  "location": "Testcase1_stepdefinition.validate_errors(DataTable)"
});
formatter.result({
  "duration": 40174000600,
  "status": "passed"
});
formatter.match({
  "location": "Testcase1_stepdefinition.browser_close()"
});
formatter.result({
  "duration": 58136100,
  "status": "passed"
});
formatter.uri("TestCase4.feature");
formatter.feature({
  "line": 1,
  "name": "Jupiter Toys Webpage validation",
  "description": "",
  "id": "jupiter-toys-webpage-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Testcase4 Verify shop page items in Cart",
  "description": "",
  "id": "jupiter-toys-webpage-validation;testcase4-verify-shop-page-items-in-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TestCase4"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user connect to Jupitor Toys home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "from the home page go to shop page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click buy button 2 times on Funny Cow",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click buy button 1 time on Fluffy Bunny",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click the cart menu",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify the items are in the cart",
  "rows": [
    {
      "cells": [
        "ItemName",
        "NoOfItems"
      ],
      "line": 11
    },
    {
      "cells": [
        "Funny Cow",
        "2"
      ],
      "line": 12
    },
    {
      "cells": [
        "Fluffy Bunny",
        "1"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "browser close",
  "keyword": "And "
});
formatter.match({
  "location": "Testcase1_stepdefinition.user_connect_to_JupitorToys_home_page()"
});
formatter.result({
  "duration": 6437366500,
  "status": "passed"
});
formatter.match({
  "location": "Testcase4_stepdefinition.from_the_home_page_go_to_shop_page()"
});
formatter.result({
  "duration": 103737700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Funny Cow",
      "offset": 28
    }
  ],
  "location": "Testcase4_stepdefinition.click_buy_button_2_times_on_funny_cow(String)"
});
formatter.result({
  "duration": 10154255200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fluffy Bunny",
      "offset": 27
    }
  ],
  "location": "Testcase4_stepdefinition.click_buy_button_1_time_on_Fluffy_Bunny(String)"
});
formatter.result({
  "duration": 5079418500,
  "status": "passed"
});
formatter.match({
  "location": "Testcase4_stepdefinition.click_the_cart_menu()"
});
formatter.result({
  "duration": 92554000,
  "status": "passed"
});
formatter.match({
  "location": "Testcase4_stepdefinition.verify_the_items_are_in_the_cart(DataTable)"
});
formatter.result({
  "duration": 338862200,
  "status": "passed"
});
formatter.match({
  "location": "Testcase1_stepdefinition.browser_close()"
});
formatter.result({
  "duration": 48857800,
  "status": "passed"
});
});