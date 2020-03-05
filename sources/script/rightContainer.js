var rightContainerHead = '#rightContainer .fd-panel__head';
var rightContainerBody = '#rightContainer .fd-panel__body';

function buildRightContainer() {
    //Panel Head
    var htmlHeader;
    htmlHeader = '<h3 class="fd-panel__title">' + currentAccountNotificationType + 's <span class="fd-counter" aria-label="Unread count">' + currentAccountNotificationsLength + '</span></h3>';
    htmlHeader += '<p class="fd-panel__description">' + currentAccountName + ' [' + currentAccountId + ']</p>';

    $(htmlHeader).appendTo(rightContainerHead);

    //Panel Body - list
    $.each(currentAccountNotifications, function () {
        var htmlItem;

        htmlItem = '<div class="fd-notification fd-notification--' + this.AccountNotificationState + ' fd-notification--m">';
        htmlItem += '   <div class="fd-notification__header">';
        htmlItem += '       <div class="fd-notification__indicator--' + this.AccountNotificationState + '"></div>';
        htmlItem += '       <div class="fd-notification__title">' + this.AccountNotificationTitle + '</div>';
        htmlItem += '       <button class="fd-button fd-button--transparent sap-icon--decline fd-notification__close"></button>';
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

        $(htmlItem).appendTo(rightContainerBody);
    });
}

function emptyRightContainer() {
    $(rightContainerHead).empty();
    $(rightContainerBody).empty();
}