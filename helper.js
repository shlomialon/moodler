


function saveCourse(courseName) {
    var courselist = StorageArea.get('courselist');
    if(courselist == null) {
        var list = [];
        list.append(courseName);
         chrome.storage.sync.set({'courselist': list}, function() {
          message('Course list initiated ');
        });
    } else {
        courselist.append(courseName);
        chrome.storage.sync.set({'courselist': courselist}, function() {
          message('Course saved ');
        });
    }
}


function getCourses(params) {
    
}