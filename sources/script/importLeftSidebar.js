function leftSidebarJSON(data) {
    //Panel Head
    var htmlHead;
    htmlHead = '<h3 class="fd-panel__title">' + data.title + '</h3>';
    htmlHead += '<p class="fd-panel__description">' + data.description + '</p>';

    $(htmlHead).appendTo('#ux-left-sidebar .fd-panel__head');

    //Panel Body - Group headers
    $('#ux-tenant-group-0').append(data.regions[0].name);
    $('#ux-tenant-group-1').append(data.regions[1].name);

    //Panel Body - list
    $(data.regions[0].items).each(function () {
        var htmlItem;

        htmlItem = '<li class="fd-list__item">';
        htmlItem += '    <span class="fd-list__title">' + this.header + '</span>';
        htmlItem += '</li>';

        $(htmlItem).insertAfter("#ux-tenant-group-0");
    });

    $(data.regions[1].items).each(function () {
        var htmlItem;

        htmlItem = '<li class="fd-list__item">';
        htmlItem += '<span class="fd-list__title">' + this.header + '</span>';
        htmlItem += '</li>';

        $(htmlItem).insertAfter("#ux-tenant-group-1");
    });

    //Panel footer
    var itemsCount = data.regions[0].items.length + data.regions[1].items.length;

    $("#ux-left-sidebar-count, #ux-left-sidebar-dropdown-label").append(itemsCount);
}