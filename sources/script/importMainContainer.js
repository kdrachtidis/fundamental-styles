function buildMainContainer(data) {
    //Panel Head
    var htmlHeader, htmlHeaderContainer;

    htmlHeader = '<h3 class="fd-panel__title">' + data.items[0].RegionItems[0].TenantItems[0].AccountObjectType + '</h3>';
    htmlHeader += '<p class="fd-panel__description">' + data.items[0].RegionItems[0].TenantItems[0].AccountName + ' [' + data.items[0].RegionItems[0].TenantItems[0].AccountId + ']</p>';
    htmlHeaderContainer = '#mainContainer .fd-panel__head';

    $(htmlHeader).appendTo(htmlHeaderContainer);

    //Panel Body - Filters
    $.each(data.items[0].RegionItems[0].TenantItems[0].AccountTags, function () {
        var htmlItem, htmlItemContainer;

        htmlItem = '<span class="fd-badge fd-badge--pill fd-has-margin-right-tiny">' + this.AccountTagLabel + '</span>';
        htmlItemContainer = '#mainContainer .fd-panel__filters';

        $(htmlItem).appendTo(htmlItemContainer);
    });

    //Panel Body - content
    $.each(data.items[0].RegionItems[0].TenantItems[0].AccountObjects, function (i) {
        //Panel Body - Tabs
        var tabItem, tabItemContainer;

        tabItem = '<li class="fd-tabs__item">';
        tabItem += '   <a class="fd-tabs__link link-' + this.AccountObjectId + '" aria-controls="tab' + this.AccountObjectId + '" aria-selected=' + this.AccountObjectTypeExpanded + ' href="#tab' + this.AccountObjectId + '" role="tab" onclick="clickTab' + this.AccountObjectId + '()">';
        tabItem += '       <p class="fd-tabs__count">' + this.AccountObjectItems.length + '</p>';
        tabItem += '       <span class="fd-tabs__tag">' + this.AccountObjectType + '</span>';
        tabItem += '   </a>';
        tabItem += '</li>';
        tabItemContainer = '.fd-tabs';

        $(tabItem).appendTo(tabItemContainer);

        var panelItem, panelItemContainer;

        panelItem = '<div class="fd-tabs__panel" aria-expanded="' + this.AccountObjectTypeExpanded + '" id="tab' + this.AccountObjectId + '" role="tabpanel">';
        panelItem += '</div>';
        panelItemContainer = '#mainContainer .fd-panel__body';

        $(panelItem).appendTo(panelItemContainer);

        //Panel Body - Tables
        var tableItem, tableItemContainer;

        tableItem = '<table class="fd-table">';
        tableItem += '   <thead class="fd-table__header">';
        tableItem += '       <tr class="fd-table__row">';
        tableItem += '       </tr>';
        tableItem += '   </thead>';
        tableItem += '   <tbody class="fd-table__body">';
        tableItem += '   </tbody>';
        tableItem += '</table>';
        tableItemContainer = '#mainContainer #tab' + this.AccountObjectId;

        $(tableItem).appendTo(tableItemContainer);

        //Panel Body - Table heads
        $.each(data.items[0].RegionItems[0].TenantItems[0].AccountObjects[i].AccountObjectLabels, function (j) {
            var thItem, thItemContainer;

            thItem = '<th class="fd-table__cell" scope="col">';
            thItem +=   data.items[0].RegionItems[0].TenantItems[0].AccountObjects[i].AccountObjectLabels[j].AccountObjectItemLabel;
            thItem += '</th>';
            thItemContainer = '#mainContainer #tab' + data.items[0].RegionItems[0].TenantItems[0].AccountObjects[i].AccountObjectId + ' table thead tr';

            $(thItem).appendTo(thItemContainer);
        });

        //Panel Body - Table rows
        $.each(data.items[0].RegionItems[0].TenantItems[0].AccountObjects[i].AccountObjectItems, function () {
            var trItem, trItemContainer;

            trItem = '<tr class="fd-table__row tr-' + this.AccountObjectItemId + '">';
            trItem += '</tr>';
            trItemContainer = '#mainContainer #tab' + data.items[0].RegionItems[0].TenantItems[0].AccountObjects[i].AccountObjectId + ' table tbody';

            $(trItem).appendTo(trItemContainer);
        });
    });

    //Panel Body - Table cells (Tab 1)
    $.each(data.items[0].RegionItems[0].TenantItems[0].AccountObjects[0].AccountObjectItems, function (j) {
        var tdItem, tdItemContainer;

        tdItem = ' <td class="fd-table__cell">';
        tdItem += '     <span class="fd-identifier fd-identifier--s fd-identifier--circle sap-icon--' + this.AccountObjectItemIcon + '" role="presentation"></span>';
        tdItem += ' </td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemName + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemType + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemId + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemAddress + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemAuthor + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemDate + '</td>';
        tdItemContainer = '#mainContainer #tab' + data.items[0].RegionItems[0].TenantItems[0].AccountObjects[0].AccountObjectId + ' .tr-' + this.AccountObjectItemId;
        
        $(tdItem).appendTo(tdItemContainer);
    });

    //Panel Body - Table cells (Tab 2)
    $.each(data.items[0].RegionItems[0].TenantItems[0].AccountObjects[1].AccountObjectItems, function () {
        var tdItem, tdItemContainer;

        tdItem = ' <td class="fd-table__cell">';
        tdItem += '     <span class="fd-identifier fd-identifier--s fd-identifier--circle sap-icon--' + this.AccountObjectItemIcon + '" role="presentation"></span>';
        tdItem += ' </td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemName + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemId + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemType + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemAuthor + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemDate + '</td>';
        tdItemContainer = '#mainContainer #tab' + data.items[0].RegionItems[0].TenantItems[0].AccountObjects[1].AccountObjectId + ' .tr-' + this.AccountObjectItemId;

        $(tdItem).appendTo(tdItemContainer);
    });

    //Panel Body - Table cells (Tab 3)
    $.each(data.items[0].RegionItems[0].TenantItems[0].AccountObjects[2].AccountObjectItems, function () {
        var tdItem, tdItemContainer;

        tdItem = ' <td class="fd-table__cell">';
        tdItem += '     <span class="fd-identifier fd-identifier--s fd-identifier--circle sap-icon--' + this.AccountObjectItemIcon + '" role="presentation"></span>';
        tdItem += ' </td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemName + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemId + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemType + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemAuthor + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemDate + '</td>';
        tdItemContainer = '#mainContainer #tab' + data.items[0].RegionItems[0].TenantItems[0].AccountObjects[2].AccountObjectId + ' .tr-' + this.AccountObjectItemId;

        $(tdItem).appendTo(tdItemContainer);
    });
}