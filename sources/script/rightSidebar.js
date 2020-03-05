var rightSidebarHead = '#rightSidebar .fd-panel__head';
var rightSidebarBody = '#rightSidebar .fd-panel__body';

function buildRightSidebar() {
    //Panel Head
    var htmlHeader;
    htmlHeader = '<h3 class="fd-panel__title">' + currentAccountResourceType + 's</h3>';
    htmlHeader += '<p class="fd-panel__description">' + currentAccountName + ' [' + currentAccountId + ']</p>';

    $(htmlHeader).appendTo(rightSidebarHead);

    //Panel Body - List
    $.each(currentAccountResources, function () {
        var htmlItem;

        htmlItem = '<div class="fd-tile">';
        htmlItem += '   <div class="fd-tile__media">';
        htmlItem += '       <span class="fd-identifier fd-identifier--m sap-icon--' + this.AccountResourceIcon + ' fd-identifier--transparent"></span>';
        htmlItem += '   </div>';
        htmlItem += '   <div class="fd-tile__content">';
        htmlItem += '       <h3 class="fd-tile__title">' + this.AccountResourceName + '</h3>';
        htmlItem += '       <p class="fd-tile__text">' + this.AccountResourceId + ' | ' + this.AccountResourceLink + '</p>';
        htmlItem += '   </div>';
        htmlItem += '   <div class="fd-tile__actions">';
        htmlItem += '       <div class="fd-popover fd-popover--right">';
        htmlItem += '           <div class="fd-popover__control">';
        htmlItem += '               <button class="fd-button fd-button--transparent sap-icon--overflow" aria-label="More" aria-expanded="false" aria-controls="WQIDD179" aria-haspopup="true" id="WQIDD179"></button>';
        htmlItem += '           </div>';
        htmlItem += '           <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="true" id="WQIDD179">';
        htmlItem += '               <nav class="fd-menu">';
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

        $(htmlItem).appendTo(rightSidebarBody);
    });
}

function emptyRightSidebar() {
    $(rightSidebarHead).empty();
    $(rightSidebarBody).empty();
}