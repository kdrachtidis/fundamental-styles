function buildInitial() {
    buildLeftSidebar();
    buildLeftContainer();
    buildMainContainer();
    buildRightContainer();
    buildRightSidebar();

    return true;
}

function buildTenant() {
    $.when(emptyLeftContainer()).done(buildLeftContainer());
    buildAccount();
    
    return true;
}

function buildAccount() {
    $.when(emptyMainContainer()).done(buildMainContainer());
    $.when(emptyRightContainer()).done(buildRightContainer());
    $.when(emptyRightSidebar()).done(buildRightSidebar());
 
    return true;
}