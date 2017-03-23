
$(document).ready(function () {
    $('#submit_btn').click(onAddBtnClick);
    updateCourseList();
    setUpLinkListeners();
})




function onAddBtnClick(params) {
    var typedCourse = $('#course_input').val();
    $('#course_input').val('');
    saveCourse(typedCourse);

}

function saveCourse(courseName) {
    var courselist = [];

    chrome.storage.sync.get('courselist', function (result) {
        if (result.courselist == null) {
            courselist.push(courseName);
            chrome.storage.sync.set({ 'courselist': courselist }, function () {
                updateCourseList();
            });
        } else {
            courselist = result.courselist;
            if (courselist.indexOf(courseName) == -1) {
                courselist.push(courseName);
            }
            chrome.storage.sync.set({ "courselist": courselist }, function () {
                updateCourseList();
            });
        }
    })
}


function updateCourseList() {
    var list = $('#saved_courses');
    list.empty();

    chrome.storage.sync.get('courselist', function (result) {
        var items = result.courselist;

        console.log(items);
        for (var item in items) {
            var courseItem = document.createElement("li");
            courseItem.textContent = items[item];
            list.append(courseItem);
        }
    });

}

function setUpLinkListeners() {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
}



