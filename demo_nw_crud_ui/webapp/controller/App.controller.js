sap.ui.define([
    "demonwcrudui/controller/BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("demonwcrudui.controller.App", {
            onInit: function () {
                // apply content density mode to root view
                this.getView().addStyleClass(!sap.ui.Device.support.touch ? "sapUiSizeCompact" : "sapUiSizeCozy");
            }
        });
    });
