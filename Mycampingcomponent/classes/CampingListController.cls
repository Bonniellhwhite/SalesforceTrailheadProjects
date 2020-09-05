public with sharing class CampingListController {
    @AuraEnabled
    public static List<Camping_Item__c> getItems(){
            List<Camping_Item__c> campingItems = [SELECT id, Name, Quantity__c, Price__c, Packed__c 
            FROM Camping_Item__c];
            return campingItems;
        }

    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c item){
        insert item;
        return item;
        }
}