({
    clickCreateItem : function(component, event, helper) {
        var isFormValid = component.find("campingItemForm").reduce(function(isValid, inputCmp){
        	inputCmp.showHelpMessageIfInvalid();    	
            return isValid && inputCmp.get("v.validity").valid;
        });
        if (isFormValid) {
            var newItem = component.get("v.newItem");
            helper.createItem(component,newItem);
            }
        },

        createItem: function(component,newItem) {
            var createEvent = component.getEvent("addItem");
            createEvent.setParams({ "item": newItem });
            createEvent.fire();
            component.set("v.newItem",
                        {'sobjectType': 'Camping_Item__c',
                        'Name': '',
                        'Quantity__c': 0,
                        'Price__c': 0,
                        'Packed__c': false });
    
        },
        
})
