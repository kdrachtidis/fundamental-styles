function buildRightContainer(data) {
    //Panel Head
    var htmlHeader, htmlHeaderContainer;

    htmlHeader = '<h3 class="fd-panel__title">' + data.items[0].RegionItems[0].TenantItems[0].AccountNotifications[0].AccountNotificationType + 's</h3>';
    htmlHeader += '<p class="fd-panel__description">' + data.items[0].RegionItems[0].TenantItems[0].AccountName + ' [' + data.items[0].RegionItems[0].TenantItems[0].AccountId + ']</p>';
    htmlHeaderContainer = '#rightContainer .fd-panel__head';
    
    $(htmlHeader).appendTo(htmlHeaderContainer);
    
    //Panel Body - list
    $.each(data.items[0].RegionItems[0].TenantItems[0].AccountNotifications, function () {
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

     htmlFooter = data.items[0].RegionItems[0].TenantItems[0].AccountNotifications.length + " items loaded successfully.";
     htmlFooter += '&nbsp<a href="http://localhost/fundamental-styles/docs/src/html/leftContainer.min.html" class="fd-link" tabindex="0" target="_blank">View Section</a>';
     htmlFooterContainer = '#rightContainer .fd-panel__footer';
     
     $(htmlFooterContainer).append(htmlFooter);
}