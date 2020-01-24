function leftSidebarJSON(data) {
    var itemsCount = data.regions[0].items.length + data.regions[1].items.length;

    $("#ux-left-sidebar-title").append(data.title);
    $("#ux-left-sidebar-description").append(data.description);
    $("#ux-left-sidebar-count, #ux-left-sidebar-dropdown-label").append(itemsCount);

    $('#ux-tenant-group-0').append(data.regions[0].name);
    $('#ux-tenant-group-1').append(data.regions[1].name);

    $(data.regions[0].items).each(function () {
        var htmlItem;

        htmlItem = '<li class="fd-list__item">';
        htmlItem += '    <span class="fd-list__title">' + this.header + '</span>';
        htmlItem += '</li>';
        
        $(htmlItem).appendTo("#ux-left-sidebar-list-group-0");
        //$('<li class="fd-list__item" role="option"><span class="fd-list__title">' + this.header + '</span></li>').appendTo("#ux-left-sidebar-dropdown-list");
    });

    $(data.regions[1].items).each(function () {
        var htmlItem;
        
        htmlItem = '<li class="fd-list__item">';
        htmlItem += '<span class="fd-list__title">' + this.header + '</span>';
        htmlItem += '</li>';
        
        $(htmlItem).appendTo("#ux-left-sidebar-list-group-1");
        //$('<li class="fd-list__item" role="option"><span class="fd-list__title">' + this.header + '</span></li>').appendTo("#ux-left-sidebar-dropdown-list");
    });
}