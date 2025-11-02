sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheZC_FLIGHT_BOOTCAMPList.iSeeThisPage();

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheZC_FLIGHT_BOOTCAMPList.onFilterBar().iExecuteSearch();
            
            Then.onTheZC_FLIGHT_BOOTCAMPList.onTable().iCheckRows();

            When.onTheZC_FLIGHT_BOOTCAMPList.onTable().iPressRow(0);
            Then.onTheZC_FLIGHT_BOOTCAMPObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});