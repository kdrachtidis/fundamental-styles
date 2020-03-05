function getInitialData(customPath) {
    $.ajax({
        dataType: "json",
        url: customPath + '/src/json/ContentData.min.json',
        success: buildInitial,
        error: function () {
            console.log('No JSON found.');
        },
        complete: function () {
            console.log('JSON loaded.');
        }
    });
}

function getAccountData() {
    $.ajax({
        dataType: "json",
        url: '././src/json/ContentData.min.json',
        success: buildAccount,
        error: function () {
            console.log('No JSON found.');
        },
        complete: function () {
            console.log('JSON loaded.');
        }
    });
}

function getTenantData() {
    $.ajax({
        dataType: "json",
        url: '././src/json/ContentData.min.json',
        success: buildTenant,
        error: function () {
            console.log('No JSON found.');
        },
        complete: function () {
            console.log('JSON loaded.');
        }
    });
}

function selectAccount(currentId) {
    globalSelectedAccount = currentId.substring(currentId.length - 2, currentId.length) - 1;
    $('#leftContainer .fd-list__item').attr('aria-selected','false');
    $.when(getAccountData()).done(function(){
        $('#' + currentId).attr('aria-selected','true');
    });
}

function selectTenant(currentId) {
    globalSelectedTenant = currentId.substring(currentId.length - 2, currentId.length) - 1;
    globalSelectedAccount = 0;
    globalSelectedRegion = currentId.substring(7, 8) - 1;
    console.log(globalSelectedRegion);
    $('#leftSidebar .fd-list__item').attr('aria-selected','false');
    $.when(getTenantData()).done(function(){
        $('#' + currentId).attr('aria-selected','true');
    });
}