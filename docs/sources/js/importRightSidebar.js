function rightSidebarJSON(data) {
    //Panel Head
    var htmlHead;
    htmlHead = '<h3 class="fd-panel__title">' + data.title + '</h3>';
    htmlHead += '<p class="fd-panel__description">' + data.description + '</p>';

    $(htmlHead).appendTo('#ux-right-sidebar .fd-panel__head');

    //Panel Body - list
    $(data.items).each(function () {
        var htmlItem;

        htmlItem = '<div class="fd-tile">';
        htmlItem += '   <div class="fd-tile__media">';
        htmlItem += '       <span class="fd-identifier fd-identifier--m sap-icon--' + this.icon + ' fd-identifier--transparent"></span>';
        htmlItem += '   </div>';
        htmlItem += '   <div class="fd-tile__content">';
        htmlItem += '       <h3 class="fd-tile__title">' + this.header + '</h3>';
        htmlItem += '       <p class="fd-tile__text">' + this.description + '</p>';
        htmlItem += '   </div>';
        htmlItem += '   <div class="fd-tile__actions">';
        htmlItem += '       <div class="fd-popover fd-popover--right">';
        htmlItem += '           <div class="fd-popover__control">';
        htmlItem += '               <button class="fd-button--light sap-icon--overflow" aria-label="More" aria-expanded="false" aria-controls="WQIDD179" aria-haspopup="true"></button>';
        htmlItem += '           </div>';
        htmlItem += '           <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="true" id="WQIDD179">';
        htmlItem += '               <nav class="fd-menu" id="">';
        htmlItem += '                   <ul class="fd-menu__list">';
        htmlItem += '                       <li><a href="#" class="fd-menu__item">Option 1</a></li>';
        htmlItem += '                       <li><a href="#" class="fd-menu__item">Option 2</a></li>';
        htmlItem += '                       <li><a href="#" class="fd-menu__item">Option 3</a></li>';
        htmlItem += '                   </ul>';
        htmlItem += '               </nav>';
        htmlItem += '           </div>';
        htmlItem += '       </div>';
        htmlItem += '   </div>';
        htmlItem += '</div>';
        
        $(htmlItem).appendTo("#ux-right-sidebar .fd-panel__body");
    });
}