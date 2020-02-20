function leftContainerJSON(data) {
    //Panel Head
    var htmlHead;
    htmlHead = '<h3 class="fd-panel__title">' + data.regions[0].tenants[0].accounts[0].title + '</h3>';
    htmlHead += '<p class="fd-panel__description">' + data.regions[0].tenants[0].name + ' ' + data.regions[0].tenants[0].id +'</p>';
    $(htmlHead).appendTo('#leftContainer .fd-panel__head');

    //Panel Body - List
    $.each(data.regions[0].tenants[0].accounts[0].items, function () {
        var htmlItem;

        htmlItem = '<li class="fd-list__item">';
        htmlItem += '   <span class="fd-list__title">' + this.name + ' [' + this.id + ']</span>';
        htmlItem += '   <span class="fd-list__secondary fd-has-color-status-' + this.statusColor + '">' + this.status + '</span>';
        htmlItem += '</li>';
        $(htmlItem).appendTo("#leftContainer .fd-list");
    });

    //Panel Body - List footer
    var lastItem;
    lastItem = '<li class="fd-list__footer">' + data.regions[0].tenants[0].accounts[0].items.length + '&nbsp;' + data.regions[0].tenants[0].accounts[0].title + ' loaded successfully.</li>';

    $('#leftContainer .fd-list').append(lastItem);
}

function getLeftContainerData(customPath) {
    $.ajax({
        dataType: "json",
        url: customPath + '/src/json/leftSidebar.min.json',
        success: leftContainerJSON,
        error: function () {
            console.log('No left container JSON found.');
        },
        complete: function () {
            console.log('Left container JSON loaded.');
        }
    });
}