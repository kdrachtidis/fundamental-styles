function leftSidebarJSON(data) {
    //Panel Head
    var htmlHead;
    htmlHead = '<h3 class="fd-panel__title">' + data.FirstLevelContent + '</h3>';
    htmlHead += '<p class="fd-panel__description">All ' + data.FirstLevelContent + '</p>';
    $(htmlHead).appendTo('#leftSidebar .fd-panel__head');

    //Panel Body - List
    $.each(data.regions, function (i) {
        var htmlItem;

        htmlItem = '<li class="fd-list__group-header" id="group-' + this.RegionId + '">' + this.RegionName + ' ' + this.RegionId + ' (' + this.tenants.length + ' items)</li>';
        $(htmlItem).appendTo('#leftSidebar .fd-list');

        $.each(data.regions[i].tenants, function (j) {
            var htmlItem;

            htmlItem = '<li class="fd-list__item">';
            htmlItem += '   <span class="fd-list__title">' + this.TenantName + ' [' + this.TenantId + ']</span>';
            htmlItem += '</li>';
            $(htmlItem).insertAfter('#leftSidebar #group-' + data.regions[i].RegionId);
        });
    });

    //Panel Body - List footer
    var lastItem;
    lastItem = '<li class="fd-list__footer">' + data.regions.length + ' groups of ' + data.FirstLevelContent + ' loaded.</li>';

    $('#leftSidebar .fd-list').append(lastItem);
}