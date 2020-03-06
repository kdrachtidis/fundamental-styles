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
    
    $('#leftSidebar .fd-list__item').attr('aria-selected','false');
    $.when(getTenantData()).done(function(){
        $('#' + currentId).attr('aria-selected','true');
    });
}