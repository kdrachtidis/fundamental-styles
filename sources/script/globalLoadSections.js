function loadShell(customPath) {
    $('.fd-shell__header').load(customPath + 'src/html/shellBar.min.html .fd-shellbar', function () {
        console.log('Shell header loaded.');
    });
    $('.fd-app__main').load(customPath + 'src/html/pageContainer.min.html .fd-page', function () {
        console.log('App loaded.');
        loadSection(customPath);
    });
    $('.fd-shell__footer').load(customPath + 'src/html/footerBar.min.html .fd-bar', function () {
        console.log('Footer loaded.');
    });
}

function loadPanels(customPath) {
    $('#leftSidebar-shell').load(customPath + 'src/html/leftSidebar.min.html .fd-panel', function () {
        console.log('Left sidebar loaded.');
    });
    $('#leftContainer-shell').load(customPath + 'src/html/leftContainer.min.html .fd-panel', function () {
        console.log('Left container loaded.');
    });
    $('#mainContainer-shell').load(customPath + 'src/html/mainContainer.min.html .fd-panel', function () {
        console.log('Main container loaded.');
    });
    $('#rightContainer-shell').load(customPath + 'src/html/rightContainer.min.html .fd-panel', function () {
        console.log('Right container loaded.');
    });
    $('#rightSidebar-shell').load(customPath + 'src/html/rightSidebar.min.html .fd-panel', function () {
        console.log('Right sidebar loaded.');
    });
}

function loadSection(customPath) {
    $('.fd-page__content').load(customPath + 'src/html/sectionColumns.min.html .fd-section', function () {
        console.log('Section container loaded.');
        loadPanels(customPath);
    });
}