({
        handleAddItem: function(component, event, helper) {
            var newItem = event.getParam("item");
            this.createItem(component, newItem);
        },

        handleUpdateItem: function(component, event, helper) {
            var updatedExp = event.getParam("item");
            helper.updateItem(component, updatedExp);
        },
        
        doInit : function(component, event, helper) {
                var action = component.get("c.getItems");
                action.setCallback(this, function(response){
                    var campingItems = response.getReturnValue();
                    component.set("v.items",campingItems);
                });
                $A.enqueueAction(action);
            } ,
            
           saveItem: function(component, item, callback) {
                var action = component.get("c.saveItem");
                action.setParams({
                    "item": item
                });
                if (callback) {
                    action.setCallback(this, callback);
                }
                $A.enqueueAction(action);
            },
            
            createItem: function(component, item) {
                    this.saveItem(component, item, function(response){
                        var state = response.getState();
                        if (state === "SUCCESS") {
                            var items = component.get("v.items");
                            expenses.push(response.getReturnValue());
                            component.set("v.items", items);
                        }
                    });
                },
	})