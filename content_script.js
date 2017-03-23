
$(document).ready(function () {


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



    var coursesNames = ['מתמטיקה בדידה', 'תקשורת ומחשוב', 'סוגיות בכלכלה בראי ההלכה',
        'תורת המספרים', 'מסדי נתונים', 'מחשבת חז"ל - התפתחות והתמודדות', 'מחשבת התפילה',
        'מנהגי ישראל', 'מבוא לתכנות מונחה עצמים', 'מבוא לעולם סייבר', 'מבוא למחשבים ושפת C', 'מבוא לחישוב',
        'לוגיקה ותורת הקבוצות', 'אלגוריתמים 1', 'אוטומטים ושפות פורמליות 1', 'אנגלית טכנית', 'ארכיטקטורה של מחשבים'
        , 'הסתברות'
    ];

    // remove courses
    coursesNames.forEach(function (coursesName) {
        var allFitLinks = $('a').filter(function (index) { return $(this).text().includes(coursesName); });
        for (var i = 0; i < allFitLinks.length; i++) {
            var courseBox = allFitLinks[i].closest('.coursebox');
            if (courseBox != null) {
                courseBox.remove();
            }
        }

    }, this);




});





