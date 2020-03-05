var leftContainerHead = '#leftContainer .fd-panel__head';
var leftContainerList = '#leftContainer .fd-list';

function buildLeftContainer() {
    //Panel Head
    var htmlHeader;
    htmlHeader = '<h3 class="fd-panel__title">' + currentAccountObjectType + 's</h3>';
    htmlHeader += '<p class="fd-panel__description">' + currentTenantName + ' [' + currentTenantId + ']</p>';

    $(htmlHeader).appendTo(leftContainerHead);

    //Panel Body - List
    $.each(currentTenantItems, function () {
        var htmlItem;

        htmlItem = '<li class="fd-list__item" aria-selected="false" id="' + this.AccountId + '" onclick="selectAccount(this.id)">';
        htmlItem += '   <span class="fd-list__title">' + this.AccountName + '</span>';
        htmlItem += '   <span class="fd-list__secondary fd-has-color-status-' + this.AccountStatusColor + '">' + this.AccountStatus + '</span>';
        htmlItem += '</li>';

        $(htmlItem).appendTo(leftContainerList);
    });

    //First item set to selected
    $('#' + currentTenantItemsFirst.AccountId).attr('aria-selected','true');

    //Panel Body - List footer
    var htmlFooter;
    htmlFooter = '<li class="fd-list__footer">';
    htmlFooter +=   currentTenantItemsLength + '&nbsp;' + currentAccountObjectType + 's loaded successfully.';
    htmlFooter += '</li>';

    $(htmlFooter).appendTo(leftContainerList);
}

function emptyLeftContainer() {
    $(leftContainerHead).empty();
    $(leftContainerList).empty();
}