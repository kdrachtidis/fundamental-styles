function getData(customPath) {
    $.ajax({
        dataType: "json",
        url: customPath + '/src/json/ContentData.min.json',
        success: buildContainers,
        error: function () {
            console.log('No JSON found.');
        },
        complete: function () {
            console.log('JSON loaded.');
        }
    });
}

function buildContainers(data){
    buildLeftSidebar(data, 0, 0);
    buildLeftContainer(data, 0, 0, 0);
    buildMainContainer(data, 0, 0, 0);
    buildRightContainer(data, 0, 0, 0);
    buildRightSidebar(data, 0, 0, 0);
}