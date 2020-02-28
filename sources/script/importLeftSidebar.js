function buildLeftSidebar(data) {
    var SelectedChildItemGroupLength = 0;

    for (i = 0; i < data.regions.length; i++) {
        SelectedChildItemGroupLength += data.regions[i].RegionItems.length;
    }

    //Panel Head
    var htmlHeader, htmlHeaderContainer;
    
    htmlHeader = '<h3 class="fd-panel__title">' + data.FirstLevelContent + '</h3>';
    htmlHeader += '<p class="fd-panel__description">All ' + SelectedChildItemGroupLength + ' ' + data.FirstLevelContent + '</p>';
    htmlHeaderContainer = '#leftSidebar .fd-panel__head';
    
    $(htmlHeader).appendTo(htmlHeaderContainer);

    //Panel Body - List
    $.each(data.regions, function (i) {
        var htmlItem, htmlItemContainer;
        
        htmlItem = '<li class="fd-list__group-header" id="group-' + this.RegionId + '">' + this.RegionName + ' (' + this.RegionItems.length + ' items)</li>';
        htmlItemContainer = '#leftSidebar .fd-list';
        
        $(htmlItem).appendTo(htmlItemContainer);

        $.each(data.regions[i].RegionItems, function () {
            var htmlItem, htmlItemContainer;

            htmlItem = '<li class="fd-list__item">';
            htmlItem += '   <span class="fd-list__title">' + this.TenantName + '</span>';
            htmlItem += '</li>';
            htmlItemContainer = '#leftSidebar #group-' + data.regions[i].RegionId;
            
            $(htmlItem).insertAfter(htmlItemContainer);
        });
    });

    //Panel Body - List footer
    var htmlFooter, htmlFooterContainer;

    htmlFooter = '<li class="fd-list__footer">' + data.regions.length + ' ' + data.ItemType + ' with ' + data.FirstLevelContent + ' loaded.</li>';
    htmlFooterContainer = '#leftSidebar .fd-list';

    $(htmlFooterContainer).append(htmlFooter);
}