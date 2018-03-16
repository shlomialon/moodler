import {h} from "hyperapp"

export default ({loading, courseList, typeBox}, {init, setTypeBoxValue, saveCourse, deleteCourse, shortendNameCourse}) =>
    <div className={"reminder-container"} oncreate={init}>
        <div className={"row"}>
            <center>
                <input oncreate={element => element.focus()} oninput={e => setTypeBoxValue(e.target.value)} type="text"
                       placeholder="הקלד שם הקורס.." value={typeBox}
                       onkeyup={e => {
                           e.keyCode === 13 ? saveCourse() : null
                       }}/>

                <input value={"הוספה"} type="submit" onclick={saveCourse} className={"button-primary"}>
                </input>
            </center>
        </div>
        <div className={"container"}>
            <ul>{
                courseList.map((course, idx) => {
                    let shortenedName;
                    if (course.length >= 55) {
                        shortenedName = course.slice(0, 55) + "..."
                    }
                    else {
                        shortenedName = course
                    }
                    return <div className={"row"} id={idx}>
                        <div className={"one-third column"}>
                            <button onclick={deleteCourse.bind(null, idx)}
                                    className={"icon-trash delete-button"}>הסר
                            </button>
                        </div>
                        <div className={"two-thirds column"}><a className={"course"}>{shortenedName}</a></div>
                    </div>
                })
            }
                <center>
                    {!courseList.length ? <h3>לא הוספו קורסים לרשימה.</h3> : null}
                </center>
            </ul>
        </div>
    </div>
;


