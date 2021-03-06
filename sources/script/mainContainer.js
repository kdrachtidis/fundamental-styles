var mainContainerHead = '#mainContainer .fd-panel__head';
var mainContainerFilters = '#mainContainer .fd-panel__filters';
var mainContainerTabs = '#mainContainer .fd-tabs';
var mainContainerBody = '#mainContainer .fd-panel__body';

function buildMainContainer(data) {
    //Panel Head
    var htmlHeader;
    htmlHeader = '<h3 class="fd-panel__title">' + currentAccountObjectType + '</h3>';
    htmlHeader += '<p class="fd-panel__description">' + currentAccountName + ' [' + currentAccountId + ']</p>';

    $(htmlHeader).appendTo(mainContainerHead);

    //Panel Body - Filters
    $.each(currentAccountTags, function () {
        var htmlItem;
        htmlItem = '<span class="fd-badge fd-badge--pill fd-has-margin-right-tiny">' + this.AccountTagLabel + '</span>';

        $(htmlItem).appendTo(mainContainerFilters);
    });

    //Panel Body - Tab container
    var htmlTabs;
    htmlTabs = '<ul class="fd-tabs fd-tabs--s fd-tabs--compact" role="tablist"></ul>';
    $(htmlTabs).appendTo(mainContainerBody);

    //Panel Body - content
    $.each(currentAccountObjects, function (i) {
        //Panel Body - Tabs
        var tabItem;
        tabItem = '<li class="fd-tabs__item">';
        tabItem += '   <a class="fd-tabs__link link-' + this.AccountObjectId + '" aria-controls="tab' + this.AccountObjectId + '" aria-selected=' + this.AccountObjectTypeExpanded + ' href="#tab' + this.AccountObjectId + '" role="tab" onclick="clickTab' + this.AccountObjectId + '()">';
        tabItem += '       <p class="fd-tabs__count">' + this.AccountObjectItems.length + '</p>';
        tabItem += '       <span class="fd-tabs__tag">' + this.AccountObjectType + '</span>';
        tabItem += '   </a>';
        tabItem += '</li>';

        $(tabItem).appendTo(mainContainerTabs);

        var panelItem;
        panelItem = '<div class="fd-tabs__panel" aria-expanded="' + this.AccountObjectTypeExpanded + '" id="tab' + this.AccountObjectId + '" role="tabpanel">';
        panelItem += '</div>';

        $(panelItem).appendTo(mainContainerBody);

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
        $.each(currentAccountObjects[i].AccountObjectLabels, function (j) {
            var thItem, thItemContainer;

            thItem = '<th class="fd-table__cell" scope="col">';
            thItem +=   currentAccountObjects[i].AccountObjectLabels[j].AccountObjectItemLabel;
            thItem += '</th>';
            thItemContainer = '#mainContainer #tab' + currentAccountObjects[i].AccountObjectId + ' table thead tr';

            $(thItem).appendTo(thItemContainer);
        });

        //Panel Body - Table rows
        $.each(currentAccountObjects[i].AccountObjectItems, function () {
            var trItem, trItemContainer;

            trItem = '<tr class="fd-table__row tr-' + this.AccountObjectItemId + '">';
            trItem += '</tr>';
            trItemContainer = '#mainContainer #tab' + currentAccountObjects[i].AccountObjectId + ' table tbody';

            $(trItem).appendTo(trItemContainer);
        });
    });

    //Panel Body - Table cells (Tab 1)
    $.each(currentAccountObjects[0].AccountObjectItems, function (j) {
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
        tdItemContainer = '#mainContainer #tab' + currentAccountObjects[0].AccountObjectId + ' .tr-' + this.AccountObjectItemId;
        
        $(tdItem).appendTo(tdItemContainer);
    });

    //Panel Body - Table cells (Tab 2)
    $.each(currentAccountObjects[1].AccountObjectItems, function () {
        var tdItem, tdItemContainer;

        tdItem = ' <td class="fd-table__cell">';
        tdItem += '     <span class="fd-identifier fd-identifier--s fd-identifier--circle sap-icon--' + this.AccountObjectItemIcon + '" role="presentation"></span>';
        tdItem += ' </td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemName + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemId + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemType + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemAuthor + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemDate + '</td>';
        tdItemContainer = '#mainContainer #tab' + currentAccountObjects[1].AccountObjectId + ' .tr-' + this.AccountObjectItemId;

        $(tdItem).appendTo(tdItemContainer);
    });

    //Panel Body - Table cells (Tab 3)
    $.each(currentAccountObjects[2].AccountObjectItems, function () {
        var tdItem, tdItemContainer;

        tdItem = ' <td class="fd-table__cell">';
        tdItem += '     <span class="fd-identifier fd-identifier--s fd-identifier--circle sap-icon--' + this.AccountObjectItemIcon + '" role="presentation"></span>';
        tdItem += ' </td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemName + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemId + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemType + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemAuthor + '</td>';
        tdItem += ' <td class="fd-table__cell">' + this.AccountObjectItemDate + '</td>';
        tdItemContainer = '#mainContainer #tab' + currentAccountObjects[2].AccountObjectId + ' .tr-' + this.AccountObjectItemId;

        $(tdItem).appendTo(tdItemContainer);
    });
}

function emptyMainContainer() {
    $(mainContainerHead).empty();
    $(mainContainerFilters).empty();
    $(mainContainerBody).empty();
}