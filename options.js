// Saves options to chrome.storage.sync.
function save_options() {
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var autolog = document.getElementById('auto_log_toggle').checked;
    var hide_courses = document.getElementById('hide_courses_toggle').checked;
    var hide_extra = document.getElementById('hide_extra_toggle').checked
    chrome.storage.sync.set({
        autologin: autolog,
        username: user,
        password: pass,
        hideCourses: hide_courses,
        hideExtra: hide_extra 
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        autologin: false,
        username: "",
        password: "",
        hideCourses: true,
        hideExtra: true
    }, function (items) {
        document.getElementById('username').value = items.username;
        document.getElementById('password').value = items.password;
        document.getElementById('auto_log_toggle').checked = items.autologin;
        document.getElementById('hide_courses_toggle').checked = items.hideCourses;
        document.getElementById('hide_extra_toggle').checked = items.hideExtra;

        handle_autologging_ui();
    });
}

function handle_autologging_ui() {
    var autolog = document.getElementById('auto_log_toggle').checked;
    if (autolog) {
        document.getElementById('username').disabled = false;
        document.getElementById('password').disabled = false;

    } else {
        document.getElementById('username').disabled = true;
        document.getElementById('password').disabled = true;

    }
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('savebtn').addEventListener('click',
    save_options);
document.getElementById('auto_log_toggle').addEventListener('click', handle_autologging_ui)
