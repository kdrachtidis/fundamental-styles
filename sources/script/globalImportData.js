function buildContainers(data){
    $.when(mapData(data)).done(function(){
        buildLeftSidebar();
        buildLeftContainer();
        buildMainContainer();
        buildRightContainer();
        buildRightSidebar();
    });
}

function selectAccount(currentId) {
    globalSelectedAccount = currentId.substring(currentId.length - 2, currentId.length) - 1;
    console.log(globalSelectedAccount);
    getAccountData();
}

function selectTenant(currentId) {
    globalSelectedTenant = currentId.substring(currentId.length - 2, currentId.length) - 1;
    console.log(globalSelectedTenant);
    getTenantData();
}