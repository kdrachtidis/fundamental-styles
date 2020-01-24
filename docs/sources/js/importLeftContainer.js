function leftContainerJSON(data) {
    $("#ux-left-container-title").append(data.title);
    $("#ux-left-container-description").append(data.description);
    $("#ux-left-container-count, #ux-left-container-dropdown-label").append(data.items.length);

    $(data.items).each(function () {
        var htmlItem;
        
        htmlItem = '<li class="fd-list__item">';
        htmlItem += '   <span class="fd-list__title">' + this.header + '</span>';
        htmlItem += '   <span class="fd-list__secondary fd-has-color-status-' + this.status_state + '">' + this.status + '</span>';
        htmlItem += '</li>';

        $(htmlItem).appendTo("#ux-left-container-list");
        //$('<li class="fd-list__item" role="option"><span class="fd-list__title">' + this.header + '</span></li>').appendTo("#ux-left-container-dropdown-list");
    });
}