function leftContainerJSON(data) {
    //Panel Head
    var htmlHead;
    htmlHead = '<h3 class="fd-panel__title">' + data.SecondLevelContent + '</h3>';
    htmlHead += '<p class="fd-panel__description">' + data.regions[0].tenants[0].TenantName + ' ' + data.regions[0].tenants[0].TenantId +'</p>';
    $(htmlHead).appendTo('#leftContainer .fd-panel__head');

    //Panel Body - List
    $.each(data.regions[0].tenants[0].accounts, function () {
        var htmlItem;

        htmlItem = '<li class="fd-list__item">';
        htmlItem += '   <span class="fd-list__title">' + this.AccountName + ' [' + this.AccountId + ']</span>';
        htmlItem += '   <span class="fd-list__secondary fd-has-color-status-' + this.AccountStatusColor + '">' + this.AccountStatus + '</span>';
        htmlItem += '</li>';
        $(htmlItem).appendTo("#leftContainer .fd-list");
    });

    //Panel Body - List footer
    var lastItem;
    lastItem = '<li class="fd-list__footer">' + data.regions[0].tenants[0].accounts.length + '&nbsp;' + data.ThirdLevelContent + ' loaded successfully.</li>';

    $('#leftContainer .fd-list').append(lastItem);
}

function getData(customPath) {
    $.ajax({
        dataType: "json",
        url: customPath + '/src/json/leftSidebar.min.json',
        success: leftContainerJSON,
        error: function () {
            console.log('No left sidebar JSON found.');
        },
        complete: function () {
            console.log('Left sidebar JSON loaded.');
        }
    });
}