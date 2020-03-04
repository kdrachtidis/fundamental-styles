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
    $.when(mapData(data)).done(function(){
        buildLeftSidebar();
        buildLeftContainer();
        buildMainContainer();
        buildRightContainer();
        buildRightSidebar();
    });
}

function selectAccount(currentId) {
    var selectedAccountNo = currentId.substring(currentId.length - 2, currentId.length) - 1;
    globalSelectedAccount = selectedAccountNo;
    console.log(globalSelectedAccount);
    //buildRightSidebar();
}