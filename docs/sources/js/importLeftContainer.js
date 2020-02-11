function leftContainerJSON(data) {
    //Panel Head
    var htmlHead;
    htmlHead = '<h3 class="fd-panel__title">' + data.title + '</h3>';
    htmlHead += '<p class="fd-panel__description">' + data.description + '</p>';

    $(htmlHead).appendTo('#ux-left-container .fd-panel__head');

    //Panel Body - list
    $(data.items).each(function () {
        var htmlItem;

        htmlItem = '<li class="fd-list__item">';
        htmlItem += '   <span class="fd-list__title">' + this.header + '</span>';
        htmlItem += '   <span class="fd-list__secondary fd-has-color-status-' + this.status_state + '">' + this.status + '</span>';
        htmlItem += '</li>';

        $(htmlItem).insertAfter("#ux-left-container .fd-list__group-header");
    });

    //Panel footer
    $("#ux-left-container-count, #ux-left-container-dropdown-label").append(data.items.length);
}