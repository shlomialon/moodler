document.addEventListener('DOMContentLoaded', function () {
    var checkPageButton = document.getElementById('hide_course_btn');
    checkPageButton.addEventListener('click', function () {
        console.log('hide btn clicked!');
        chrome.tabs.getSelected(null, function (tab) {
           
        });
    }, false);
}, false);