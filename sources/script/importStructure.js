function getStructure() {
    $('#shellBar-shell').load('src/html/shellBar.min.html #shellBar', function(){
        console.log('Shell bar loaded.');
    });
    $('#leftSidebar-shell').load('src/html/leftSidebar.min.html #leftSidebar' , function(){
        console.log('Left sidebar loaded.');
    });
    $('#leftContainer-shell').load('src/html/leftContainer.min.html #leftContainer' , function(){
        console.log('Left container loaded.');
    });
    $('#mainContainer-shell').load('src/html/mainContainer.min.html #mainContainer' , function(){
        console.log('Main container loaded.');
    });
    $('#rightContainer-shell').load('src/html/rightContainer.min.html #rightContainer' , function(){
        console.log('Right container loaded.');
    });
    $('#rightSidebar-shell').load('src/html/rightSidebar.min.html #rightSidebar' , function(){
        console.log('Right sidebar loaded.');
    });
}