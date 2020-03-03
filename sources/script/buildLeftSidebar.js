function buildLeftSidebar(data, selectedRegion, selectedTenant) {
    var SelectedChildItemGroupLength = 0;

    for (i = 0; i < data.items.length; i++) {
        SelectedChildItemGroupLength += data.items[i].RegionItems.length;
    }

    //Panel Head
    var htmlHeader, htmlHeaderContainer;
    
    htmlHeader = '<h3 class="fd-panel__title">' + data.items[selectedRegion].RegionItems[selectedTenant].TenantObjectType + '</h3>';
    htmlHeader += '<p class="fd-panel__description">All ' + SelectedChildItemGroupLength + ' ' + data.items[selectedRegion].RegionItems[selectedTenant].TenantObjectType + 's</p>';
    htmlHeaderContainer = '#leftSidebar .fd-panel__head';
    
    $(htmlHeader).appendTo(htmlHeaderContainer);

    //Panel Body - List
    $.each(data.items, function (i) {
        var htmlItem, htmlItemContainer;
        
        htmlItem = '<li class="fd-list__group-header" id="group-' + this.RegionId + '">' + this.RegionName + ' (' + this.RegionItems.length + ' items)</li>';
        htmlItemContainer = '#leftSidebar .fd-list';
        
        $(htmlItem).appendTo(htmlItemContainer);

        $.each(data.items[i].RegionItems, function () {
            var htmlItem, htmlItemContainer;

            htmlItem = '<li class="fd-list__item">';
            htmlItem += '   <span class="fd-list__title">' + this.TenantName + '</span>';
            htmlItem += '</li>';
            htmlItemContainer = '#leftSidebar #group-' + data.items[i].RegionId;
            
            $(htmlItem).insertAfter(htmlItemContainer);
        });
    });

    //Panel Body - List footer
    var htmlFooter, htmlFooterContainer;

    htmlFooter = '<li class="fd-list__footer">' + data.items.length + ' ' + data.items[selectedRegion].RegionObjectType + 's with ' + SelectedChildItemGroupLength + ' ' + data.items[selectedRegion].RegionItems[selectedTenant].TenantObjectType + 's loaded.</li>';
    htmlFooterContainer = '#leftSidebar .fd-list';

    $(htmlFooterContainer).append(htmlFooter);
}