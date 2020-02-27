function leftContainerJSON(data) {
    var htmlHeader;
    var htmlFooter;
    var SelectedParentItemName = data.regions[0].tenants[0].TenantName;
    var SelectedParentItemId = data.regions[0].tenants[0].TenantId;
    var SelectedItemType = data.SecondLevelContent;
    var SelectedItemTypeCount = data.regions[0].tenants[0].accounts.length;

    //Panel Head
    htmlHeader = '<h3 class="fd-panel__title">' + SelectedItemType + '</h3>';
    htmlHeader += '<p class="fd-panel__description">' + SelectedParentItemName + ' ' + SelectedParentItemId + '</p>';
    $(htmlHeader).appendTo('#leftContainer .fd-panel__head');

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
    htmlFooter = '<li class="fd-list__footer">' + SelectedItemTypeCount + '&nbsp;' + SelectedItemType + ' loaded successfully.</li>';
    $('#leftContainer .fd-list').append(htmlFooter);
}