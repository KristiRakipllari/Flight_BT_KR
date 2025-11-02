sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zflightbootcamp',
            componentId: 'ZC_FLIGHT_BOOTCAMPList',
            contextPath: '/ZC_FLIGHT_BOOTCAMP'
        },
        CustomPageDefinitions
    );
});