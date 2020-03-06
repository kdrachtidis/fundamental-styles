// Global Variables

var globalSourcePath;

// Counters
var globalSelectedRegion = 0;
var globalSelectedTenant = 0;
var globalSelectedAccount = 0;
var globalSelectedAccountObject = 0;
var globalSelectedAccountResource = 0;
var globalSelectedAccountNotification = 0;
var globalSelectedAccountObjectItem = 0;
var globalSelectedAccountObjectLabel = 0;

//Regions
var currentRegions, currentRegionsLength;
//Region
var currentRegionName, currentRegionObjectType, currentRegionId, currentRegionItems, currentRegionItemsLength, currentRegionsItemsLengthSum;

//Tenant
var currentTenantName, currentTenantObjectType, currentTenantId, currentTenantItems, currentTenantItemsLength;

//Account
var currentAccountName, currentAccountObjectType, currentAccountStatus, AccountStatusColor, currentAccountId;

//Account Tags
var currentAccountTags, currentAccountTagsLength;

//Account Resources
var currentAccountResources, currentAccountResourcesLength;
var currentAccountResourceName, currentAccountResourceType, currentAccountResourceId, currentAccountResourceLink, currentAccountResourceIcon;

//Account Nottifications
var currentAccountNotifications, currentAccountNotificationsLength;
var currentAccountNotificationTitle, currentAccountNotificationType, currentAccountNotificationDate, currentAccountNotificationTimestamp, currentAccountNotificationSource, currentAccountNotificationDescription, currentAccountNotificationState;

//Account Objects
var currentAccountObjects, currentAccountObjectsLength;
var currentAccountObjectType, currentAccountObjectTypeExpanded, currentAccountObjectId;
var currentAccountObjectLabels, currentAccountObjectLabelsLength;
var currentAccountObjectItems, currentAccountObjectItemsLength;

currentRegionsItemsLengthSum = 0;

var arrayRegions = [];

function mapData(data) {
    for (i = 0; i <= currentRegionsLength; i++) {
        //arrayRegions[i] = ;
        //console.log();
    }
}

function initialiseData(data) {
    //Regions
    currentRegions = data.items;
    currentRegionsLength = data.items.length;
    //Region
    currentRegionName = data.items[globalSelectedRegion].RegionName;
    currentRegionObjectType = data.items[globalSelectedRegion].RegionObjectType;
    currentRegionId = data.items[globalSelectedRegion].RegionId;
    //Region items
    currentRegionItems = data.items[globalSelectedRegion].RegionItems;
    currentRegionItemsFirst = data.items[globalSelectedRegion].RegionItems[0];
    currentRegionItemsLength = data.items[globalSelectedRegion].RegionItems.length;
    for (i = 0; i < currentRegionsLength; i++) {
        currentRegionsItemsLengthSum += data.items[i].RegionItems.length;
    }

    //Tenants
    currentTenantName = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantName;
    currentTenantObjectType = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantObjectType;
    currentTenantId = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantId;
    //Tenants items
    currentTenantItems = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems;
    currentTenantItemsFirst = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[0];
    currentTenantItemsLength = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems.length;

    //Accounts
    currentAccountName = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountName;
    currentAccountObjectType = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountObjectType;
    currentAccountStatus = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountStatus;
    currentAccountStatusColor = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountStatusColor;
    currentAccountId = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountId;

    //Account Tags
    currentAccountTags = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountTags;
    currentAccountTagsLength = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountTags.length;

    // Account Resources
    currentAccountResources = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountResources;
    currentAccountResourcesLength = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountResources.length;
    // Account Resource
    currentAccountResourceName = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountResources[globalSelectedAccountResource].AccountResourceName;
    currentAccountResourceType = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountResources[globalSelectedAccountResource].AccountResourceType;
    currentAccountResourceId = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountResources[globalSelectedAccountResource].AccountResourceId;
    currentAccountResourceLink = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountResources[globalSelectedAccountResource].AccountResourceLink;
    currentAccountResourceIcon = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountResources[globalSelectedAccountResource].AccountResourceIcon;

    //Account Notifications
    currentAccountNotifications = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountNotifications;
    currentAccountNotificationsLength = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountNotifications.length;
    //Account Notification
    currentAccountNotificationTitle = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountNotifications[globalSelectedAccountNotification].AccountNotificationTitle;
    currentAccountNotificationType = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountNotifications[globalSelectedAccountNotification].AccountNotificationType;
    currentAccountNotificationDate = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountNotifications[globalSelectedAccountNotification].AccountNotificationDate;
    currentAccountNotificationTimestamp = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountNotifications[globalSelectedAccountNotification].AccountNotificationTimestamp;
    currentAccountNotificationSource = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountNotifications[globalSelectedAccountNotification].AccountNotificationSource;
    currentAccountNotificationDescription = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountNotifications[globalSelectedAccountNotification].AccountNotificationDescription;
    currentAccountNotificationState = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountNotifications[globalSelectedAccountNotification].AccountNotificationState;

    //Account Objects
    currentAccountObjects = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountObjects;
    currentAccountObjectsLength = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountObjects.length;
    //Account Object Labels
    currentAccountObjectLabels = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountObjects[globalSelectedAccountObject].AccountObjectLabels;
    currentAccountObjectLabelsLength = data.items[globalSelectedRegion].RegionItems[globalSelectedTenant].TenantItems[globalSelectedAccount].AccountObjects[globalSelectedAccountObject].AccountObjectLabels.length;
}