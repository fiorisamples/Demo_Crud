/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo_nw_crud_ui/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
