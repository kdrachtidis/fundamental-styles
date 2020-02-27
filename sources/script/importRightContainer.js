function rightContainerJSON(data) {
    var htmlHeader;
    var htmlFooter;
    var SelectedItemGroup = data.regions[0].tenants[0].accounts[0].AccountNotifications;
    var SelectedItemType = data.FourthLevelContent;
    var SelectedItemGroupLength = data.regions[0].tenants[0].accounts[0].AccountNotifications.length;

    //Panel Head
    htmlHeader = '<h3 class="fd-panel__title">' + SelectedItemType + '</h3>';
    htmlHeader += '<p class="fd-panel__description">All ' + SelectedItemType + '</p>';
    $(htmlHeader).appendTo('#rightContainer .fd-panel__head');
    
    //Panel Body - list
    $.each(SelectedItemGroup, function () {
        var htmlItem;

        htmlItem = '<div class="fd-notification fd-notification--' + this.state + ' fd-notification--m">';
        htmlItem += '   <div class="fd-notification__header">';
        htmlItem += '       <div class="fd-notification__indicator--' + this.state + '"></div>';
        htmlItem += '       <div class="fd-notification__title">' + this.title + '</div>';
        htmlItem += '       <button class="fd-button--light sap-icon--decline fd-notification__close"></button>';
        htmlItem += '   </div>';
        htmlItem += '   <div class="fd-notification__body">';
        htmlItem += '       <div class="fd-notification__content">';
        htmlItem += '           <div class="fd-notification__text">';
        htmlItem += '               <div class="fd-notification__description">' + this.description + '</div>';
        htmlItem += '               <div class="fd-notification__metadata">' + this.user + ' | ' + this.date + ' ' + this.timestamp + '</div>';
        htmlItem += '           </div>';
        htmlItem += '       </div>';
        htmlItem += '   </div>';
        htmlItem += '</div>';
        
        $(htmlItem).appendTo("#rightContainer .fd-panel__body");
    });

     //Panel Footer
     htmlFooter = SelectedItemGroupLength + " items loaded successfully.";
     $("#rightContainer .fd-panel__footer").append(htmlFooter);
}