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
    buildLeftSidebar(data);
    buildLeftContainer(data);
    buildMainContainer(data);
    buildRightContainer(data);
    buildRightSidebar(data);
}