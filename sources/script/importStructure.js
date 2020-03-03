function getAllSections(customPath) {
    $('#shellBar-shell').load(customPath + 'src/html/shellBar.min.html #shellBar', function () {
        console.log('Shell bar loaded.');
    });
    $('#pageContainer-shell').load(customPath + 'src/html/pageContainer.min.html #pageContainer', function () {
        getPageSections(customPath);
        console.log('Page container loaded.');
    });
}

function getPageSections(customPath) {
    $('#leftSidebar-shell').load(customPath + 'src/html/leftSidebar.min.html #leftSidebar', function () {
        console.log('Left sidebar loaded.');
    });
    $('#leftContainer-shell').load(customPath + 'src/html/leftContainer.min.html #leftContainer', function () {
        console.log('Left container loaded.');
    });
    $('#mainContainer-shell').load(customPath + 'src/html/mainContainer.min.html #mainContainer', function () {
        console.log('Main container loaded.');
    });
    $('#rightContainer-shell').load(customPath + 'src/html/rightContainer.min.html #rightContainer', function () {
        console.log('Right container loaded.');
    });
    $('#rightSidebar-shell').load(customPath + 'src/html/rightSidebar.min.html #rightSidebar', function () {
        console.log('Right sidebar loaded.');
    });
}