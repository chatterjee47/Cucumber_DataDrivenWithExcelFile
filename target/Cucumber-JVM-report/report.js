$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginpage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "enter System UserName and click search button",
  "description": "",
  "id": "login-functionality;enter-system-username-and-click-search-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Admin"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User clicks admin tab",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks user management tab",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters system username \"\u003csystemusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks search button",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "login-functionality;enter-system-username-and-click-search-button;",
  "rows": [
    {
      "cells": [
        "systemusername"
      ],
      "line": 11,
      "id": "login-functionality;enter-system-username-and-click-search-button;;1"
    },
    {
      "cells": [
        "admin"
      ],
      "line": 12,
      "id": "login-functionality;enter-system-username-and-click-search-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10213503100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "enter System UserName and click search button",
  "description": "",
  "id": "login-functionality;enter-system-username-and-click-search-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Admin"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User clicks admin tab",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks user management tab",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters system username \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks search button",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminStep.user_clicks_admin_tab()"
});
formatter.result({
  "duration": 1684174900,
  "status": "passed"
});
formatter.match({
  "location": "AdminStep.user_clicks_user_management_tab()"
});
formatter.result({
  "duration": 85096400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 29
    }
  ],
  "location": "AdminStep.user_enters_system_username(String)"
});
formatter.result({
  "duration": 95637300,
  "status": "passed"
});
formatter.match({
  "location": "AdminStep.user_clicks_search_button()"
});
formatter.result({
  "duration": 697371100,
  "status": "passed"
});
formatter.after({
  "duration": 725722800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "User is redirected to federated provider",
  "description": "",
  "id": "login-functionality;user-is-redirected-to-federated-provider",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@PIM"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User clicks PIM tab",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User enters the ID \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-functionality;user-is-redirected-to-federated-provider;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 20,
      "id": "login-functionality;user-is-redirected-to-federated-provider;;1"
    },
    {
      "cells": [
        "data",
        "0"
      ],
      "line": 21,
      "id": "login-functionality;user-is-redirected-to-federated-provider;;2"
    },
    {
      "cells": [
        "data",
        "1"
      ],
      "line": 22,
      "id": "login-functionality;user-is-redirected-to-federated-provider;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8952727100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User is redirected to federated provider",
  "description": "",
  "id": "login-functionality;user-is-redirected-to-federated-provider;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@PIM"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User clicks PIM tab",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User enters the ID \"data\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PIMSteps.user_clicks_PIM_tab()"
});
formatter.result({
  "duration": 1941776000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 20
    },
    {
      "val": "0",
      "offset": 40
    }
  ],
  "location": "PIMSteps.user_enters_the_ID_and_rownumber(String,int)"
});
formatter.result({
  "duration": 2049594300,
  "status": "passed"
});
formatter.after({
  "duration": 739182400,
  "status": "passed"
});
formatter.before({
  "duration": 9225691900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User is redirected to federated provider",
  "description": "",
  "id": "login-functionality;user-is-redirected-to-federated-provider;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@PIM"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User clicks PIM tab",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User enters the ID \"data\" and rownumber 1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PIMSteps.user_clicks_PIM_tab()"
});
formatter.result({
  "duration": 1802884000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 20
    },
    {
      "val": "1",
      "offset": 40
    }
  ],
  "location": "PIMSteps.user_enters_the_ID_and_rownumber(String,int)"
});
formatter.result({
  "duration": 317496400,
  "status": "passed"
});
formatter.after({
  "duration": 776971300,
  "status": "passed"
});
});