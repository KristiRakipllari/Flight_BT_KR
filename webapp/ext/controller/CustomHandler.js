sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        gotoweb: function(oContext, aSelectedContexts) {
            // Use selected context if available, otherwise fallback to oContext
            const oSelected = (aSelectedContexts && aSelectedContexts.length > 0) 
                ? aSelectedContexts[0].getObject() 
                : oContext;

            console.log("Context object:", oSelected);

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