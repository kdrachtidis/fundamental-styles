var contentData;

function getInitialData() {
    $.ajax({
        dataType: "json",
        url: globalSourcePath + '/src/json/ContentData.min.json',
        success: mapData,
        error: function () {
            console.log('getInitialData(): No JSON found.');
        },
        complete: buildInitial
    });
}

function getAccountData() {
    $.ajax({
        dataType: "json",
        url: globalSourcePath + '/src/json/ContentData.min.json',
        success: mapData,
        error: function () {
            console.log('getAccountData(): No JSON found.');
        },
        complete: buildAccount
    });
}

function getTenantData() {
    $.ajax({
        dataType: "json",
        url: globalSourcePath + '/src/json/ContentData.min.json',
        success: mapData,
        error: function () {
            console.log('getTenantData(): No JSON found.');
        },
        complete: buildTenant
    });
}