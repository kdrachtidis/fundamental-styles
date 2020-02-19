function leftContainerJSON(data) {
    //Panel Head
    var htmlHead;
    htmlHead = '<h3 class="fd-panel__title">' + data.title + '</h3>';
    htmlHead += '<p class="fd-panel__description">' + data.description + '</p>';
    $(htmlHead).appendTo('#leftContainer .fd-panel__head');

    //Panel Body - List
    $.each(data.items, function () {
        var htmlItem;

        htmlItem = '<li class="fd-list__item">';
        htmlItem += '   <span class="fd-list__title">' + this.name + ' [' + this.id + ']</span>';
        htmlItem += '   <span class="fd-list__secondary fd-has-color-status-' + this.statusColor + '">' + this.status + '</span>';
        htmlItem += '</li>';
        $(htmlItem).appendTo("#leftContainer .fd-list");
    });

    //Panel Body - List footer
    var lastItem;
    lastItem = '<li class="fd-list__footer">' + data.items.length + ' tenants successfully loaded.</li>';

    $('#leftContainer .fd-list').append(lastItem);
}

function getLeftContainerData(customPath) {
    $.ajax({
        dataType: "json",
        url: customPath + '/src/json/leftContainer.min.json',
        success: leftContainerJSON,
        error: function () {
            console.log('No left container JSON found.');
        },
        complete: function () {
            console.log('Left container JSON loaded.');
        }
    });
}