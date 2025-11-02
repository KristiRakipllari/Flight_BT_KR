sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zflightbootcamp',
            componentId: 'ZC_FLIGHT_BOOTCAMPObjectPage',
            contextPath: '/ZC_FLIGHT_BOOTCAMP'
        },
        CustomPageDefinitions
    );
});