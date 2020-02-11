function getStructure() {
    $('#ux-shellBar').load('src/html/shellBar.min.html', function(){
        console.log('Shell bar loaded.');
    });
    $('#ux-leftSidebar').load('src/html/leftSidebar.min.html' , function(){
        console.log('Left sidebar loaded.');
    });
    $('#ux-leftContainer').load('src/html/leftContainer.min.html' , function(){
        console.log('Left container loaded.');
    });
    $('#ux-mainContainer').load('src/html/mainContainer.min.html' , function(){
        console.log('Main container loaded.');
    });
    $('#ux-rightContainer').load('src/html/rightContainer.min.html' , function(){
        console.log('Right container loaded.');
    });
    $('#ux-rightSidebar').load('src/html/rightSidebar.min.html' , function(){
        console.log('Right sidebar loaded.');
    });
}