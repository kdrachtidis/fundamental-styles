$(document).ready(function () {
    $.when(getStructure()).done(function () { getData(); });
});