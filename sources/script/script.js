function getData(customPath) {
    $.ajax({
        dataType: "json",
        url: customPath + '/src/json/ContentData.min.json',
        success: getJSON,
        error: function () {
            console.log('No left sidebar JSON found.');
        },
        complete: function () {
            console.log('Left sidebar JSON loaded.');
        }
    });
}

function getJSON(data){
    leftSidebarJSON(data);
    leftContainerJSON(data);
    mainContainerJSON(data);
    rightContainerJSON(data);
    rightSidebarJSON(data);
}