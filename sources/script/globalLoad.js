function loadPrototypeIndex() {
    loadShell();
    $.when(loadPanels()).done(function(){
        console.log('loadPrototypeIndex()');
        getInitialData();
    });
    return true;
}

function loadPrototypeSection() {

    $.when(loadPanels()).done(function () {
        console.log('loadPrototypeSection()');
        getInitialData();
    });

    return true;
}

function loadShell() {
    console.log('loadShell()');

    $('.fd-shell__header').load(globalSourcePath + 'src/html/shellBar.min.html .fd-shellbar');
    $('.fd-shell__footer').load(globalSourcePath + 'src/html/footerBar.min.html .fd-bar');

    return true;
}

function loadPanels() {
    console.log('loadPanels()');

    $('#leftSidebar-shell').load(globalSourcePath + 'src/html/leftSidebar.min.html .fd-panel');
    $('#leftContainer-shell').load(globalSourcePath + 'src/html/leftContainer.min.html .fd-panel');
    $('#mainContainer-shell').load(globalSourcePath + 'src/html/mainContainer.min.html .fd-panel');
    $('#rightContainer-shell').load(globalSourcePath + 'src/html/rightContainer.min.html .fd-panel');
    $('#rightSidebar-shell').load(globalSourcePath + 'src/html/rightSidebar.min.html .fd-panel');

    return true;
}