function error() {
    console.log("No JSON found!");
}

function getData() {
    $.ajax({
        dataType: "json",
        url: "./data/leftSidebarContent.min.json",
        success: leftSidebarJSON,
        error: error
    });

    $.ajax({
        dataType: "json",
        url: "./data/rightSidebarContent.min.json",
        success: rightSidebarJSON,
        error: error
    });

    $.ajax({
        dataType: "json",
        url: "./data/leftContainerContent.min.json",
        success: leftContainerJSON,
        error: error
    });

    $.ajax({
        dataType: "json",
        url: "./data/rightContainerContent.min.json",
        success: rightContainerJSON,
        error: error
    });

    $.ajax({
        dataType: "json",
        url: "./data/ObjectContent.min.json",
        success: mainContainerJSON,
        error: error
    });

    $.ajax({
        dataType: "json",
        url: "./data/simpleFormContent.min.json",
        success: simpleFormJSON,
        error: error
    });
}