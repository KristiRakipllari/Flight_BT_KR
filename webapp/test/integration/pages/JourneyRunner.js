sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zflightbootcamp/test/integration/pages/ZC_FLIGHT_BOOTCAMPList",
	"zflightbootcamp/test/integration/pages/ZC_FLIGHT_BOOTCAMPObjectPage",
	"zflightbootcamp/test/integration/pages/FlightDetailsKRObjectPage"
], function (JourneyRunner, ZC_FLIGHT_BOOTCAMPList, ZC_FLIGHT_BOOTCAMPObjectPage, FlightDetailsKRObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zflightbootcamp') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_FLIGHT_BOOTCAMPList: ZC_FLIGHT_BOOTCAMPList,
			onTheZC_FLIGHT_BOOTCAMPObjectPage: ZC_FLIGHT_BOOTCAMPObjectPage,
			onTheFlightDetailsKRObjectPage: FlightDetailsKRObjectPage
        },
        async: true
    });

    return runner;
});

