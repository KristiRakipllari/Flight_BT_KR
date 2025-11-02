sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zflightbootcamp',
            componentId: 'FlightDetailsKRObjectPage',
            contextPath: '/ZC_FLIGHT_BOOTCAMP/_detailsKR'
        },
        CustomPageDefinitions
    );
});