function error() {
    console.log("No JSON found!");
}

function leftSidebarJSON(data) {
    var itemsCount = data.regions[0].items.length + data.regions[1].items.length;

    $("#proto-left-sidebar-title").append(data.title);
    $("#proto-left-sidebar-description").append(data.description);
    $("#proto-left-sidebar-count, #proto-left-sidebar-dropdown-label").append(itemsCount);

    $('#proto-tenant-group-0').append(data.regions[0].name);
    $('#proto-tenant-group-1').append(data.regions[1].name);

    $(data.regions[0].items).each(function () {
        $('<li class="fd-list__item"><span class="fd-list__title">' + this.header + '</span></li>').appendTo("#proto-left-sidebar-list-group-0");
        //$('<li class="fd-list__item" role="option"><span class="fd-list__title">' + this.header + '</span></li>').appendTo("#proto-left-sidebar-dropdown-list");
    });

    $(data.regions[1].items).each(function () {
        $('<li class="fd-list__item"><span class="fd-list__title">' + this.header + '</span></li>').appendTo("#proto-left-sidebar-list-group-1");
        //$('<li class="fd-list__item" role="option"><span class="fd-list__title">' + this.header + '</span></li>').appendTo("#proto-left-sidebar-dropdown-list");
    });
}

function leftContainerJSON(data) {
    $("#proto-left-container-title").append(data.title);
    $("#proto-left-container-description").append(data.description);
    $("#proto-left-container-count, #proto-left-container-dropdown-label").append(data.items.length);

    $(data.items).each(function () {
        $('<li class="fd-list__item"><span class="fd-list__title">' + this.header + '</span><span class="fd-list__secondary fd-has-color-status-' + this.status_state + '">' + this.status + '</span></li>').appendTo("#proto-left-container-list");
        //$('<li class="fd-list__item" role="option"><span class="fd-list__title">' + this.header + '</span></li>').appendTo("#proto-left-container-dropdown-list");
    });
}

function rightContainerJSON(data) {
    $("#proto-right-container-title").append(data.title + ' <span class="fd-counter" aria-label="Unread count">' + data.items.length + '</span>');
    $("#proto-right-container-description").append(data.description);

    $(data.items).each(function () {
        var htmlItem;
        htmlItem = '<div class="fd-notification fd-notification--information fd-notification--m">';
        htmlItem += '   <div class="fd-notification__header">';
        htmlItem += '       <div class="fd-notification__indicator--information"></div>';
        htmlItem += '       <div class="fd-notification__title">' + this.title + '</div>';
        htmlItem += '       <button class="fd-button--light sap-icon--decline fd-notification__close"></button>';
        htmlItem += '   </div>';
        htmlItem += '   <div class="fd-notification__body">';
        htmlItem += '       <div class="fd-notification__content">';
        htmlItem += '           <div class="fd-notification__text">';
        htmlItem += '               <div class="fd-notification__description">' + this.description + '</div>';
        htmlItem += '               <div class="fd-notification__metadata">' + this.user + ' | ' + this.date + ' ' + this.timestamp + '</div>';
        htmlItem += '           </div>';
        htmlItem += '       </div>';
        htmlItem += '   </div>';
        htmlItem += '</div>';

        $(htmlItem).appendTo("#proto-right-container-list");
    });
}

function rightSidebarJSON(data) {
    $("#proto-right-sidebar-title").append(data.title);
    $("#proto-right-sidebar-description").append(data.items.length + " items loaded.");

    $(data.items).each(function () {
        var htmlItem;
        htmlItem = '<div class="fd-tile">';
        htmlItem += '   <div class="fd-tile__media">';
        htmlItem += '       <span class="fd-identifier fd-identifier--m sap-icon--' + this.icon + ' fd-identifier--transparent"></span>';
        htmlItem += '   </div>';
        htmlItem += '   <div class="fd-tile__content">';
        htmlItem += '       <h3 class="fd-tile__title">' + this.header + '</h3>';
        htmlItem += '       <p class="fd-tile__text">' + this.description + '</p>';
        htmlItem += '   </div>';
        htmlItem += '   <div class="fd-tile__actions">';
        htmlItem += '       <div class="fd-popover fd-popover--right">';
        htmlItem += '           <div class="fd-popover__control">';
        htmlItem += '               <button class="fd-button--light sap-icon--overflow" aria-label="More" aria-expanded="false" aria-controls="WQIDD179" aria-haspopup="true"></button>';
        htmlItem += '           </div>';
        htmlItem += '           <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="true" id="WQIDD179">';
        htmlItem += '               <nav class="fd-menu" id="">';
        htmlItem += '                   <ul class="fd-menu__list">';
        htmlItem += '                       <li><a href="#" class="fd-menu__item">Option 1</a></li>';
        htmlItem += '                       <li><a href="#" class="fd-menu__item">Option 2</a></li>';
        htmlItem += '                       <li><a href="#" class="fd-menu__item">Option 3</a></li>';
        htmlItem += '                   </ul>';
        htmlItem += '               </nav>';
        htmlItem += '           </div>';
        htmlItem += '       </div>';
        htmlItem += '   </div>';
        htmlItem += '</div>';
        $(htmlItem).appendTo("#proto-right-sidebar-list");
    });
}

function mainContainerJSON(data) {
    $("span.header-1").append(data.header);
    $("span.header-2").append(data.subheader);

    $(data.kpis).each(function () {
        $('<li><span class="kpi-amount">' + this.label + '</span><span class="kpi-title">' + this.value + '</span></li>').appendTo("#objectheader div.kpi ol");
    });

    $(data.attributes).each(function () {
        $('<li>' + this.value + '</li>').appendTo("#objectheader div.attribute ol");
    });

    $(data.status).each(function () {
        $('<li>' + this.value + '</li>').appendTo("#objectheader div.status ol");
    });

    $(data.tabs).each(function () {
        $('<li><a href="#">' + this.label + '</a></li>').appendTo("#tabMenu ol");
    });
}

function simpleFormJSON(data) {
    $(data.items).each(function () {
        $('<p class="form-entry"><span class="label">' + this.label + '</span><span class="amount">' + this.amount + '</span></p>').appendTo(".form-content");
    });
}

function getData() {
    $.ajax({
        dataType: "json",
        url: "./data/leftSidebarContent.min.json",
        success: leftSidebarJSON,
        error: error
    });

    $.ajax({
        dataType: "json",
        url: "./data/rightSidebarContent.min.json",
        success: rightSidebarJSON,
        error: error
    });

    $.ajax({
        dataType: "json",
        url: "./data/leftContainerContent.min.json",
        success: leftContainerJSON,
        error: error
    });

    $.ajax({
        dataType: "json",
        url: "./data/rightContainerContent.min.json",
        success: rightContainerJSON,
        error: error
    });

    $.ajax({
        dataType: "json",
        url: "./data/ObjectContent.min.json",
        success: mainContainerJSON,
        error: error
    });

    $.ajax({
        dataType: "json",
        url: "./data/simpleFormContent.min.json",
        success: simpleFormJSON,
        error: error
    });
}