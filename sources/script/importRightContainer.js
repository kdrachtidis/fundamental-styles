function buildRightContainer(data) {
    //Panel Head
    var htmlHeader, htmlHeaderContainer;

    htmlHeader = '<h3 class="fd-panel__title">' + data.FourthLevelContent + '</h3>';
    htmlHeader += '<p class="fd-panel__description">' + data.FourthLevelContent + ' for ' + data.regions[0].RegionItems[0].TenantItems[0].AccountName + ' [' + data.regions[0].RegionItems[0].TenantItems[0].AccountId + ']</p>';
    htmlHeaderContainer = '#rightContainer .fd-panel__head';
    
    $(htmlHeader).appendTo(htmlHeaderContainer);
    
    //Panel Body - list
    $.each(data.regions[0].RegionItems[0].TenantItems[0].AccountNotifications, function () {
        var htmlItem;

        htmlItem = '<div class="fd-notification fd-notification--' + this.AccountNotificationState + ' fd-notification--m">';
        htmlItem += '   <div class="fd-notification__header">';
        htmlItem += '       <div class="fd-notification__indicator--' + this.AccountNotificationState + '"></div>';
        htmlItem += '       <div class="fd-notification__title">' + this.AccountNotificationTitle + '</div>';
        htmlItem += '       <button class="fd-button--light sap-icon--decline fd-notification__close"></button>';
        htmlItem += '   </div>';
        htmlItem += '   <div class="fd-notification__body">';
        htmlItem += '       <div class="fd-notification__content">';
        htmlItem += '           <div class="fd-notification__text">';
        htmlItem += '               <div class="fd-notification__description">' + this.AccountNotificationDescription + '</div>';
        htmlItem += '               <div class="fd-notification__metadata">' + this.AccountNotificationSource + ' | ' + this.AccountNotificationDate + ' ' + this.AccountNotificationTimestamp + '</div>';
        htmlItem += '           </div>';
        htmlItem += '       </div>';
        htmlItem += '   </div>';
        htmlItem += '</div>';
        
        $(htmlItem).appendTo("#rightContainer .fd-panel__body");
    });

     //Panel Footer
     var htmlFooter, htmlFooterContainer;

     htmlFooter = data.regions[0].RegionItems[0].TenantItems[0].AccountNotifications.length + " items loaded successfully.";
     htmlFooterContainer = '#rightContainer .fd-panel__footer';
     
     $(htmlFooterContainer).append(htmlFooter);
}