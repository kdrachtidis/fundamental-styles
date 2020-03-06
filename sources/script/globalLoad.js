function loadPrototypeIndex() {
    $.when(loadShell()).done(getInitialData());
    return true;
}

function loadProrotypePage(){
    $.when(loadSection()).done(getInitialData());
    return true;
}

function loadPrototypeSection(){
    $.when(loadPanels()).done(getInitialData());
    return true;
}

function loadShell() {
    $('.fd-shell__header').load(globalSourcePath + 'src/html/shellBar.min.html .fd-shellbar');
    $('.fd-app__main').load(globalSourcePath + 'src/html/pageContainer.min.html .fd-page', function () {
        loadSection();
    });
    $('.fd-shell__footer').load(globalSourcePath + 'src/html/footerBar.min.html .fd-bar');
    return true;
}

function loadSection() {
    $('.fd-page__content').load(globalSourcePath + 'src/html/sectionColumns.min.html .fd-section', function () {
        loadPanels();
    });
    return true;
}

function loadPanels() {
    $('#leftSidebar-shell').load(globalSourcePath + 'src/html/leftSidebar.min.html .fd-panel');
    $('#leftContainer-shell').load(globalSourcePath + 'src/html/leftContainer.min.html .fd-panel');
    $('#mainContainer-shell').load(globalSourcePath + 'src/html/mainContainer.min.html .fd-panel');
    $('#rightContainer-shell').load(globalSourcePath + 'src/html/rightContainer.min.html .fd-panel');
    $('#rightSidebar-shell').load(globalSourcePath + 'src/html/rightSidebar.min.html .fd-panel');
}