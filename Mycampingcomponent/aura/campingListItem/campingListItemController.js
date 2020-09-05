({
	packItem : function(component, event, helper) {
		component.set("v.item.Packed__c",true);
        
        event.getSource().set("v.disabled",true);
	},

    clickpacked: function(component, event, helper) {
        var expense = component.get("v.item");
        var updateEvent = component.getEvent("updateItem");
        updateEvent.setParams({ "item": expense });
        updateEvent.fire();
    }
})
