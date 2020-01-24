function rightContainerJSON(data) {
    $("#ux-right-container-title").append(data.title + ' <span class="fd-counter" aria-label="Unread count">' + data.items.length + '</span>');
    $("#ux-right-container-description").append(data.description);

    $(data.items).each(function () {
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

        $(htmlItem).appendTo("#ux-right-container-list");
    });
}