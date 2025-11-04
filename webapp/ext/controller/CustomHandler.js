sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        gotoweb: function(oContext, aSelectedContexts) {
            if (!aSelectedContexts || aSelectedContexts.length === 0) {
                MessageToast.show("No item selected.");
                return;
            }

            const oSelected = aSelectedContexts[0].getObject();
            console.log("Selected object:", oSelected);

            const url = oSelected.Url;
            console.log("URL value:", url);

            if (url && url.trim() !== "") {
                window.open(url, "_blank");
            } else {
                MessageToast.show("URL doesn't exist.");
            }
        }
    };
});