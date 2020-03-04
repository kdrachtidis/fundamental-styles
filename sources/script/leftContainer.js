function buildLeftContainer() {
    //Panel Head
    var htmlHeader, htmlHeaderContainer;
    
    htmlHeader = '<h3 class="fd-panel__title">' + currentAccountObjectType + 's</h3>';
    htmlHeader += '<p class="fd-panel__description">' + currentTenantName + ' [' + currentTenantId + ']</p>';
    htmlHeaderContainer = '#leftContainer .fd-panel__head';

    $(htmlHeader).appendTo(htmlHeaderContainer);

    //Panel Body - List
    $.each(currentTenantItems, function () {
        var htmlItem, htmlItemContainer;

        htmlItem = '<li class="fd-list__item" id="' + this.AccountId + '" onclick="selectAccount(this.id)">';
        htmlItem += '   <span class="fd-list__title">' + this.AccountName + '</span>';
        htmlItem += '   <span class="fd-list__secondary fd-has-color-status-' + this.AccountStatusColor + '">' + this.AccountStatus + '</span>';
        htmlItem += '</li>';
        htmlItemContainer = '#leftContainer .fd-list';

        $(htmlItem).appendTo(htmlItemContainer);
    });

    //Panel Body - List footer
    var htmlFooter, htmlFooterContainer;
    
    htmlFooter = '<li class="fd-list__footer">';
    htmlFooter +=   currentTenantItemsLength + '&nbsp;' + currentAccountObjectType + 's loaded successfully.';
    htmlFooter += '</li>';
    htmlFooterContainer = '#leftContainer .fd-list';

    $(htmlFooterContainer).append(htmlFooter);
}