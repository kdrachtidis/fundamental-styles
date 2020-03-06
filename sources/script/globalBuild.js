function buildInitial(data){
    $.when(initialiseData(data)).done(function(){
        buildLeftSidebar();
        buildLeftContainer();
        buildMainContainer();
        buildRightContainer();
        buildRightSidebar();
    });
}

function buildTenant(data){
    $.when(initialiseData(data)).done(function(){
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
    $.when(initialiseData(data)).done(function(){
        emptyMainContainer();
        buildMainContainer();
        emptyRightContainer();
        buildRightContainer();
        emptyRightSidebar();
        buildRightSidebar();
    });
}