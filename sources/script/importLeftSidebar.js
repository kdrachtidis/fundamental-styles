function leftSidebarJSON(data) {
    var htmlHeader;
    var htmlFooter;
    var SelectedItemType = data.FirstLevelContent;
    var SelectedItemTypeCount = data.regions.length;

    //Panel Head
    htmlHeader = '<h3 class="fd-panel__title">' + SelectedItemType + '</h3>';
    htmlHeader += '<p class="fd-panel__description">All ' + SelectedItemType + '</p>';
    $(htmlHeader).appendTo('#leftSidebar .fd-panel__head');

    //Panel Body - List
    $.each(data.regions, function (i) {
        var htmlItem;

        htmlItem = '<li class="fd-list__group-header" id="group-' + this.RegionId + '">' + this.RegionName + ' ' + this.RegionId + ' (' + this.tenants.length + ' items)</li>';
        $(htmlItem).appendTo('#leftSidebar .fd-list');

        $.each(data.regions[i].tenants, function () {
            var htmlItem;

            htmlItem = '<li class="fd-list__item">';
            htmlItem += '   <span class="fd-list__title">' + this.TenantName + ' [' + this.TenantId + ']</span>';
            htmlItem += '</li>';
            $(htmlItem).insertAfter('#leftSidebar #group-' + data.regions[i].RegionId);
        });
    });

    //Panel Body - List footer
    htmlFooter = '<li class="fd-list__footer">' + SelectedItemTypeCount + ' groups of ' + SelectedItemType + ' loaded.</li>';
    $('#leftSidebar .fd-list').append(htmlFooter);
}