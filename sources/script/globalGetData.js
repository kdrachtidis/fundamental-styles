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

function getAccountData() {
    $.ajax({
        dataType: "json",
        url: '././src/json/ContentData.min.json',
        success: function(data){
            $.when(mapData(data)).done(function(){
                emptyMainContainer();
                buildMainContainer();
                emptyRightContainer();
                buildRightContainer();
                emptyRightSidebar();
                buildRightSidebar();
            });
        },
        error: function () {
            console.log('No JSON found.');
        },
        complete: function () {
            console.log('JSON loaded.');
        }
    });
}

function getTenantData() {
    $.ajax({
        dataType: "json",
        url: '././src/json/ContentData.min.json',
        success: function(data){
            $.when(mapData(data)).done(function(){
                emptyLeftContainer();
                buildLeftContainer();
                emptyMainContainer();
                buildMainContainer();
                emptyRightContainer();
                buildRightContainer();
                emptyRightSidebar();
                buildRightSidebar();
            });
        },
        error: function () {
            console.log('No JSON found.');
        },
        complete: function () {
            console.log('JSON loaded.');
        }
    });
}