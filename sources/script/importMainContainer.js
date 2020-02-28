function mainContainerJSON(data) {
    var htmlHeader;
    var SelectedItemName = data.regions[0].tenants[0].accounts[0].AccountName;
    var SelectedItemId = data.regions[0].tenants[0].accounts[0].AccountId;
    var SelectedItemTags = data.regions[0].tenants[0].accounts[0].AccountTags;
    var SelectedItemType = data.ThirdLevelContent;
    var SelectedItemObjects = data.regions[0].tenants[0].accounts[0].AccountObjects;
    var SelectedItemObjectsTab1 = data.regions[0].tenants[0].accounts[0].AccountObjects[0].AccountObjectItems;
    var SelectedItemObjectsTab2 = data.regions[0].tenants[0].accounts[0].AccountObjects[1].AccountObjectItems;
    var SelectedItemObjectsTab3 = data.regions[0].tenants[0].accounts[0].AccountObjects[2].AccountObjectItems;
    var SelectedItemObjectsTab1Id = data.regions[0].tenants[0].accounts[0].AccountObjects[0].AccountObjectId;
    var SelectedItemObjectsTab2Id = data.regions[0].tenants[0].accounts[0].AccountObjects[1].AccountObjectId;
    var SelectedItemObjectsTab3Id = data.regions[0].tenants[0].accounts[0].AccountObjects[2].AccountObjectId;

    //Panel Head
    htmlHeader = '<h3 class="fd-panel__title">' + SelectedItemType + '</h3>';
    htmlHeader += '<p class="fd-panel__description">' + SelectedItemName + ' ' + SelectedItemId + '</p>';
    $(htmlHeader).appendTo('#mainContainer .fd-panel__head');

    //Panel Body - Filters
    $.each(SelectedItemTags, function () {
        var htmlItem;

        htmlItem = '<span class="fd-badge fd-badge--pill fd-has-margin-right-tiny">' + this.label + '</span>';
        $(htmlItem).appendTo("#mainContainer .fd-panel__filters");
    });

    //Panel Body - content
    $.each(SelectedItemObjects, function (i) {
        //Panel Body - Tabs
        var tabItem;

        tabItem = '<li class="fd-tabs__item">';
        tabItem += '   <a class="fd-tabs__link link-' + this.AccountObjectId + '" aria-controls="tab' + this.AccountObjectId + '" aria-selected=' + this.AccountObjectTypeExpanded + ' href="#tab' + this.AccountObjectId + '" role="tab" onclick="clickTab' + this.AccountObjectId + '()">';
        tabItem += '       <p class="fd-tabs__count">' + this.AccountObjectItems.length + '</p>';
        tabItem += '       <span class="fd-tabs__tag">' + this.AccountObjectType + '</span>';
        tabItem += '   </a>';
        tabItem += '</li>';
        $(tabItem).appendTo('.fd-tabs');

        var panelItem;

        panelItem = '<div class="fd-tabs__panel" aria-expanded="' + this.AccountObjectTypeExpanded + '" id="tab' + this.AccountObjectId + '" role="tabpanel">';
        panelItem += '</div>';
        $(panelItem).appendTo('#mainContainer .fd-panel__body');

        //Panel Body - Tables
        var tableItem;

        tableItem = '<table class="fd-table">';
        tableItem += '   <thead class="fd-table__header">';
        tableItem += '       <tr class="fd-table__row">';
        tableItem += '       </tr>';
        tableItem += '   </thead>';
        tableItem += '   <tbody class="fd-table__body">';
        tableItem += '   </tbody>';
        tableItem += '</table>';

        $(tableItem).appendTo('#mainContainer #tab' + this.AccountObjectId);

        //Panel Body - Table heads
        $.each(data.regions[0].tenants[0].accounts[0].AccountObjects[i].AccountObjectLabels, function (j) {
            var thItem;

            thItem = '<th class="fd-table__cell" scope="col">';
            thItem +=   data.regions[0].tenants[0].accounts[0].AccountObjects[i].AccountObjectLabels[j].AccountObjectItemLabel;
            thItem += '</th>';
            $(thItem).appendTo('#mainContainer #tab' + data.regions[0].tenants[0].accounts[0].AccountObjects[i].AccountObjectId + ' table thead tr');
        });

        //Panel Body - Table rows
        $.each(data.regions[0].tenants[0].accounts[0].AccountObjects[i].AccountObjectItems, function () {
            var trItem;

            trItem = '<tr class="fd-table__row tr-' + this.AccountObjectItemId + '">';
            trItem += '</tr>';
            $(trItem).appendTo('#mainContainer #tab' + data.regions[0].tenants[0].accounts[0].AccountObjects[i].AccountObjectId + ' table tbody');
        });
    });

    //Panel Body - Table cells (Tab 1)
    $.each(SelectedItemObjectsTab1, function (j) {
        var tdItem;

        tdItem = ' <td class="fd-table__cell">';
        tdItem += '     <span class="fd-identifier fd-identifier--s fd-identifier--circle sap-icon--' + this.AccountObjectItemIcon + '" role="presentation"></span>';
        tdItem += ' </td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemName + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemType + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemId + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemAddress + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemAuthor + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemDate + '</td>';
        $(tdItem).appendTo('#mainContainer #tab' + SelectedItemObjectsTab1Id + ' .tr-' + this.AccountObjectItemId);
    });

    //Panel Body - Table cells (Tab 2)
    $.each(SelectedItemObjectsTab2, function () {
        var tdItem;

        tdItem = ' <td class="fd-table__cell">';
        tdItem += '     <span class="fd-identifier fd-identifier--s fd-identifier--circle sap-icon--' + this.AccountObjectItemIcon + '" role="presentation"></span>';
        tdItem += ' </td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemName + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemId + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemType + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemAuthor + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemDate + '</td>';
        $(tdItem).appendTo('#mainContainer #tab' + SelectedItemObjectsTab2Id + ' .tr-' + this.AccountObjectItemId);
    });

    //Panel Body - Table cells (Tab 3)
    $.each(SelectedItemObjectsTab3, function () {
        var tdItem;

        tdItem = ' <td class="fd-table__cell">';
        tdItem += '     <span class="fd-identifier fd-identifier--s fd-identifier--circle sap-icon--' + this.AccountObjectItemIcon + '" role="presentation"></span>';
        tdItem += ' </td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemName + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemId + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemType + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemAuthor + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemDate + '</td>';
        $(tdItem).appendTo('#mainContainer #tab' + SelectedItemObjectsTab3Id + ' .tr-' + this.AccountObjectItemId);
    });
}