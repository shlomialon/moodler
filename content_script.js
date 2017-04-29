
$(document).ready(function () {

    var curr_url_path = window.location.href;
    curr_url_path = curr_url_path.replace("https://moodlearn.ariel.ac.il/", "");
    curr_url_path = curr_url_path.replace("http://moodlearn.ariel.ac.il/", "");

    console.log(curr_url_path);

    var signInLink = $('a').filter(function (index) { return $(this).text().includes('התחברות'); });


    switch (curr_url_path) {

        case "": {
            if (signInLink.length > 0) {
                signInLink[0].click();
            } else {
                removeMainFrameAndCourses();
            }
            break;
        }

        case "login/index.php": {
            $('#username').val("315631887");
            $('#password').val("9885");
            $('#loginbtn').click();
        }

        default:
            break;

    }



  function removeMainFrameAndCourses() {
        //remove annoying header
        $('.container-fluid')[0].remove();
        $('#frontpage-ariel').remove();

        //remove accesibility
        $('#inst339474').remove();
        $('#inst28797').remove();
        $('#inst4').remove();
        $('#inst227770').remove();
        $('#block-region-side-post').remove();
        $('#block-region-side-pre').remove();

        // links to remove
        var links = ['דילוג על הקורסים שלי'];
        links.forEach(function (linkName) {
            var allFitLinks = $('a').filter(function (index) { return $(this).text().includes(linkName); });
            for (var i = 0; i < allFitLinks.length; i++) {
                allFitLinks[i].remove();

            }

        }, this);


        var courseNames = [];
        chrome.storage.sync.get('courselist', function (result) {
            courseNames = result.courselist;
            console.debug(courseNames);
            // remove courses
            courseNames.forEach(function (coursesName) {
                var allFitLinks = $('a').filter(function (index) { return $(this).text().includes(coursesName); });
                for (var i = 0; i < allFitLinks.length; i++) {
                    var courseBox = allFitLinks[i].closest('.coursebox');
                    if (courseBox != null) {
                        courseBox.remove();
                    }
                }

            }, this);
        });
    }




});





