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
    $("#proto-right-container-title").append(data.title);
    $("#proto-right-container-description").append(data.items.length + " items loaded.");

    $(data.items).each(function () {
        $('<div class="fd-notification"><div class="fd-notification__header"><div class="fd-notification__title">' + this.title + '</div><button class="fd-button--light sap-icon--decline fd-notification__close"></button></div><div class="fd-notification__body"><div class="fd-notification__content"><div class="fd-notification__text"><div class="fd-notification__description">' + this.description + '</div><div class="fd-notification__metadata">' + this.timestamp + '</div></div></div><div class="fd-notification__footer"><button class="fd-button--light">More Info</button><div class="fd-notification__actions"><button class="fd-button--positive">Approve</button><button class="fd-button--negative">Reject</button></div></div></div></div>').appendTo("#proto-right-container-list");
    });
}

function rightSidebarJSON(data) {
    $("#proto-right-sidebar-title").append(data.title);
    $("#proto-right-sidebar-description").append(data.items.length + " items loaded.");

    $(data.items).each(function () {
        $('<div class="fd-product-tile"><div class="fd-product-tile__content"><h3 class="fd-product-tile__title">' + this.header + '</h3><p class="fd-product-tile__text">' + this.description + '</p></div></div>').appendTo("#proto-right-sidebar-list");
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