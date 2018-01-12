import axios from "axios"


export default {


    toggleLoading: on => state => ({loading: on}),

    init: () => (state, actions) => {
        console.log("init app state");
        actions.loadCourses();
    },
    saveCourse: () => ({typeBox}, actions) => {
        if (!typeBox) {
            console.error("No course was typed in!");
            return;
        }

        chrome.storage.sync.get('courselist', function (result) {
            const courses = result.courselist || [];
            if (courses.indexOf(typeBox) === -1) {
                courses.push(typeBox);
            }

            chrome.storage.sync.set({'courselist': courses}, function () {
                actions.loadCourses();
            });

        })
    },
    deleteCourse: () => (state, actions) => {

    },
    loadCourses: () => {
        chrome.storage.sync.get('courselist', function (result) {
            const courses = result.courselist;
            console.debug(courses);
            return {coursesList: courses}
        });
    }
};
