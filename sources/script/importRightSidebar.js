function buildRightSidebar(data) {
    //Panel Head
    var htmlHeader, htmlHeaderContainer;

    htmlHeader = '<h3 class="fd-panel__title">' + data.items[0].RegionItems[0].TenantItems[0].AccountResources[0].AccountResourceType + 's</h3>';
    htmlHeader += '<p class="fd-panel__description">' + data.items[0].RegionItems[0].TenantItems[0].AccountName + ' [' + data.items[0].RegionItems[0].TenantItems[0].AccountId + ']</p>';
    htmlHeaderContainer = '#rightSidebar .fd-panel__head';

    $(htmlHeader).appendTo(htmlHeaderContainer);

    //Panel Body - List
    $.each(data.items[0].RegionItems[0].TenantItems[0].AccountResources, function () {
        var htmlItem, htmlItemContainer;

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
        htmlItemContainer = '#rightSidebar .fd-panel__body';

        $(htmlItem).appendTo(htmlItemContainer);
    });

    //Panel Body - Panel footer
    var htmlFooter, htmlFooterContainer;

    htmlFooter = data.items[0].RegionItems[0].TenantItems[0].AccountResources.length + ' ' + data.items[0].RegionItems[0].TenantItems[0].AccountResources[0].AccountResourceType + 's available.';
    htmlFooterContainer = '#rightSidebar .fd-panel__footer';

    $(htmlFooterContainer).append(htmlFooter);
}