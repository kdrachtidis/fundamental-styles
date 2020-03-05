function buildInitial(data){
    $.when(mapData(data)).done(function(){
        buildLeftSidebar();
        buildLeftContainer();
        buildMainContainer();
        buildRightContainer();
        buildRightSidebar();
    });
}

function buildTenant(data){
    $.when(mapData(data)).done(function(){
        emptyLeftContainer();
        buildLeftContainer();
        emptyMainContainer();
        buildMainContainer();
        emptyRightContainer();
        buildRightContainer();
        emptyRightSidebar();
        buildRightSidebar();
    });
}

function buildAccount(data){
    $.when(mapData(data)).done(function(){
        emptyMainContainer();
        buildMainContainer();
        emptyRightContainer();
        buildRightContainer();
        emptyRightSidebar();
        buildRightSidebar();
    });
}