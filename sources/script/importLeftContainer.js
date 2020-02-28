function buildLeftContainer(data) {
    //Panel Head
    var htmlHeader, htmlHeaderContainer;
    
    htmlHeader = '<h3 class="fd-panel__title">' + data.SecondLevelContent + '</h3>';
    htmlHeader += '<p class="fd-panel__description">' + data.regions[0].RegionItems[0].TenantName + ' [' + data.regions[0].RegionItems[0].TenantId + ']</p>';
    htmlHeaderContainer = '#leftContainer .fd-panel__head';

    $(htmlHeader).appendTo(htmlHeaderContainer);

    //Panel Body - List
    $.each(data.regions[0].RegionItems[0].TenantItems, function () {
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
    htmlFooter +=   data.regions[0].RegionItems[0].TenantItems.length + '&nbsp;' + data.SecondLevelContent + ' loaded successfully.';
    htmlFooter += '</li>';
    htmlFooterContainer = '#leftContainer .fd-list';

    $(htmlFooterContainer).append(htmlFooter);
}