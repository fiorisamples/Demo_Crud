sap.ui.define([
    "demonwcrudui/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, JSONModel, MessageToast) {
        "use strict";
        var that = this , oModel;
        return BaseController.extend("demonwcrudui.controller.Home", {
            onInit: function () {
                that = this;
                var oViewModel = new JSONModel();
                this.getView().setModel(oViewModel, "Home");
                if (!this.oDialog) {
                    this.oDialog = new sap.ui.xmlfragment("demonwcrudui.view.Dialog", that);
                    this.getView().addDependent(this.oDialog);
                }
                this.getRouter().getRoute("home").attachPatternMatched(that._onPatternMatched, that);
            },
            /**
             * 
             */
            onDLSave: function () {
                debugger;
                var oEntry = {},
                    iProduct = parseInt(sap.ui.getCore().byId("idProduct").getValue(),10),
                    sPName = sap.ui.getCore().byId("idProductName").getValue(),
                    sPDes = sap.ui.getCore().byId("idProdDes").getValue(),
                    sPrice = sap.ui.getCore().byId("idPrice").getValue(),
                    iRating = parseInt(sap.ui.getCore().byId("idRating").getValue(),10),
                    dRDate = sap.ui.getCore().byId("idRDate").getDateValue(),
                    dEDate = sap.ui.getCore().byId("idEDate").getDateValue();

                     oEntry.ID = iProduct;
                     oEntry.Name = sPName;
                     oEntry.Description = sPDes;
                     oEntry.Price = sPrice;
                     oEntry.Rating = iRating;
                    //  oEntry.ReleaseDate = new Date(dRDate);
                    //  oEntry.DiscontinuedDate = new Date(dEDate);

                oModel = this.getModel();
                oModel.setUseBatch(false);
                oModel.create("/Products", oEntry, {
                    success: function (oData, oRes) {
                        debugger;
                    }, error: function (oError) {
                        debugger;
                    }
                });
            },


            onDLCancel: function () {
                that.oDialog.close();
            },

            onCreate: function () {
                this.oDialog.open();
            },

            onUpdate: function () {

            },

            /**
             * Delete the Record
             */
            onDelete: function () {
                if (!this.getView().byId("idTable").getSelectedItem()) {
                    MessageToast.show("Please select the single row");
                } else {
                    oModel = this.getModel();
                    var iProductId = this.getView().byId("idTable").getSelectedItem().getBindingContext().getProperty("ID");
                    var sUrl = "/Products(ID=" + iProductId + ")";
                    oModel.remove(sUrl,{success:function(){
                         debugger;
                    },error:function(){
                         debugger;
                    }});

                }
            },

            _onPatternMatched: function () {

            }
        });
    });
