function buildLeftContainer(data, selectedRegion, selectedTenant, selectedAccount) {
    //Panel Head
    var htmlHeader, htmlHeaderContainer;
    
    htmlHeader = '<h3 class="fd-panel__title">' + data.items[selectedRegion].RegionItems[selectedTenant].TenantItems[selectedAccount].AccountObjectType + 's</h3>';
    htmlHeader += '<p class="fd-panel__description">' + data.items[selectedRegion].RegionItems[selectedTenant].TenantName + ' [' + data.items[selectedRegion].RegionItems[selectedTenant].TenantId + ']</p>';
    htmlHeaderContainer = '#leftContainer .fd-panel__head';

    $(htmlHeader).appendTo(htmlHeaderContainer);

    //Panel Body - List
    $.each(data.items[selectedRegion].RegionItems[selectedTenant].TenantItems, function () {
        var htmlItem, htmlItemContainer;

        htmlItem = '<li class="fd-list__item">';
        htmlItem += '   <span class="fd-list__title">' + this.AccountName + '</span>';
        htmlItem += '   <span class="fd-list__secondary fd-has-color-status-' + this.AccountStatusColor + '">' + this.AccountStatus + '</span>';
        htmlItem += '</li>';
        htmlItemContainer = '#leftContainer .fd-list';

        $(htmlItem).appendTo(htmlItemContainer);
    });

    //Panel Body - List footer
    var htmlFooter, htmlFooterContainer;
    
    htmlFooter = '<li class="fd-list__footer">';
    htmlFooter +=   data.items[selectedRegion].RegionItems[selectedTenant].TenantItems.length + '&nbsp;' + data.items[selectedRegion].RegionItems[selectedTenant].TenantItems[selectedAccount].AccountObjectType + 's loaded successfully.';
    htmlFooter += '</li>';
    htmlFooterContainer = '#leftContainer .fd-list';

    $(htmlFooterContainer).append(htmlFooter);
}