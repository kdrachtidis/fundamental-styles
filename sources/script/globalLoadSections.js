function loadShell() {
    $('.fd-shell__header').load(globalSourcePath + 'src/html/shellBar.min.html .fd-shellbar', function () {
        console.log('loadShell(): Shell header loaded.');
    });
    $('.fd-app__main').load(globalSourcePath + 'src/html/pageContainer.min.html .fd-page', function () {
        console.log('loadShell(): Shell app loaded.');
        loadSection(globalSourcePath);
    });
    $('.fd-shell__footer').load(globalSourcePath + 'src/html/footerBar.min.html .fd-bar', function () {
        console.log('loadShell(): Shell footer loaded.');
    });
}

function loadPanels() {
    $('#leftSidebar-shell').load(globalSourcePath + 'src/html/leftSidebar.min.html .fd-panel', function () {
        console.log('loadPanels(): Left sidebar loaded.');
    });
    $('#leftContainer-shell').load(globalSourcePath + 'src/html/leftContainer.min.html .fd-panel', function () {
        console.log('loadPanels(): Left container loaded.');
    });
    $('#mainContainer-shell').load(globalSourcePath + 'src/html/mainContainer.min.html .fd-panel', function () {
        console.log('loadPanels(): Main container loaded.');
    });
    $('#rightContainer-shell').load(globalSourcePath + 'src/html/rightContainer.min.html .fd-panel', function () {
        console.log('loadPanels(): Right container loaded.');
    });
    $('#rightSidebar-shell').load(globalSourcePath + 'src/html/rightSidebar.min.html .fd-panel', function () {
        console.log('loadPanels(): Right sidebar loaded.');
    });
}

function loadSection() {
    $('.fd-page__content').load(globalSourcePath + 'src/html/sectionColumns.min.html .fd-section', function () {
        console.log('loadSection(): Section container loaded.');
        loadPanels();
    });
}