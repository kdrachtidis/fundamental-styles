function getInitialData() {
    $.ajax({
        dataType: "json",
        url: globalSourcePath + '/src/json/ContentData.min.json',
        success: buildInitial,
        error: function () {
            console.log('getInitialData(): No JSON found.');
        },
        complete: function () {
            console.log('getInitialData()');
        }
    });
}

function getAccountData(currentId) {
    $.ajax({
        dataType: "json",
        url: globalSourcePath + '/src/json/ContentData.min.json',
        success: buildAccount,
        error: function () {
            console.log('getAccountData(): No JSON found.');
        },
        complete: function () {
            console.log('getAccountData(): ' + currentId);
        }
    });
}

function getTenantData(currentId) {
    $.ajax({
        dataType: "json",
        url: globalSourcePath + '/src/json/ContentData.min.json',
        success: buildTenant,
        error: function () {
            console.log('getTenantData(): No JSON found.');
        },
        complete: function () {
            console.log('getTenantData()' + currentId);
        }
    });
}

function selectAccount(currentId) {
    globalSelectedAccount = currentId.substring(currentId.length - 2, currentId.length) - 1;
    $('#leftContainer .fd-list__item').attr('aria-selected','false');
    $.when(getAccountData(currentId)).done(function(){
        $('#' + currentId).attr('aria-selected','true');
    });
}

function selectTenant(currentId) {
    globalSelectedTenant = currentId.substring(currentId.length - 2, currentId.length) - 1;
    globalSelectedAccount = 0;
    globalSelectedRegion = currentId.substring(7, 8) - 1;
    $('#leftSidebar .fd-list__item').attr('aria-selected','false');
    $.when(getTenantData(currentId)).done(function(){
        $('#' + currentId).attr('aria-selected','true');
    });
}