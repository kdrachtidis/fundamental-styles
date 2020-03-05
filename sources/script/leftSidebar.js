function buildLeftSidebar(data) {
    //Panel Head
    var htmlHeader, htmlHeaderContainer;
    
    htmlHeader = '<h3 class="fd-panel__title">' + currentTenantObjectType + '</h3>';
    htmlHeader += '<p class="fd-panel__description">All ' + currentRegionsItemsLengthSum + ' ' + currentTenantObjectType + 's</p>';
    htmlHeaderContainer = '#leftSidebar .fd-panel__head';
    
    $(htmlHeader).appendTo(htmlHeaderContainer);

    //Panel Body - List
    $.each(currentRegions, function (i) {
        var htmlItem, htmlItemContainer;
        
        htmlItem = '<li class="fd-list__group-header">' + this.RegionName + ' (' + this.RegionItems.length + ' items)</li>';
        htmlItem += '   <div id="group-' + this.RegionId + '"></div>';
        htmlItemContainer = '#leftSidebar .fd-list';
        
        $(htmlItem).appendTo(htmlItemContainer);

        $.each(currentRegions[i].RegionItems, function () {
            var htmlItem, htmlItemContainer;

            htmlItem = '<li class="fd-list__item" id="' + this.TenantId + '" onclick="selectTenant(this.id)">';
            htmlItem += '   <span class="fd-list__title">' + this.TenantName + '</span>';
            htmlItem += '</li>';
            htmlItemContainer = '#leftSidebar #group-' + currentRegions[i].RegionId;
            
            $(htmlItem).appendTo(htmlItemContainer);
        });
    });

    //First item set to selected
    $('#' + currentRegionItemsFirst.TenantId).attr('aria-selected','true');

    //Panel Body - List footer
    var htmlFooter, htmlFooterContainer;

    htmlFooter = '<li class="fd-list__footer">' + currentRegionsLength + ' ' + currentRegionObjectType + 's with ' + currentRegionsItemsLengthSum + ' ' + currentTenantObjectType + 's loaded.</li>';
    htmlFooterContainer = '#leftSidebar .fd-list';

    $(htmlFooterContainer).append(htmlFooter);
}