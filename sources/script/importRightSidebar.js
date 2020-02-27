function rightSidebarJSON(data) {
    var htmlHeader;
    var htmlFooter;
    var SelectedItemType = data.FifthLevelContent;
    var SelectedItemGroup = data.regions[0].tenants[0].accounts[0].AccountResources;
    var SelectedItemGroupLength = data.regions[0].tenants[0].accounts[0].AccountResources.length;

    //Panel Head
    htmlHeader = '<h3 class="fd-panel__title">' + SelectedItemType + '</h3>';
    htmlHeader += '<p class="fd-panel__description">All ' + SelectedItemType + '</p>';
    $(htmlHeader).appendTo('#rightSidebar .fd-panel__head');

    //Panel Body - List
    $.each(SelectedItemGroup, function () {
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
        htmlItem += '               <button class="fd-button--light sap-icon--overflow" aria-label="More" aria-expanded="false" aria-controls="WQIDD179" aria-haspopup="true" id="WQIDD179"></button>';
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

        $(htmlItem).appendTo("#rightSidebar .fd-panel__body");
    });

    //Panel Body - Panel footer
    htmlFooter = SelectedItemGroupLength + " resources available.";
    $("#rightSidebar .fd-panel__footer").append(htmlFooter);
}