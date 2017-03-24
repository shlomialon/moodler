
$(document).ready(function () {
    setUpLinkListeners();
    initEverything();
})


function initEverything() {
    //saves an item to localStorage
    var saveReminder = function (id) {
        var courselist = [];

        chrome.storage.sync.get('courselist', function (result) {
            if (result.courselist == null) {
                courselist.push(id);
                chrome.storage.sync.set({ 'courselist': courselist }, function () {
                    console.log('saved');
                    loadReminders();
                });
            } else {
                courselist = result.courselist;
                if (courselist.indexOf(id) == -1) {
                    courselist.push(id);
                }
                chrome.storage.sync.set({ "courselist": courselist }, function () {
                    console.log('saved');

                    loadReminders();
                });
            }
        });


    };

    //removes item from localStorage
    var deleteReminder = function (id,content) {
        var item = $('#' + id);
        item.addClass('removed-item')
            .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
                $(this).remove();
            });
        var courselist = [];
        chrome.storage.sync.get('courselist', function (result) {
            if (result.courselist != null) {
                courselist = result.courselist;
                var index = courselist.indexOf(content);
                if (index > -1) {
                    courselist.splice(index, 1);
                }

                chrome.storage.sync.set({ 'courselist': courselist }, function () {
                    console.debug('removed');
                    loadReminders();
                });
            }
        });

    };


    var createReminder = function (id,content) {
        var courseItem = '<li id="' + id + '">' + content + '</li>',
            list = $('.reminders li');


        if (!$('#' + id).length) {

            courseItem = $(courseItem).addClass('new-item');
            $('.reminders').append(courseItem);


            var createdItem = $('#' + id);

            createdItem.append($('<button />', {
                "class": "icon-trash delete-button",
                "contenteditable": "false",
                click: function () {
                    deleteReminder(id,content);
                }
            }));

            createdItem.on('keydown', function (ev) {
                if (ev.keyCode === 13) return false;
            });

            saveReminder(content);
        }
    };

    //handler for input
    var handleInput = function () {
        $('#input-form').on('submit', function (event) {
            var input = $('#text');
            var courseName = input.val();
            event.preventDefault();
            if (courseName) {
                createReminder(courseName.replace(/\s/g,''),courseName);
                input.val('');
            }
        });
    };

    var loadReminders = function () {
        chrome.storage.sync.get('courselist', function (result) {
            var items = result.courselist;
            console.debug(items);
            for (var item in items) {
                createReminder(items[item].replace(/\s/g,''), items[item]);
            }
        });
    };






    var init = function () {
        $('#text').focus();
        loadReminders();
        handleInput();
    };
    //start all
    init();
}


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
                chrome.tabs.create({ active: true, url: location });
            };
        })();
    }
}


/*  logic for adding/removing items */





